import React, { useState, useEffect } from 'react';

function Functional() {
  useEffect(() => {
    
    console.error("mounted")

    return () => {
      console.log("un mounted") // will clean the previous effect.
        };
  }, []);
  return (
    <>
        form inside 
    </>
  )
  // Render UI
}

export default Functional;