'use client';

// Much of this code was created before I used react; it has been adapted to work within a react component
// but the original code was written in vanilla JavaScript as may be evident
import React, {useEffect} from 'react';

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    h = h.toString(10).split("").map(function(t){return parseInt(t)})
    let h_1 = h[1].toString(2);
    let h_2 = h[0].toString(2);
    
    m = m.toString(10).split("").map(function(t){return parseInt(t)})
    let m_1 = m[1].toString(2);
    let m_2 = m[0].toString(2);
    
    s = s.toString(10).split("").map(function(t){return parseInt(t)})
    let s_1 = s[1].toString(2);
    let s_2 = s[0].toString(2);


    // Ones-Seconds Column
    if (s_1.charAt(s_1.length - 1) === "1") {
        document.getElementById("s1").style.backgroundColor = "#eab308";
    } else {
        document.getElementById("s1").style.backgroundColor = "#161616";
    }

    if (s_1.length > 1 && s_1.charAt(s_1.length - 2) === "1") {
        document.getElementById("s2").style.backgroundColor = "#eab308";
    } else {
        document.getElementById("s2").style.backgroundColor = "#161616";
    }

    if (s_1.length > 2 && s_1.charAt(s_1.length - 3) === "1") {
        document.getElementById("s4").style.backgroundColor = "#eab308";
    } else {
        document.getElementById("s4").style.backgroundColor = "#161616";
    }
    
    if (s_1.length > 3 && s_1.charAt(s_1.length - 4) === "1") {
        document.getElementById("s8").style.backgroundColor = "#eab308";
    } else {
        document.getElementById("s8").style.backgroundColor = "#161616";
    }

    // Tens-Seconds Column
    if (s_2.charAt(s_2.length - 1) === "1") {
        document.getElementById("s1-2").style.backgroundColor = "#eab308";
    } else {
        document.getElementById("s1-2").style.backgroundColor = "#161616";
    }

    if (s_2.length > 1 && s_2.charAt(s_2.length - 2) === "1") {
        document.getElementById("s2-2").style.backgroundColor = "#eab308";
    } else {
        document.getElementById("s2-2").style.backgroundColor = "#161616";
    }

    if (s_2.length > 2 && s_2.charAt(s_2.length - 3) === "1") {
        document.getElementById("s4-2").style.backgroundColor = "#eab308";
    } else {
        document.getElementById("s4-2").style.backgroundColor = "#161616";
    }

    // Ones-Minutes Column
    if (m_1.charAt(m_1.length - 1) === "1") {
        document.getElementById("m1").style.backgroundColor = "green";
    } else {
        document.getElementById("m1").style.backgroundColor = "#161616";
    }

    if (m_1.length > 1 && m_1.charAt(m_1.length - 2) === "1") {
        document.getElementById("m2").style.backgroundColor = "green";
    } else {
        document.getElementById("m2").style.backgroundColor = "#161616";
    }

    if (m_1.length > 2 && m_1.charAt(m_1.length - 3) === "1") {
        document.getElementById("m4").style.backgroundColor = "green";
    } else {
        document.getElementById("m4").style.backgroundColor = "#161616";
    }
    
    if (m_1.length > 3 && m_1.charAt(m_1.length - 4) === "1") {
        document.getElementById("m8").style.backgroundColor = "green";
    } else {
        document.getElementById("m8").style.backgroundColor = "#161616";
    }

    // Tens-Minutes Column
    if (m_2.charAt(m_2.length - 1) === "1") {
        document.getElementById("m1-2").style.backgroundColor = "green";
    } else {
        document.getElementById("m1-2").style.backgroundColor = "#161616";
    }

    if (m_2.length > 1 && m_2.charAt(m_2.length - 2) === "1") {
        document.getElementById("m2-2").style.backgroundColor = "green";
    } else {
        document.getElementById("m2-2").style.backgroundColor = "#161616";
    }

    if (m_2.length > 2 && m_2.charAt(m_2.length - 3) === "1") {
        document.getElementById("m4-2").style.backgroundColor = "green";
    } else {
        document.getElementById("m4-2").style.backgroundColor = "#161616";
    }
    
    // Ones-Hours Column
    if (h_1.charAt(h_1.length - 1) === "1") {
        document.getElementById("h1").style.backgroundColor = "red";
    } else {
        document.getElementById("h1").style.backgroundColor = "#161616";
    }

    if (h_1.length > 1 && h_1.charAt(h_1.length - 2) === "1") {
        document.getElementById("h2").style.backgroundColor = "red";
    } else {
        document.getElementById("h2").style.backgroundColor = "#161616";
    }

    if (h_1.length > 2 && h_1.charAt(h_1.length - 3) === "1") {
        document.getElementById("h4").style.backgroundColor = "red";
    } else {
        document.getElementById("h4").style.backgroundColor = "#161616";
    }
    
    if (h_1.length > 3 && h_1.charAt(h_1.length - 4) === "1") {
        document.getElementById("h8").style.backgroundColor = "red";
    } else {
        document.getElementById("h8").style.backgroundColor = "#161616";
    }

    // Tens-Hours Column
    if (h_2.charAt(h_2.length - 1) === "1") {
        document.getElementById("h1-2").style.backgroundColor = "red";
    } else {
        document.getElementById("h1-2").style.backgroundColor = "#161616";
    }

    if (h_2.length > 1 && h_2.charAt(h_2.length - 2) === "1") {
        document.getElementById("h2-2").style.backgroundColor = "red";
    } else {
        document.getElementById("h2-2").style.backgroundColor = "#161616";
    }

    setTimeout(startTime, 1000);
}
    function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function BinClock() {
    useEffect(() => {startTime()});
    return (
            <div className="bg-neutral-950 dark:bg-neutral-800 w-full sm:w-fit h-fit flex justify-center transition-colors ease-in-out duration-500 shadow-md shadow-neutral-400 dark:shadow-black">
                <div className="hour-2 flex flex-col items-center justify-end p-2 gap-2">
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="h2-2"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="h1-2"></div>
                </div>
                <div className="hour-2 flex flex-col items-center justify-end p-2 gap-2">
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="h8"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="h4"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="h2"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="h1"></div>
                </div>
                <div className="hour-2 flex flex-col items-center justify-end p-2 gap-2">
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="m4-2"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="m2-2"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="m1-2"></div>
                </div>
                <div className="hour-2 flex flex-col items-center justify-end p-2 gap-2">
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="m8"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="m4"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="m2"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="m1"></div>
                </div>
                <div className="hour-2 flex flex-col items-center justify-end p-2 gap-2">
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="s4-2"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="s2-2"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="s1-2"></div>
                </div>
                <div className="hour-2 flex flex-col items-center justify-end p-2 gap-2">
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="s8"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="s4"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="s2"></div>
                    <div className="rounded-full bg-neutral-950 w-6 h-6" id="s1"></div>
                </div>
            </div>

    )
}

export default BinClock;