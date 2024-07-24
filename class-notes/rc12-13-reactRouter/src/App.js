import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MyNavbar from "./components/MyNavbar";
import Teacher from "./pages/Teacher"
import CourseCard from "./pages/CourseCard"
import ContactForm from "./pages/ContactForm";
import Paths from "./pages/Paths";
import TeacherDetails from "./pages/TeacherDetails";
import NotFound from "./pages/NotFound";
import CardDetails from "./pages/CardDetails";

function App() {
  return (
    <div className="App">
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
          <Route path="/contacts" element={<ContactForm/>}/>
          <Route path="/paths" element={<Paths/>}/>
          <Route path="*" element={<NotFound/>}/>


        </Routes>


      </Router>


      
    </div>
  );
}

export default App;
