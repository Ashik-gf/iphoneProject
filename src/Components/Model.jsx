import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef, useState } from "react";
import ModleView from "./ModleView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constant";
const Model = () => {
  const [size, setSize] = useState("small");
  console.log(size);
  const [model, setModel] = useState({
    title: "iPhone 15 promax Natural Titanium",
    color: ["#8F8a81", "#FFE&B9", "#6F6C64"],
    img: yellowImg,
  });
  // Camera Control for the model Views
  const CameraControleSmall = useRef();
  const CameraControleLarge = useRef();
  // Modle
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);
  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section>
      <div className=" screen-max-width ">
        <h1 id="heading" className=" section-heading ">
          its a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModleView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={CameraControleSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModleView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={CameraControleLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className=" w-full h-full"
              style={{
                position: "fixed",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className=" mx-auto w-full">
            <p className=" text-sm text-center font-light mb-5 ">
              {model.title}
            </p>
            <div className="flex-center">
              <ul className=" color-container ">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className=" h-6 w-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={()=>setModel(item)}
                  />
                ))}
              </ul>
              <button className=" size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className=" size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
