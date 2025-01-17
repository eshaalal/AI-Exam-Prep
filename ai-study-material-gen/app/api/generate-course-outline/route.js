import { courseOutlineAIModel } from '../../../configs/AiModel';
import { STUDY_MATERIAL_TABLE } from '../../../configs/schema';
import {NextResponse} from 'next/server';
export async function POST(req){
    const {courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();
    const PROMPT='Generate study material for '+topic+' for '+courseType+' and level of difficulty should be '+difficultyLevel+' with  summary of the course, a list of chapters along with  summary for each chapter, Topic list in each chapter all in JSON format'
    const aiResp=await courseOutlineAIModel.sendMessage(PROMPT);
    const aiResult=JSON.parse(aiResp.response.text());
    const dbResult=await db.insert(STUDY_MATERIAL_TABLE).value({
        courseId:courseId,
        courseType:courseType,
        difficultyLevel:difficultyLevel,
        createdBy:createdBy,
        topic:topic,
        courseLayout:aiResult
    }).returning({STUDY_MATERIAL_TABLE})
    console.log(dbResult);
    return NextResponse.json({result:dbResult[0]});
    
}