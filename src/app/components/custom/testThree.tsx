import React, { useEffect } from "react";
import * as THREE from "three";

export const TestThreeJs = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    (typeof window !== "undefined" ? window.innerWidth : 800) /
      (typeof window !== "undefined" ? window.innerHeight : 600),
    0.1,
    1000
  );

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    // Coloca aquí el código que depende del DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

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

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotar el cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }
  useEffect(() => {
    // Ajustar el tamaño de la ventana de renderizado al montar

    // Manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

    });


    // Limpiar los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []); // El array vacío asegura que useEffect solo se ejecute al montar y desmontar

  return <div style={{
    position:"fixed",
    top: 0,
    left: 0,
    pointerEvents: 'none',
zIndex:1
  }}/>;
};
