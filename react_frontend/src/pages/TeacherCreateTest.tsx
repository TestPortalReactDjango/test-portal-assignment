import React from 'react';
import TeacherNavigationBar from '../components/TeacherNavigationBar';
import FormTest from '../components/FormTest';

const TeacherCreateTest:React.FC=()=>{
    return(
        <div className="flex flex-col min-h-screen">
           <TeacherNavigationBar/>
           <div className="flex-1 flex justify-center items-center bg-blue-200">
               <FormTest/>
           </div>
        </div>
    )
}

export default TeacherCreateTest;