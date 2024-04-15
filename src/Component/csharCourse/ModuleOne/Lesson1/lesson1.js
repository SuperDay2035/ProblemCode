import React from 'react';
import Dashboard from "../Dashboard/Dashboard";
import "./lesson1.scss"
import VisualStudioWebsite from "./Images/Google_Image.png"
import VisualStudioDownload from "./Images/VisualStudioDownload.png"



function Lesson1(props) {




    const toggletabs = (index) => {




    }


    return (


        <div>

            <Dashboard>

                <div className="csharp ">

                    <h1>C# Kirish</h1>

                    <p>C# Dasturlash Kursiga Hush Kelibsiz</p>

                    <p>C# Dastirlash-da Code Yozishimiz Uchun Visual Studio Kerak Bo'ladi, <br/> Visual Studio Code
                        Editor(Kod Yozish Sxemasi) Hisoblanadi <br/>
                        Ushbu Dasturni Google Yoki Yandex dan Bepulga Yuklab Olasiz</p>

                    <div className="image">
                        <img src={VisualStudioWebsite} alt=""/>
                    </div>

                    <p>Odatda Visual Studio-ni Official Va Eng So'ngi Versiyalari <a
                        href="https://code.visualstudio.com/download">Visual Studio</a> da Mavjud</p>

                    <div className="image">
                        <img src={VisualStudioDownload} alt=""/>
                    </div>

                    <iframe width="640" height="360" src="https://play.boomstream.com/ukSnBg4m" frameBorder="0"
                            scrolling="no" allowFullScreen={true}></iframe>

                    <p>Kompyuteringizni Turiga Qarab Kerakli Windows/Linux/Apple Driveringizga Qarab
                        Dasturni <br/> Yuklaysiz. C# Kirish Qismida
                        Qande Qilib <br/> Visual Studioni Code Versioni O'rnatilganini Video Darsligi Mavjud Marhamat
                        Videoni Ko'rib Chiqing</p>


                    <div className="end-lesson">
                        <h2>Darsni Yakunlash: C#</h2>
                        <button className="finish-lesson" onClick={toggletabs}>Yakunlash</button>

                    </div>

                </div>


            </Dashboard>

        </div>
    );
}

export default Lesson1;