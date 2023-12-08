import React, { useState, useEffect } from "react";

import paws from '../../assets/dog-footprint-white.png';
import pawkudu from '../../assets/kudu.png';
import lionpaws from '../../assets/lion-white.png';
import './styles.css';


function AnimatedPaws() {
  // const [paws, setPaws] = useState(lionpaws);
  const [num, setNum] = useState(1);

  useEffect(() => {
    setInterval(() => {
      // input from the user
      const min = parseInt(1);
      const max = parseInt(4);

      // generating a random number
      const a = Math.floor(Math.random() * (max - min + 1)) + min;
      setNum(a)
      // display a random number
      console.log(`Random value between ${min} and ${max} is ${a}`);
    }, 1050)
  }, []);
    return (
      <div className="animated-paws">
        <svg id="svg-sprite">
          <symbol id="paw" viewBox="0 0 249 209.32">
            <image
              xlinkHref={num === 1 ? paws : num === 2 ? pawkudu : lionpaws}
              x={0}
              y={0}
              height="100px"
              width="100px"
            />
          </symbol>
        </svg>
        <div className={"ajax-loader1"}>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
          <div className="paw">
            <svg className="icon">
              <use xlinkHref="#paw" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  
  export default AnimatedPaws;