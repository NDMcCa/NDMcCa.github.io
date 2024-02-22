import React, {useEffect} from 'react';
import './binclock.css';

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
        document.getElementById("s1").style.backgroundColor = "yellow";
    } else {
        document.getElementById("s1").style.backgroundColor = "darkgrey";
    }

    if (s_1.length > 1 && s_1.charAt(s_1.length - 2) === "1") {
        document.getElementById("s2").style.backgroundColor = "yellow";
    } else {
        document.getElementById("s2").style.backgroundColor = "darkgrey";
    }

    if (s_1.length > 2 && s_1.charAt(s_1.length - 3) === "1") {
        document.getElementById("s4").style.backgroundColor = "yellow";
    } else {
        document.getElementById("s4").style.backgroundColor = "darkgrey";
    }
    
    if (s_1.length > 3 && s_1.charAt(s_1.length - 4) === "1") {
        document.getElementById("s8").style.backgroundColor = "yellow";
    } else {
        document.getElementById("s8").style.backgroundColor = "darkgrey";
    }

    // Tens-Seconds Column
    if (s_2.charAt(s_2.length - 1) === "1") {
        document.getElementById("s1-2").style.backgroundColor = "yellow";
    } else {
        document.getElementById("s1-2").style.backgroundColor = "darkgrey";
    }

    if (s_2.length > 1 && s_2.charAt(s_2.length - 2) === "1") {
        document.getElementById("s2-2").style.backgroundColor = "yellow";
    } else {
        document.getElementById("s2-2").style.backgroundColor = "darkgrey";
    }

    if (s_2.length > 2 && s_2.charAt(s_2.length - 3) === "1") {
        document.getElementById("s4-2").style.backgroundColor = "yellow";
    } else {
        document.getElementById("s4-2").style.backgroundColor = "darkgrey";
    }

    // Ones-Minutes Column
    if (m_1.charAt(m_1.length - 1) === "1") {
        document.getElementById("m1").style.backgroundColor = "green";
    } else {
        document.getElementById("m1").style.backgroundColor = "darkgrey";
    }

    if (m_1.length > 1 && m_1.charAt(m_1.length - 2) === "1") {
        document.getElementById("m2").style.backgroundColor = "green";
    } else {
        document.getElementById("m2").style.backgroundColor = "darkgrey";
    }

    if (m_1.length > 2 && m_1.charAt(m_1.length - 3) === "1") {
        document.getElementById("m4").style.backgroundColor = "green";
    } else {
        document.getElementById("m4").style.backgroundColor = "darkgrey";
    }
    
    if (m_1.length > 3 && m_1.charAt(m_1.length - 4) === "1") {
        document.getElementById("m8").style.backgroundColor = "green";
    } else {
        document.getElementById("m8").style.backgroundColor = "darkgrey";
    }

    // Tens-Minutes Column
    if (m_2.charAt(m_2.length - 1) === "1") {
        document.getElementById("m1-2").style.backgroundColor = "green";
    } else {
        document.getElementById("m1-2").style.backgroundColor = "darkgrey";
    }

    if (m_2.length > 1 && m_2.charAt(m_2.length - 2) === "1") {
        document.getElementById("m2-2").style.backgroundColor = "green";
    } else {
        document.getElementById("m2-2").style.backgroundColor = "darkgrey";
    }

    if (m_2.length > 2 && m_2.charAt(m_2.length - 3) === "1") {
        document.getElementById("m4-2").style.backgroundColor = "green";
    } else {
        document.getElementById("m4-2").style.backgroundColor = "darkgrey";
    }
    
    // Ones-Hours Column
    if (h_1.charAt(h_1.length - 1) === "1") {
        document.getElementById("h1").style.backgroundColor = "red";
    } else {
        document.getElementById("h1").style.backgroundColor = "darkgrey";
    }

    if (h_1.length > 1 && h_1.charAt(h_1.length - 2) === "1") {
        document.getElementById("h2").style.backgroundColor = "red";
    } else {
        document.getElementById("h2").style.backgroundColor = "darkgrey";
    }

    if (h_1.length > 2 && h_1.charAt(h_1.length - 3) === "1") {
        document.getElementById("h4").style.backgroundColor = "red";
    } else {
        document.getElementById("h4").style.backgroundColor = "darkgrey";
    }
    
    if (h_1.length > 3 && h_1.charAt(h_1.length - 4) === "1") {
        document.getElementById("h8").style.backgroundColor = "red";
    } else {
        document.getElementById("h8").style.backgroundColor = "darkgrey";
    }

    // Tens-Hours Column
    if (h_2.charAt(h_2.length - 1) === "1") {
        document.getElementById("h1-2").style.backgroundColor = "red";
    } else {
        document.getElementById("h1-2").style.backgroundColor = "darkgrey";
    }

    if (h_2.length > 1 && h_2.charAt(h_2.length - 2) === "1") {
        document.getElementById("h2-2").style.backgroundColor = "red";
    } else {
        document.getElementById("h2-2").style.backgroundColor = "darkgrey";
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
        <div>
            <div className="binclock">
                <div className="hour-2">
                    <div className="indicator" id="h1-2"></div>
                    <div className="indicator" id="h2-2"></div>
                </div>
                <div className="hour-1">
                    <div className="indicator" id="h1"></div>
                    <div className="indicator" id="h2"></div>
                    <div className="indicator" id="h4"></div>
                    <div className="indicator" id="h8"></div>
                </div>
                <div className="minute-2">
                    <div className="indicator" id="m1-2"></div>
                    <div className="indicator" id="m2-2"></div>
                    <div className="indicator" id="m4-2"></div>
                </div>
                <div className="minute-1">
                    <div className="indicator" id="m1"></div>
                    <div className="indicator" id="m2"></div>
                    <div className="indicator" id="m4"></div>
                    <div className="indicator" id="m8"></div>
                </div>
                <div className="second-2">
                    <div className="indicator" id="s1-2"></div>
                    <div className="indicator" id="s2-2"></div>
                    <div className="indicator" id="s4-2"></div>
                </div>
                <div className="second-1">
                    <div className="indicator" id="s1"></div>
                    <div className="indicator" id="s2"></div>
                    <div className="indicator" id="s4"></div>
                    <div className="indicator" id="s8"></div>
                </div>
            </div>
        </div>
    )
}

export default BinClock;