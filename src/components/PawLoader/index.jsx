import React, { useState, useEffect } from "react";

// import paws from '../../assets/dog-footprint-white.png'
import paws from '../../assets/kudu.png'
import lionpaws from '../../assets/lion-white.png'
import './styles.css';


function PawLoader() {
  // const [paws, setPaws] = useState(lionpaws);
  const [counter, setCounter] = useState(1);

  // setInterval(() => {
  //   // setCounter(counter + 1);
  //   setCounter((prevCounter) => prevCounter+1)
  // }, 20050);

  // useEffect(() => {
  //   setInterval(() => {
  //     if(counter === 1) setCounter(counter+1);
  //     if(counter === 2) setCounter(counter+1);
  //     if(counter === 3) setCounter(counter+1);
  //     if(counter === 4) setCounter(1);
  //   }, 20050)
  //   console.log(`counter is ${counter}`);
  // }, [counter]);

    return (
      <div className={`animated-paws3`}>
        <svg id="svg-sprite">
          <symbol id="paw" viewBox="0 0 249 209.32">
            <image
              xlinkHref={paws}
              x={0}
              y={0}
              height="100px"
              width="100px"
            />
          </symbol>
        </svg>
        <div className={`kudu-loader${counter}`}>
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
  
  export default PawLoader;