import React, { useEffect, useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import UnityWhitLogo from "../../UnityWhiteLogo.png";
import "./CsharCourse.scss"
import Csharp_course from "../Courses/Course-Images/cshar_course.jpg"
import axios from "axios";

function CsharCourse() {

    const [toggleState, setToggle] = useState(0);
    const [list, setlist] = useState([])


    const fetchModules = async () => {
        const moduleData = await GetModulelist();
        setlist(moduleData);
    }




  const GetModulelist = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/modules`);
            setlist(res.data);
            console.log(res.data)
            return res.data;
        } catch (error) {
            console.log("Moduldan Ma'lumot Kelmayapti");
            return [];
        }
   };


    const modul1 = () => [
        {
            id: 1,
            lessoname: "1.1 | C# Kirish",
            lessonpage: "/cSharpCourse/ModulOne/csharp",
            isLock: false
        },
        {
            id: 2,
            lessoname: "1.2 | Visual Studio 2021 Va Console.Log",
            lessonpage: "/cSharpCourse/ModulOne/visual_Studio_2021_va_Console_Log",
            isLock: true
        },{
            id: 3,
            lessoname: "1.3 | O'zgaruvchilar",
            lessonpage: "/cSharpCourse/ModulOne/ozgaruvchilar",
            isLock: true
        },{
            id: 4,
            lessoname: " 1.4 | DataType",
            lessonpage: "/cSharpCourse/ModulOne/dataType",
            isLock: true
        },{
            id: 5,
            lessoname: "1.5 | Stringlar Bilan Ishlash",
            lessonpage: "/cSharpCourse/ModulOne/stringlar_bilash_ishlash",
            isLock: true
        },{
            id: 6,
            lessoname: "1.6 | Number(sonlar) Bilan Ishlash",
            lessonpage: "/cSharpCourse/ModulOne/number(sonlar)_bilan_ishlash",
            isLock: true
        },{
            id: 7,
            lessoname: "1.7 | Calculator Yasash",
            lessonpage: "/cSharpCourse/ModulOne/calculator_tuzish",
            isLock: true
        },{
            id: 8,
            lessoname: "1.8 | Mad Lib O'yini",
            lessonpage: "/cSharpCourse/ModulOne/madlib_o'yini",
            isLock: true
        },{
            id: 9,
            lessoname: "1.9 | Arraylar",
            lessonpage: "/cSharpCourse/ModulOne/arraylar",
            isLock: true
        },{
            id: 10,
            lessoname: "1.10 | Method",
            lessonpage: "/cSharpCourse/ModulOne/metod",
            isLock: true
        },
    ]
    const modul2 = () => [
        {
            id: 1,
            lessoname: "2.1 | Return Statement",
            lessonpage: "/cSharpCourse/ModulTwo/return",
            isLock: false
        },
        {
            id: 2,
            lessoname: "2.2 | If Statement",
            lessonpage: "/cSharpCourse/ModulTwo/if",
            isLock: false
        },{
            id: 3,
            lessoname: "2.3 | If Statement(2-qism)",
            lessonpage: "/cSharpCourse/ModulTwo/if_2-qism",
            isLock: false
        },{
            id: 4,
            lessoname: "2.4 | Calculator(2-qism)",
            lessonpage: "/cSharpCourse/ModulTwo/calculator",
            isLock: false
        },{
            id: 5,
            lessoname: "2.5 | Switch Statement",
            lessonpage: "/cSharpCourse/ModulTwo/switch-statement",
            isLock: false
        },{
            id: 6,
            lessoname: "2.6 | While Loop",
            lessonpage: "/cSharpCourse/ModulTwo/while-loop",
            isLock: false
        },{
            id: 7,
            lessoname: "2.7 | O'ylab Topish O'yini",
            lessonpage: "/cSharpCourse/ModulTwo/o'yin",
            isLock: false
        },{
            id: 8,
            lessoname: "2.8 | For Loop",
            lessonpage: "/cSharpCourse/ModulTwo/for-loop",
            isLock: false
        },{
            id: 9,
            lessoname: "2.9 | Exponend Method",
            lessonpage: "/cSharpCourse/ModulTwo/exponend_method",
            isLock: false
        },{
            id: 10,
            lessoname: "2.10 | 2D Array",
            lessonpage: "/cSharpCourse/ModulTwo/2d_array",
            isLock: false
        },
    ]
    const modul3 = () => [
        {
            id: 1,
            lessoname: " 3.1 | Comment",
            lessonpage: "/cSharpCourse/ModulThree/comment",
            isLock: true
        },
        {
            id: 2,
            lessoname: "3.2 | Exception Handling: Try - Catch",
            lessonpage: "/cSharpCourse/ModulThree/Exception_Handling_Try-Catch",
            isLock: true
        },{
            id: 3,
            lessoname: "3.3 | Classes & Objects",
            lessonpage: "/cSharpCourse/ModulThree/classes-objects",
            isLock: true
        },{
            id: 4,
            lessoname: "3.4 | Constructor)",
            lessonpage: "/cSharpCourse/ModulThree/constructor",
            isLock: true
        },{
            id: 5,
            lessoname: "3.5 | Object Method",
            lessonpage: "/cSharpCourse/ModulThree/object_metod",
            isLock: true
        },{
            id: 6,
            lessoname: "3.6 | Getter & Setter",
            lessonpage: "/cSharpCourse/ModulThree/setter-getter",
            isLock: true
        },{
            id: 7,
            lessoname: "3.7 | Static Classes Attributes",
            lessonpage: "/cSharpCourse/ModulThree/static-classes-attributes",
            isLock: true
        },{
            id: 8,
            lessoname: "3.8 | Static Method & Classes",
            lessonpage: "/cSharpCourse/ModulThree/static-method_classes",
            isLock: true
        },{
            id: 9,
            lessoname: "3.9 | Inheritence: Meros",
            lessonpage: "/cSharpCourse/ModulThree/inheritence",
            isLock: true
        },{
            id: 10,
            lessoname: "3.10 | Unityga Tayyorgarli",
            lessonpage: "/cSharpCourse/ModulThree/unity-start",
            isLock: true
        },
    ]





    useEffect(() => {
        fetchModules();

    }, []);


    const toggletabs = (index, ) => {
        setToggle(index);


    }
    return (
        <div className="CsharpCourse">
            <header>
                <div className="logo">
                    <img src={UnityWhitLogo} alt=""/>
                </div>
                <div className="Login">
                    Bio
                </div>
            </header>
            <div className="manzil">
                <a href="/">Bosh Sahifa</a>
                <p>-></p>
                <a href="/Courses">Kurslar</a>
                <p>-></p>
                <a href="/cSharpCourse">C#</a>
            </div>
            <div className="csharp-start">
                <div className="about-image">
                    <img src={Csharp_course} alt=""/>
                </div>
                <div className="about-start">
                    <h2>C#</h2>
                    <p>Dars davomida sizni ajoyib va sodda kodlarni tushunishingiz uchun to'liq 0 dan tushuntirilgan
                        video darslar sizni kutyapti, Unityni boshlashingiz uchun C# ni yaxshilab to'liq tushunib yaxshi
                        coder ustasi bo'lishingizga lozim, vazifalarni to'liq bajaring va yo'l davomida amaliyot qilishni
                        unutmang </p>
                    <div className="course_info">
                        <p className="info-first"> Davomiyligi: 5 Soat</p>
                        <p className="info"> Dars Soni: 30 ta</p>
                    </div>
                </div>
            </div>
            <div className="container-tabs">
                <div className="block-tabs">

                    <div className="block-tabs">
                        {list.map((row, index) => (
                            <p className={toggleState === index ? "active-tab" : "tab"}
                               onClick={() => toggletabs(index, row.module)}>{row.module}</p>
                        ))}
                    </div>

                </div>
                <div className="container">


                    <div className={toggleState === 0 ? "active-content" : "content"}>

                        {modul1().map((row, index) => (
                            <h3>
                                {row.isLock ? (
                                    <span><LockIcon/> {row.lessoname} </span>
                                ) : (
                                    <a href={row.lessonpage}>{row.lessoname}</a>
                                )}
                            </h3>
                        ))}
                    </div>

                    <div className={toggleState === 1 ? "active-content" : "content"}>

                        {modul2().map((row) => (
                            <h3><a href={row.lessonpage}>{row.isLock ? <LockIcon /> : null} {row.lessoname}</a></h3>
                        ))}
                    </div>
                    <div className={toggleState === 2 ? "active-content" : "content"}>

                        {modul3().map((row) => (
                            <h3><a href={row.lessonpage}>{row.isLock ? <LockIcon /> : null} {row.lessoname}</a></h3>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CsharCourse;