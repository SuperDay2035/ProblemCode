import React from 'react';
import "./dashboard.scss"
function Dashboard2({children}) {
    return (
        <div className="Dashboard">

            <div className="Sidebar">


                <h2>2-Modul</h2>


                <div className="Lessons">

                    <button><a href="/cSharpCourse/ModulTwo/return">2.1 Return</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/if">2.2 If Statement</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/if_2-qism">2.3 If Statement(2-qism)</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/calculator">2.4 Calculator</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/switch-statement">2.5 Switch Statement</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/while-loop">2.6 While Loop</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/o'yin">2.7 O'ylab Topish O'yini</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/for-loop">2.8 For Loop</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/exponend_method">2.9 Exponend Method</a></button>
                    <button><a href="/cSharpCourse/ModulTwo/2d_array">2.10 2D Arraylar</a></button>


                </div>


            </div>


            <main>
                {children}

            </main>

        </div>
    );
}

export default Dashboard2;