import './p5.min.js'

import { useEffect, useRef , useState } from 'react';
import p5 from 'p5';




export const Graph = () => {

    let colormode = "light";
    let width = 1200 , height = 675;
    let backColor = "#fff"
    let textColor = "#000"
    if(colormode == "dark"){
                backColor = "#000"
                textColor = "#fff"
    }

    function sketch(p) {
        p.setup = function() {
            p.createCanvas(width , height);
            p.background(backColor);
        }
    
        p.draw = function() {
            // your draw code here
            p.background(backColor);
            p.fill(textColor);
            p.text("hello" , width/2 , height/2)
            // console.log(width)
        }
    }

    const p5ContainerRef = useRef();

    useEffect(() => {
        // On component creation, instantiate a p5 object 
        // with the sketch and container reference 
        const p5Instance = new p5(sketch, p5ContainerRef.current);
        return () => {
            p5Instance.remove();
        }
    }, []);

    return (
        <div style={{display:'flex', width:'100%'}}>
        <div style={{margin:'auto'}} className="App" ref={p5ContainerRef} />
        </div>
    )
}

// 