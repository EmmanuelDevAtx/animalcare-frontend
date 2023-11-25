import React, { MutableRefObject, RefObject, useEffect, useRef } from "react";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

// TODO: Refactor all this ccode to use diferents models
export function TestThreeJs() {
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
          70,
          containerRef.current.clientWidth / containerRef.current.clientHeight,
          0.1,
          1000
        );
        const mtlLoader = new MTLLoader();
        const loader = new OBJLoader();
        mtlLoader.load("./3dModels/custom/custom.mtl", (mtlParseResult) => {
          loader.setMaterials(mtlParseResult);
          loader.load(
            "./3dModels/custom/custom.obj",
            function (object: any) {
              object.scale.x = 0.3;
              object.scale.y = 0.3;
              object.scale.z = 0.3;
              object.up.y = 0;
              object.materialLibraries.push("/3dModels/custom/custom.mtl");
              loadedObject = object;
              scene.add(object);
            },
            function (xhr: any) {
              console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            function (error: any) {
              console.log("An error happened");
            }
          );
        });

        renderer.setClearColor(0x00000000, 0);
        const light = new THREE.SpotLight(0xffffff);
        light.position.set(5, 5, 5);
        scene.add(light);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Color blanco y intensidad 0.5
        scene.add(ambientLight);
        camera.position.z = 5;
        containerRef.current.appendChild(renderer.domElement);
        const animate = () => {
          if (loadedObject) {
            loadedObject.rotation.y += 0.01;
            loadedObject.rotation.x += 0.001;
          }
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };

        animate();
      }
    }
  }, []);

  return (
    <div className="container-threejs bg-cover bg-fixed bg-center h-screen">
      <div className="frame-cubejs" ref={containerRef} />
    </div>
  );
}
