import {NextResponse} from 'next/server';
import {courseOutlineAIModel} from '../../../configs/AiModel'
import {db} from '../../../configs/db';
import {STUDY_MATERIAL_TABLE} from '../../../configs/schema';
export async function POST(req){
    const {courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();
    const PROMPT='Generate a study material for '+topic+' for '+courseType+' and level of difficulty will be '+difficultyLevel+' with summary of courses, List of chapters along with summary for each chapter, Topic list in each chapter in JSON format';
    const aiResp= await courseOutlineAIModel.sendMessage(PROMPT);
    const aiResult= JSON.parse(aiResp.response.text());
    const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
        courseId: courseId,
        
        courseType: courseType,
    
        createdBy: createdBy,
        topic: topic,
        courseLayout: aiResult
    }).returning({STUDY_MATERIAL_TABLE});
    console.log(dbResult);

    return NextResponse.json({result:dbResult[0]})
}