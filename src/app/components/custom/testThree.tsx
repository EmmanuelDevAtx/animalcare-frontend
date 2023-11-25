import React, { MutableRefObject, RefObject, useEffect, useRef } from "react";
import * as THREE from "three";

export function TestThreeJs() {
  const containerRef: any = useRef();

  const scene = new THREE.Scene();
  let number = 1;

  if (
    typeof window !== "undefined" &&
    typeof document !== "undefined" &&
    containerRef &&
    typeof containerRef !== "undefined"
  ) {
    useEffect(() => {
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

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        renderer.setClearColor(0x00000000, 0);
        const light = new THREE.SpotLight(0xffffff);
        light.position.set(5, 5, 5);
        scene.add(light);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Color blanco y intensidad 0.5
        scene.add(ambientLight);
        camera.position.z = 5;
        containerRef.current.appendChild(renderer.domElement);
        const animate = () => {
          // Rotar el cubo
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        };

        animate();
      }
    }, []);
  }

  return (
    <div className="container-threejs bg-cover bg-fixed bg-center h-screen">
      <div className="frame-cubejs" ref={containerRef}  />
    </div>
  );
}
