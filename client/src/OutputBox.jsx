import React, { useState } from "react";
import { saveAs } from "file-saver";
import { Download } from "react-bootstrap-icons";

export const OutputBox = ({ images }) => {

  

  return (
    <div className="output-img">
      {images &&
        images.map((image,idx) => (
          <ImageBox key={idx} imageUrl={image.url} />
          
        ))}
    </div>
  );
};



const ImageBox = ({imageUrl})=>{
  const [set,setState]=useState(true);
  
  const handleClick = ()=>{ 
    saveAs(imageUrl, "Twitter-logo");
    console.log(imageUrl);
  }
  
  return ( 
    <div  className="img-div"  onMouseOver={()=>setState(false)} onMouseLeave={()=>setState(true)}>

      <button onClick={handleClick} className={set?'btnHide':'btnShow'}><Download height='40px' width='40px' fill="grey" /></button>

      <img src={imageUrl} className="image" alt="ai thing"></img>

    </div>
  )        
}

