import React from "react";

function BlockOverlay({ style, color }) {
    return (
    <div 
        style={{
            ...style,
            width: '100%',
            height: '100vw',
            maxHeight: '100vh',
            position: 'absolute',
            top: '0',
            left: '0',
            opacity: '0.5',
            zIndex: '9',
            background: color,
        }}></div>
    );
  }
  
  export default BlockOverlay;