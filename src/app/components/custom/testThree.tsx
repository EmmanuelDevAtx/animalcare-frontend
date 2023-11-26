import React, { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

// TODO: Refactor all this ccode to use diferents models
export function TestThreeJs() {
  const [size, setSize] = useState<number>(0);
  const containerRef: any = useRef();
  const scene = new THREE.Scene();

  let number = 1;

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof document !== "undefined" &&
      containerRef &&
      typeof containerRef !== "undefined"
    ) {
      let loadedObject: any;
      number++;
      //TODO: check why is redering 2 componens using useEffect

      if (number == 2) {
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(
          containerRef.current.clientWidth,
          containerRef.current.clientHeight
        );
        const camera = new THREE.PerspectiveCamera(
          50,
          containerRef.current.clientWidth / containerRef.current.clientHeight,
          0.1,
          1000
        );
        const mtlLoader = new MTLLoader();
        const loader = new OBJLoader();
        mtlLoader.load("./3dModels/earth/earth.mtl", (mtlParseResult) => {
          loader.setMaterials(mtlParseResult);
          loader.load(
            "./3dModels/earth/earth.obj",
            function (object: any) {
              
              object.scale.x = 0.3;
              object.scale.y = 0.3;
              object.scale.z = 0.3;
              object.rotation.x = 6;
              object.position.y = -0.7

              object.up.y = 0;
              object.materialLibraries.push("/3dModels/custom/custom.mtl");
              loadedObject = object;
              console.log('obej ', object)
              scene.add(object);
            },
            function (xhr: any) {
              console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
              if((xhr.loaded / xhr.total) * 100 == 100){
                setSize(1);
              }
            },
            function (error: any) {
              console.log("An error happened");
            }
          );
        });

        const light = new THREE.SpotLight(0xffffff, 1);
        light.position.set(1, 1, 1);
        scene.add(light);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        camera.position.z = 5;
        containerRef.current.appendChild(renderer.domElement);
        const controls =new OrbitControls(camera, renderer.domElement);
        const animate = () => {
          if (loadedObject) {
            loadedObject.rotation.y += 0.01;
            loadedObject.rotation.x += 0.001;
          }
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };
        controls.update();
        animate();
      }
    }
  }, []);

  return (
    <div className="container-threejs bg-cover bg-fixed bg-center h-screen">
      <div className="frame-cubejs" ref={containerRef} style={{
        transition: '2s ease',
        transform : `scale(${size})`
      }}/>
    </div>
  );
}
