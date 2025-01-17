import CourseList from './_component/CourseList'
import React from 'react'
import WelcomeBanner from './_component/WelcomeBanner'
function Dashboard() {
  return (
    <div>
      <WelcomeBanner/>
      <CourseList/>
    </div>
    
  )
}

export default Dashboard