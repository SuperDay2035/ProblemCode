import React from 'react';
import Dashboard from "../Dashboard/Dashboard";
import VisualStudioWebsite from "../Lesson1/Images/Google_Image.png";
import VisualStudioDownload from "../Lesson1/Images/VisualStudioDownload.png";
import "./lesson2.scss"
function Lesson2(props) {
    return (
        <div>

            <Dashboard>

                <div className="csharp ">

                    <h1>O'zgaruvchilar</h1>

                    <p>O'zgaruvchilar Bizga Qiymatlarni Saqlashda Kerak Bo'ladi</p>

                    <p>
                        O'zgaruvchi Deganda Biron Bir Qiymat(Son, So'z, Belgi)larni o'zgartirish deb tushuniladi,
                        o'zgaruvchilar quyidagi ko'rishinda e'lon qilinadi va ularning o'z turlari mavjud

                        <p><span className="grey">string</span> - So'zlar va tekstlar uchun ishlatiladigon o'zgaruvchi
                            qiymat turi, Odatda <span className="grey">( "" )</span> ichida
                            yoziladi. Misol <span className="grey">string </span>
                            = <span className="grey">"Hello"</span> </p>

                        <p><span className="grey">int</span> - Butun sonlar uchun ishlatiladi => <span className="grey">(2,4,5,6)</span> - Butun Sonlar </p>
                        <p><span className="grey">float</span> - kasr sonlar uchun ishlatiladi => <span className="grey">(2,2 , 4.4, 5.5, 6.7)</span> - Kasr Sonlar </p>
                        <p><span className="grey">double</span> - kasr sonlar uchun ishlatiladi => <span className="grey">(2,2 , 4.4, 5.5, 6.7)</span> - Kasr Sonlar </p>
                        <p><span className="grey">boolen</span> - true false (to'gri yoki notog'ri) => <span className="grey">(true, false)</span> - boolen qiymatlar </p>
                    </p>


                    <div className="video-player">
                        <iframe width="640" height="360" src="https://play.boomstream.com/ukSnBg4m" frameBorder="0"
                                scrolling="no" allowFullScreen={true}></iframe>
                    </div>


                    <p>O'zgaruvchilarni ko'plap turlari mavjud, havotirga hojat yo'q qolgan to'liq o'zgaruvchi turlari DataType(Data Turlari) Keyingi Darsda O'tiladi</p>

                    <div className="end-lesson">
                        <h2>Darsni Yakunlash: O'zgaruvchilar</h2>
                        <button className="finish-lesson">Yakunlash</button>

                    </div>

                </div>

            </Dashboard>

        </div>
    );
}

export default Lesson2;