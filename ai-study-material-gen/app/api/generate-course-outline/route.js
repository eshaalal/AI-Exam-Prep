import { NextResponse } from 'next/server';
import { db } from '../../../configs/db';  // Adjust path as needed
import { courseOutlineAIModel } from '../../../configs/AiModel';  // Adjust path as needed
import { STUDY_MATERIAL_TABLE } from '../../../configs/schema';  // Adjust path as needed

export async function POST(req) {
    try {
        const { courseId, topic, courseType, difficultyLevel, createdBy } = await req.json();
        
        const PROMPT = `Generate study material for ${topic} for ${courseType} and level of difficulty should be ${difficultyLevel} with summary of the course, a list of chapters along with summary for each chapter, Topic list in each chapter all in JSON format. The response must be valid JSON.`;
        
        const aiResp = await courseOutlineAIModel.sendMessage(PROMPT);
        
        // Add logging to see raw response
        console.log('Raw AI Response:', aiResp.response.text());
        
        let aiResult;
        try {
            // Clean the response text before parsing
            const responseText = aiResp.response.text().trim();
            // Remove any markdown code blocks if present
            const jsonText = responseText.replace(/```json\n?|\n?```/g, '');
            aiResult = JSON.parse(jsonText);
        } catch (parseError) {
            console.error('JSON Parse Error:', parseError);
            return NextResponse.json(
                { error: 'Failed to parse AI response into JSON' },
                { status: 500 }
            );
        }
        
        const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
            courseId,
            courseType,
            difficultyLevel,
            createdBy,
            topic,
            courseLayout: JSON.stringify(aiResult)
        }).returning();
        
        return NextResponse.json({ result: dbResult[0] });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to generate course outline' },
            { status: 500 }
        );
    }
}