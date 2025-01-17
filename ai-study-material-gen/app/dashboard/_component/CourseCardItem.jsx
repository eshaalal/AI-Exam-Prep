import React from 'react';
import Image from 'next/image';
import { Progress } from "../../../components/ui/progress";
import { Button } from '../../../components/ui/button';

function CourseCardItem({ course }) {
    const courseLayout = course?.courseLayout ? JSON.parse(course.courseLayout) : null;

    return (
        <div className="relative p-4 border rounded-lg shadow-md"> {/* Parent container */}
            {/* Date positioned in the top-right corner */}
            <h2 className="absolute top-2 right-2 text-[10px] bg-gray-200 text-black p-1 px-2 rounded">
                20 DEC 2024
            </h2>
            
            <div className="flex items-center gap-2">
                {/* Image Section */}
                <Image src={'/knowledge.png'} alt="laptop" width={50} height={50} />
            </div>

            {/* Course Content */}
            <h2 className="mt-3 text-lg font-medium">{courseLayout?.course_title}</h2>
            <p className="line-clamp-2 text-sm text-gray-500">
                {courseLayout?.course_summary || "No summary available"}
            </p>
            <div className='mt-3'>
                <Progress value={0}/>
            </div>
            <div className='mt-3 flex justify-end'>
                <Button>View</Button>
            </div>
        </div>
    );
}

export default CourseCardItem;
