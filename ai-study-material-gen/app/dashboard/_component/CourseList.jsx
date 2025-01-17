"use client"

import React, { useEffect } from 'react'
import axios from 'axios'
import {useUser} from '@clerk/nextjs';
import { useState } from 'react';
import CourseCardItem from './CourseCardItem';
function CourseList() {
    const {user}=useUser();
    const [courseList,setCourseList]=useState([]);
    useEffect(() => {
        user&&GetCourseList();
    }, [user])
    const GetCourseList = async () => {
        try {
            const result = await axios.post('/api/courses', {
                createdBy: user?.primaryEmailAddress?.emailAddress,
            });
            console.log(result.data);
            setCourseList(result.data.result);
        } catch (error) {
            console.log('Error fetching courses:', error.response?.data || error.message);
        }
    };
    
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-2xl'>Your Study Material</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2'>
            {courseList.map((course,index)=>(
                <CourseCardItem key={index} course={course}/>   
                ))}
        </div>
    </div>
  )
}

export default CourseList