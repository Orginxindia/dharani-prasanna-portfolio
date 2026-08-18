import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Lab3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Central 3D Geodesic AI Core
    const coreGeometry = new THREE.IcosahedronGeometry(4.5, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xccff00,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Inner glowing ring
    const innerRingGeo = new THREE.TorusGeometry(6, 0.05, 16, 100);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.x = Math.PI / 3;
    scene.add(innerRing);

    // 3. Neural Network Nodes & Connecting Beams
    const particleCount = 60;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xccff00,
      size: 0.35,
      transparent: true,
      opacity: 0.8,
    });

    const particleSystem = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particleSystem);

    // Dynamic Line Connections
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xccff00,
      transparent: true,
      opacity: 0.12,
    });

    const linesGeometry = new THREE.BufferGeometry();
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // 4. Mouse Tracking & Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetMouseX = (x / width - 0.5) * 2;
      targetMouseY = (y / height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 5. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate central AI core
      coreMesh.rotation.x += 0.003;
      coreMesh.rotation.y += 0.005;
      innerRing.rotation.z += 0.004;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 3;
      camera.position.y = -mouseY * 3;
      camera.lookAt(scene.position);

      // Particle Movement
      const posArr = particleSystem.geometry.attributes.position.array;
      const linePositions = [];

      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3] += velocities[i].x;
        posArr[i * 3 + 1] += velocities[i].y;
        posArr[i * 3 + 2] += velocities[i].z;

        // Bounce bounds
        if (Math.abs(posArr[i * 3]) > 20) velocities[i].x *= -1;
        if (Math.abs(posArr[i * 3 + 1]) > 15) velocities[i].y *= -1;
        if (Math.abs(posArr[i * 3 + 2]) > 15) velocities[i].z *= -1;

        // Connect nearby nodes with lines
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArr[i * 3] - posArr[j * 3];
          const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
          const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 8) {
            linePositions.push(
              posArr[i * 3],
              posArr[i * 3 + 1],
              posArr[i * 3 + 2],
              posArr[j * 3],
              posArr[j * 3 + 1],
              posArr[j * 3 + 2]
            );
          }
        }
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      renderer.render(scene, camera);
    };

    animate();

    // 7. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      coreGeometry.dispose();
      coreMaterial.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
    />
  );
};

export default Lab3DCanvas;
