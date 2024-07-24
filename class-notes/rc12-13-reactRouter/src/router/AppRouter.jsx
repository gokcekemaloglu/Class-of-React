import React from 'react'
import Home from "../pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher"
import CourseCard from "../pages/CourseCard"
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import TeacherDetails from "../pages/TeacherDetails";
import NotFound from "../pages/NotFound";
import CardDetails from "../pages/CardDetails";
import FS from "../pages/FS";
import AWS from "../pages/AWS";
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <Router>
        <MyNavbar/>
        <Routes>

            {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile           başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . */}
            <Route exact path="/" element={<Home/>}/>
            <Route path="/teacher" element={<Teacher/>}/>
            <Route path="/teacher/:id" element={<TeacherDetails/>}/>

            {/* Route'larda değişken tanımlayacaksak önüne süslü yerine : koyarız */}

            <Route path="/courses" element={<CourseCard/>}/>
            <Route path="/courses/:name" element={<CardDetails/>}/>

            {/* şifre kontrolü ile girilebilecek sayfalar için PrivateRouter a yönlendirdir */}
            <Route path="/contacts" element={<PrivateRouter/>}>
                <Route path="" element={<ContactForm/>}/>
            </Route>

            {/* <Route path="/contacts" element={<ContactForm/>}/> */}
          
            <Route path="/paths" element={<Paths/>}>
              <Route path="/paths/fs" element={<FS/>}/>
              <Route path="aws" element={<AWS/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>


        </Routes>


    </Router>

  )
}

export default AppRouter