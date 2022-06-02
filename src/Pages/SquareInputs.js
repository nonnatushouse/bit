import React,  { useRef, useState } from "react";
import "./Page.css";
import clsx from 'clsx';
import { useWindowSize } from "react-use";
import Confetti from 'react-confetti'

export default function SquareInputs({target}) {
    const valueRef = useRef('')
    const [verdict, setVerdict] = useState({match: false, outputString: ""})
    const refs = useRef([]);
    const { width, height } = useWindowSize()

    const inputs = Array.from( {length:target.length}, (v, i) => (
        <input 
        key={i}
        className="box-input"
        ref = {anything => refs.current[i] = anything}
        type="text"
        maxLength="1"
        onFocus={() => {
            const len = valueRef.current.length;

            if (i !== len) {
                if (len < refs.current.length) {
                    refs.current[len].focus();
                } else {
                    refs.current[refs.current.length - 1].focus();
                }
            }
        }}

        onInput={(event) => {
            const len = valueRef.current.length;
            const c = event.currentTarget.value.toLocaleUpperCase();

            if (c && i === len) {
                event.currentTarget.value = c;
                valueRef.current = valueRef.current + c;
                refs.current[i + 1]?.focus();
                
            }
        }}

        onKeyDown={(event) => {
            if (!verdict.match) {
                setVerdict({match: false, outputString: ""})
            }
            if (event.key === 'Backspace' && i > 0) {
                const len = valueRef.current.length;
                valueRef.current =  valueRef.current.slice(0, valueRef.current.length - 1);

                if (i === refs.current.length - 1 && i === len - 1) {
                    refs.current[i].value = '';
                } else if (i > 0) {
                    refs.current[i - 1].value = '';
                    refs.current[i - 1].focus();
                }
            }
        }}
        />

    ))

    function handleSubmit(event) {
        event.preventDefault();
        if (target.toLocaleUpperCase() === valueRef.current) {
            setVerdict({match: true, outputString: "HAPPY BIRTHDAY!"})
        } else {
            setVerdict({match: false, outputString: "E för Error"})
        }
        console.log(verdict.outputString)
        console.log(verdict.match)
      }


    return(
        <>
        { verdict.match &&
        <Confetti
        className={clsx(verdict.match ? "visible" : "not-visible")}
        width={width}
        height={height}
        confettiSource={{x: 0, y: 0, w: width, h:10}}
        initialVelocityY={{ min: 0, max: 10 }}
        numberOfPieces={250}/>
        }
      
        <div className="page-container">
            <div className={clsx("verdict-box", verdict.match ? "right-answer" : "wrong-answer")}>
                <div>{verdict.outputString}</div>
            </div>

            {/* <div className="green-page">{target}</div> */}
            
            <div className="form-box">
                <form className="form-box" onSubmit={handleSubmit}>
                    <div className="inputs">{inputs}</div>
                    <input type="submit" value="Submit" />
       
                </form>
            </div>
        </div>
        </>
    );

}