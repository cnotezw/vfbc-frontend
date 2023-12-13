import React, { useState, useEffect } from "react";

// import paws from '../../assets/dog-footprint-white.png'
import paws from '../../assets/kudu.png'
import lionpaws from '../../assets/lion-white.png'
import './styles.css';


function PawLoader() {
  const [counter, setCounter] = useState(1);

    return (
      <div className={`animated-kudu-paws`}>
        <svg id="svg-sprite">
          <symbol id="paw" viewBox="0 0 249 209.32">
            <image
              xlinkHref={lionpaws}
              x={0}
              y={0}
              height="100px"
              width="100px"
            />
          </symbol>
        </svg>
        <div className={`kudu-paws`}>
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