import "./Component/Welcome/App.scss"


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Welcome from "./Component/Welcome";
import Page404 from "./Component/404";
import Courses from "./Component/Courses";
import CsharCourse from "./Component/csharCourse";
import Dashboard from "./Component/csharCourse/ModuleOne/Dashboard/Dashboard";
import Lesson1 from "./Component/csharCourse/ModuleOne/Lesson1/lesson1";
import Lesson2 from "./Component/csharCourse/ModuleOne/Lesson2/lesson2";
import Lesson3 from "./Component/csharCourse/ModuleOne/Lesson3/lesson3";
import Lesson4 from "./Component/csharCourse/ModuleOne/Lesson4/lesson4";
import Lesson5 from "./Component/csharCourse/ModuleOne/Lesson5/lesson5";
import Lesson6 from "./Component/csharCourse/ModuleOne/Lesson6/lesson6";
import Lesson7 from "./Component/csharCourse/ModuleOne/Lesson7/lesson7";
import Lesson8 from "./Component/csharCourse/ModuleOne/Lesson8/lesson8";
import Lesson10 from "./Component/csharCourse/ModuleOne/Lesson10/lesson10";
import Lesson9 from "./Component/csharCourse/ModuleOne/Lesson9/lesson9";
import Lesson11 from "./Component/csharCourse/ModuleTwo/Lesson11/lesson11";
import Dashboard2 from "./Component/csharCourse/ModuleTwo/Dashboard/Dashboard2";
import Lesson12 from "./Component/csharCourse/ModuleTwo/Lesson12/lesson12";
import Lesson13 from "./Component/csharCourse/ModuleTwo/Lesson13/lesson13";
import Lesson14 from "./Component/csharCourse/ModuleTwo/Lesson14/lesson14";
import Lesson15 from "./Component/csharCourse/ModuleTwo/Lesson15/Lesson15";
import Lesson16 from "./Component/csharCourse/ModuleTwo/Lesson16/Lesson16";
import Lesson17 from "./Component/csharCourse/ModuleTwo/Lesson17/lesson17";
import Lesson18 from "./Component/csharCourse/ModuleTwo/Lesson18/lesson18";
import Lesson19 from "./Component/csharCourse/ModuleTwo/Lesson19/lesson19";
import Lesson20 from "./Component/csharCourse/ModuleTwo/Lesson20/Lesson20";
import Lesson21 from "./Component/csharCourse/ModuleThree/Lesson21/lesson21";
import Lesson22 from "./Component/csharCourse/ModuleThree/Lesson22/lesson22";
import Lesson23 from "./Component/csharCourse/ModuleThree/Lesson23/lesson23";
import Lesson24 from "./Component/csharCourse/ModuleThree/Lesson24/Lesson24";
import Lesson25 from "./Component/csharCourse/ModuleThree/Lesson25/Lesson25";
import Lesson26 from "./Component/csharCourse/ModuleThree/Lesson26/lesson26";
import Lesson27 from "./Component/csharCourse/ModuleThree/Lesson27/lesson27";
import Lesson28 from "./Component/csharCourse/ModuleThree/Lesson28/lesson28";
import Lesson29 from "./Component/csharCourse/ModuleThree/Lesson29/lesson29";
import Lesson30 from "./Component/csharCourse/ModuleThree/Lesson30/lesson30";


function App() {
  return (

      <Router>



          <Routes>
              <Route path="/" element={<Welcome />}></Route>
              <Route path="/courses" element={<Courses />}></Route>

              {/*CSharp Module*/}
              <Route path="/cSharpCourse" element={<CsharCourse />}></Route>

              <Route path="/cSharpCourse/DashBoardCsharp" element={<Dashboard />}></Route>
              <Route path="/cSharpCourse/DashBoardCsharp2" element={<Dashboard2 />}></Route>



              <Route path="/cSharpCourse/ModulOne"  element={<Lesson1 />}>
                  <Route path="csharp"  element={<Lesson1 />}></Route>
                  <Route path="visual_Studio_2021_va_Console_Log" element={<Lesson2 />}></Route>
                  <Route path="ozgaruvchilar" element={<Lesson3 />}></Route>
                  <Route path="dataType" element={<Lesson4 />}></Route>
                  <Route path="stringlar_bilash_ishlash" element={<Lesson5 />}></Route>
                  <Route path="number(sonlar)_bilan_ishlash" element={<Lesson6 />}></Route>
                  <Route path="calculator_tuzish" element={<Lesson7 />}></Route>
                  <Route path="madlib_o'yini" element={<Lesson8 />}></Route>
                  <Route path="arraylar" element={<Lesson9 />}></Route>
                  <Route path="metod" element={<Lesson10 />}></Route>
              </Route>



              {/*/// Modul2 ///*/}
              <Route path="/cSharpCourse/ModulTwo/return" element={<Lesson11 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/if" element={<Lesson12 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/if_2-qism" element={<Lesson13 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/calculator" element={<Lesson14 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/switch-statement" element={<Lesson15 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/while-loop" element={<Lesson16 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/o'yin" element={<Lesson17 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/for-loop" element={<Lesson18 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/exponend_method" element={<Lesson19 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/2d_array" element={<Lesson20 />}></Route>
              <Route path="/cSharpCourse/ModulTwo/return" element={<Lesson11 />}></Route>

              {/*/// Modul3 ///*/}
              <Route path="/cSharpCourse/ModulThree/comment" element={<Lesson21 />}></Route>
              <Route path="/cSharpCourse/ModulThree/Exception_Handling_Try-Catch" element={<Lesson22 />}></Route>
              <Route path="/cSharpCourse/ModulThree/classes-objects" element={<Lesson23 />}></Route>
              <Route path="/cSharpCourse/ModulThree/constructor" element={<Lesson24 />}></Route>
              <Route path="/cSharpCourse/ModulThree/object_metod" element={<Lesson25 />}></Route>
              <Route path="/cSharpCourse/ModulThree/setter-getter" element={<Lesson26 />}></Route>
              <Route path="/cSharpCourse/ModulThree/static-classes-attributes" element={<Lesson27 />}></Route>
              <Route path="/cSharpCourse/ModulThree/static-method_classes" element={<Lesson28 />}></Route>
              <Route path="/cSharpCourse/ModulThree/inheritence" element={<Lesson29 />}></Route>
              <Route path="/cSharpCourse/ModulThree/unity-start" element={<Lesson30 />}></Route>


              {/*CSharp Lessons*/}




              <Route path="*" element={<Page404 />}></Route>
          </Routes>

      </Router>


  );
}

export default App;
