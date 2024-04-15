import React, {useEffect, useState} from 'react';
import "./dashboard.scss";
import {editLesson, GetcsharplessonsModul1} from "../../../../api";
import {Link, Outlet, useParams} from "react-router-dom";
function Dashboard({children}) {


    const [lesson, setlesson] = useState([])

    const [error, seterror] = useState(false)




    const refresh = async () => {
        async function fetchData() {
            const res = await GetcsharplessonsModul1();
            setlesson(res.data)

            console.log(res)


            if(!res.success){
                seterror(true)
            }

        }

        fetchData();

    }

    useEffect(() => {
        refresh()



    }, []);

    const handleButtonClick = async (row) => {
        const res  = await editLesson(row, {...row, isActive: true});
        console.log(row)
    }



    return (
        <div className="Dashboard">

            <div className="Sidebar">


                <h2>1-Modul</h2>


                {error ? (<p sx={{mt:12 }}>Ma'lumotlar Kelmadi! Iltimos Sahifani Yangilang!</p>) : (


                        <div className="Lessons">

                        {lesson.map((row) => (
                            <Link
                                className="link-page"
                                onClick={() => handleButtonClick(row.lessonpage)}
                                key={row.id}
                                to={row.lessonpage}
                            >
                                <a >{row.lessonName}</a>
                            </Link>
                        ))}
                </div>


                )}


            </div>


            <main>
                {children}

            </main>

        </div>
    );
}

export default Dashboard;