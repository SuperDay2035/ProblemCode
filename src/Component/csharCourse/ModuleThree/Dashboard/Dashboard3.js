import React from 'react';
import "./dashboard.scss"
function Dashboard3({children}) {
    return (
        <div className="Dashboard">

            <div className="Sidebar">


                <h2>3-Modul</h2>


                <div className="Lessons">

                    <button><a href="/cSharpCourse/ModulThree/comment">3.1 Comment</a></button>
                    <button><a href="/cSharpCourse/ModulThree/Exception_Handling_Try-Catch">3.2 Exception Handling: Try - Catch</a></button>
                    <button><a href="/cSharpCourse/ModulThree/classes-objects">3.3 Classes & Objects</a></button>
                    <button><a href="/cSharpCourse/ModulThree/constructor">3.4 Constructor</a></button>
                    <button><a href="/cSharpCourse/ModulThree/object_metod">3.5 Object Method</a></button>
                    <button><a href="/cSharpCourse/ModulThree/setter-getter">3.6 Getter & Setter</a></button>
                    <button><a href="/cSharpCourse/ModulThree/static-classes-attributes">3.7 Static Classes Attributes</a></button>
                    <button><a href="/cSharpCourse/ModulThree/static-method_classes">3.8 Static Method & Classes</a></button>
                    <button><a href="/cSharpCourse/ModulThree/inheritence">3.9 Inheritence: Meros</a></button>
                    <button><a href="/cSharpCourse/ModulThree/unity-start">3.10 Unityga Tayyorgarli</a></button>


                </div>


            </div>


            <main>
                {children}

            </main>

        </div>
    );
}

export default Dashboard3;