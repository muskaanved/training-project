import React, { createRef, useState, useEffect } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
// import Home from "../components/Home";
// import Navbar from "../components/Navbar";

export default () => {
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download) ;

  const randomNumberAtInterval = (perMinute, totalNumbers, minNumber, maxNumber, cb) => {
    var int = 60000 / perMinute;
    var count = 0;
    var interval = setInterval(()=>{
        cb(Math.random() * (maxNumber - minNumber) + minNumber);
        count++;
        totalNumbers++;
        downloadScreenshot();
        if(count >= totalNumbers) clearInterval(interval);
    }, int);
   console.log(interval,"intetval");
  console.log(totalNumbers,"console");
}

randomNumberAtInterval(1, 2, 1, 10, function(randomNumber){
  console.log(randomNumber);
})

  // useEffect(() => {
  //   const interval = setInterval(() => {
      
  //     downloadScreenshot
  //   }, Math.floor(Math.random() * 10) * 60000);

  //   return () => {
  //     console.log(interval,"interval")
  //     clearInterval(interval);
  //   };
  // });


  return (
    <div>
      {/* <button onClick={downloadScreenshot}>Download screenshot</button> */}
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px",
        }}
      >
       
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          distinctio exercitationem a tempore delectus ducimus necessitatibus
          dolor voluptatum aut est quaerat aspernatur, vero quod aperiam odio.
          Exercitationem distinctio in voluptates?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut molestiae
          deserunt voluptas, labore a expedita error eligendi sunt fugit,
          nesciunt ullam corrupti quas natus, officia rerum? Officia cum amet
          quidem.
        </p>
      </div>
    </div>
  );
};