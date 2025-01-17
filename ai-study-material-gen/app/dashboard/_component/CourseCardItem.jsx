import React from 'react';
import Image from 'next/image';
import { Progress } from "../../../components/ui/progress";
import { Button } from '../../../components/ui/button';
import { RefreshCw } from 'lucide-react';

function CourseCardItem({ course }) {
    const courseLayout = course?.courseLayout ? JSON.parse(course.courseLayout) : null;
    
    // Convert status to string and trim whitespace to ensure reliable comparison
    const status = String(course?.status || '').trim();
    const isGenerating = status.toLowerCase() === 'generating';

    return (
        <div className="relative p-4 border rounded-lg shadow-md">
            <h2 className="absolute top-2 right-2 text-xs bg-gray-200 text-black p-1 px-2 rounded">
                20 DEC 2024
            </h2>
            
            <div className="flex items-center gap-2">
                <Image src="/knowledge.png" alt="laptop" width={50} height={50} />
            </div>
            
            <h2 className="mt-3 text-lg font-medium">
                {courseLayout?.course_title || "Untitled Course"}
            </h2>
            
            <p className="line-clamp-2 text-sm text-gray-500">
                {courseLayout?.course_summary || "No summary available"}
            </p>
            
            <div className="mt-3">
                <Progress value={0} />
            </div>
            
            <div className="mt-3 flex justify-end">
                {isGenerating ? (
                    <span className="text-sm flex gap-2 items-center px-3 py-1 rounded-full bg-gray-500 text-white text-xs">
                        <RefreshCw className='h-5 animate-spin '/>
                        Generating...
                    </span>
                ) : (
                    <Button>View</Button>
                )}
            </div>
        </div>
    );
}

export default CourseCardItem;
