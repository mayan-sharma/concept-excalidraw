import React, { useEffect, useState, useRef } from "react";
import Excalidraw from "excalidraw";
import "excalidraw/dist/excalidraw.min.css";

const initialData = [
    {
      type: "rectangle",
      version: 141,
      versionNonce: 361174001,
      isDeleted: false,
      id: "oDVXy8D6rom3H1-LLH2-f",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: 100.50390625,
      y: 93.67578125,
      strokeColor: "#000000",
      backgroundColor: "transparent",
      width: 186.47265625,
      height: 141.9765625,
      seed: 1968410350,
      groupIds: []
    },
    {
      id: "-xMIs_0jIFqvpx-R9UnaG",
      type: "ellipse",
      x: 300.5703125,
      y: 190.69140625,
      width: 198.21875,
      height: 129.51171875,
      angle: 0,
      strokeColor: "#000000",
      backgroundColor: "transparent",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      groupIds: [],
      seed: 957947807,
      version: 47,
      versionNonce: 1128618623,
      isDeleted: false
    }
  ];

export default function Draw() {
  
    const onChange = (elements, state) => {
        console.log("Elements :", elements, "State : ", state);
      };
    
      const onUsernameChange = (username) => {
        console.log("current username", username);
      };
      const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      const onResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
    
      useEffect(() => {
        window.addEventListener("resize", onResize);
    
        return () => window.removeEventListener("resize", onResize);
      }, []);
    
      const { width, height } = dimensions;
      const options = { zenModeEnabled: true, viewBackgroundColor: "#AFEEEE" };

  return (
    <div>
        <h1>Excalidraw Example</h1>
        <Excalidraw
        width={width}
        height={height}
        initialData={initialData}
        onChange={onChange}
        options={options}
        user={{ name: "Excalidraw User" }}
        onUsernameChange={onUsernameChange}
      />
    </div>
  );
}
