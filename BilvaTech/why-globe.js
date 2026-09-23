import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

(function initWhyGlobe() {
  const container = document.getElementById('globe-canvas-container');
  const loader = document.getElementById('globe-loader');
  const section = document.getElementById('why-bilvatech');
  if (!container) return;

  // --- Scene, Camera, Renderer ---
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 150);
  camera.position.set(0, 4, 25);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // --- Orbit Controls ---
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enablePan = false;
  controls.enableZoom = false; // Prevent page scroll disruption
  controls.minDistance = 15;
  controls.maxDistance = 60;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.8;

  const globeGroup = new THREE.Group();
  scene.add(globeGroup);

  const GLOBE_RADIUS = 10;

  // --- 1. Solid Inner Sphere (Engineering Dark Core) ---
  const innerGeo = new THREE.SphereGeometry(GLOBE_RADIUS - 0.05, 64, 64);
  const innerMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
  const innerSphere = new THREE.Mesh(innerGeo, innerMat);
  globeGroup.add(innerSphere);

  // --- 2. Latitude / Longitude Technical Grid ---
  const gridGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 36, 18);
  const gridMat = new THREE.MeshBasicMaterial({
    color: 0x333333,
    wireframe: true,
    transparent: true,
    opacity: 0.8
  });
  const gridSphere = new THREE.Mesh(gridGeo, gridMat);
  globeGroup.add(gridSphere);

  // --- Utility: Lat/Lon to 3D Vector ---
  function latLongToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  }

  // --- 3. Country Outlines (Wireframe GeoJSON) ---
  let bordersMesh = null;
  fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then(data => {
      const points = [];
      function processRing(ring) {
        for (let i = 0; i < ring.length - 1; i++) {
          const p1 = latLongToVector3(ring[i][1], ring[i][0], GLOBE_RADIUS);
          const p2 = latLongToVector3(ring[i + 1][1], ring[i + 1][0], GLOBE_RADIUS);
          points.push(p1, p2);
        }
      }
      data.features.forEach(feature => {
        if (feature.geometry.type === 'Polygon') {
          feature.geometry.coordinates.forEach(ring => processRing(ring));
        } else if (feature.geometry.type === 'MultiPolygon') {
          feature.geometry.coordinates.forEach(poly => {
            poly.forEach(ring => processRing(ring));
          });
        }
      });
      const bordersGeo = new THREE.BufferGeometry().setFromPoints(points);
      const bordersMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      bordersMesh = new THREE.LineSegments(bordersGeo, bordersMat);
      globeGroup.add(bordersMesh);
      if (loader) loader.style.opacity = '0';
    })
    .catch(() => {
      // Fallback if offline: hide loader and preserve wireframe globe
      if (loader) loader.style.opacity = '0';
    });

  // --- 4. Abstract Technical Network Points (No City Names) ---
  const networkGroup = new THREE.Group();
  globeGroup.add(networkGroup);

  // 8 technical distributed nodes representing connected environment systems
  const coordinates = [
    { lat: 40.71, lon: -74.00, region: 'A' },
    { lat: 51.50, lon: -0.12, region: 'A' },
    { lat: 35.68, lon: 139.69, region: 'B' },
    { lat: -33.86, lon: 151.20, region: 'B' },
    { lat: -23.55, lon: -46.63, region: 'C' },
    { lat: -33.92, lon: 18.42, region: 'C' },
    { lat: 19.07, lon: 72.87, region: 'D' },
    { lat: 37.77, lon: -122.41, region: 'D' }
  ];

  const nodeMeshes = [];
  const nodes = [];
  const activeParticles = [];
  const connectionLines = [];

  const nodeGeo = new THREE.CircleGeometry(0.15, 16);

  coordinates.forEach((loc, idx) => {
    const pos = latLongToVector3(loc.lat, loc.lon, GLOBE_RADIUS + 0.02);
    nodes.push(pos);

    // Inner node disc
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(nodeGeo, nodeMat);
    mesh.position.copy(pos);
    mesh.lookAt(new THREE.Vector3(0, 0, 0));
    networkGroup.add(mesh);
    nodeMeshes.push(mesh);
  });

  // --- 5. Curved Connection Conduits ---
  function createConnection(startPos, endPos, index) {
    const distance = startPos.distanceTo(endPos);
    const midPoint = startPos.clone().lerp(endPos, 0.5);
    const arcHeight = distance * 0.22;
    midPoint.normalize().multiplyScalar(GLOBE_RADIUS + arcHeight);

    const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
    const points = curve.getPoints(50);

    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x666666,
      transparent: true,
      opacity: 0.6
    });
    const line = new THREE.Line(lineGeo, lineMat);
    line.userData = { id: index, origColor: 0x666666, origOpacity: 0.6 };
    networkGroup.add(line);
    connectionLines.push(line);

    // Data packet particle traveling along wire
    const particleGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const particle = new THREE.Mesh(particleGeo, particleMat);
    networkGroup.add(particle);

    activeParticles.push({
      mesh: particle,
      curve: curve,
      progress: Math.random(),
      speed: 0.002 + (Math.random() * 0.003),
      baseSpeed: 0.002 + (Math.random() * 0.003)
    });
  }

  // Connect the nodes (mesh architecture)
  let connIdx = 0;
  nodes.forEach((startNode, i) => {
    for (let j = 1; j <= 2; j++) {
      const targetIndex = (i + j) % nodes.length;
      createConnection(startNode, nodes[targetIndex], connIdx++);
    }
  });

  // --- 6. Interactive Link between Principles & Globe ---
  let activePrincipleIdx = -1;
  const principleElements = document.querySelectorAll('.why-principle');

  function setGlobeState(state) {
    activePrincipleIdx = state;

    // Reset base properties smoothly
    if (state === 0) {
      // 01 SECURITY BY DESIGN: Emphasize node architecture
      controls.autoRotateSpeed = 0.45;
      nodeMeshes.forEach(m => {
        m.material.color.setHex(0xffffff);
        m.scale.set(1.4, 1.4, 1.4);
      });
      connectionLines.forEach(l => {
        l.material.color.setHex(0x999999);
        l.material.opacity = 0.8;
      });
      activeParticles.forEach(p => p.speed = p.baseSpeed);
    } else if (state === 1) {
      // 02 SYSTEM-LEVEL THINKING: Multi-connectivity and active data flow
      controls.autoRotateSpeed = 1.1;
      nodeMeshes.forEach(m => {
        m.material.color.setHex(0xffffff);
        m.scale.set(1.15, 1.15, 1.15);
      });
      connectionLines.forEach(l => {
        l.material.color.setHex(0xaaaaaa);
        l.material.opacity = 0.9;
      });
      activeParticles.forEach(p => p.speed = p.baseSpeed * 2.2); // Double speed
    } else if (state === 2) {
      // 03 MISSION-CRITICAL FOCUS: Stability, controlled connections & core activity
      controls.autoRotateSpeed = 0.35; // Controlled, slow
      nodeMeshes.forEach((m, i) => {
        m.material.color.setHex(i % 2 === 0 ? 0xffffff : 0x888888);
        m.scale.set(1.2, 1.2, 1.2);
      });
      connectionLines.forEach((l, i) => {
        if (i % 2 === 0) {
          l.material.color.setHex(0xd12222); // Deep red critical path
          l.material.opacity = 0.9;
        } else {
          l.material.color.setHex(0x444444);
          l.material.opacity = 0.35;
        }
      });
      activeParticles.forEach(p => p.speed = p.baseSpeed * 0.9);
    } else if (state === 3) {
      // 04 TAILORED APPROACH: Focused targeted activity pattern
      controls.autoRotateSpeed = 0.55;
      nodeMeshes.forEach((m, i) => {
        if (i === 6 || i === 7 || i === 0) {
          m.material.color.setHex(0xd12222);
          m.scale.set(1.4, 1.4, 1.4);
        } else {
          m.material.color.setHex(0x666666);
          m.scale.set(0.9, 0.9, 0.9);
        }
      });
      connectionLines.forEach((l, i) => {
        if (i === 0 || i === 1 || i === 12 || i === 13) {
          l.material.color.setHex(0xd12222);
          l.material.opacity = 0.95;
        } else {
          l.material.color.setHex(0x333333);
          l.material.opacity = 0.25;
        }
      });
      activeParticles.forEach(p => p.speed = p.baseSpeed * 1.3);
    } else {
      // Default idle state
      controls.autoRotateSpeed = 0.8;
      nodeMeshes.forEach(m => {
        m.material.color.setHex(0xffffff);
        m.scale.set(1, 1, 1);
      });
      connectionLines.forEach(l => {
        l.material.color.setHex(l.userData.origColor);
        l.material.opacity = l.userData.origOpacity;
      });
      activeParticles.forEach(p => p.speed = p.baseSpeed);
    }
  }

  principleElements.forEach((el) => {
    const idx = parseInt(el.getAttribute('data-principle'), 10);

    const onEnter = () => {
      principleElements.forEach(p => p.classList.remove('active-principle'));
      el.classList.add('active-principle');
      setGlobeState(idx);
    };

    const onLeave = () => {
      el.classList.remove('active-principle');
      setGlobeState(-1);
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('focus', onEnter);
    el.addEventListener('blur', onLeave);
  });

  // --- 7. Responsive Resizing ---
  function onResize() {
    if (!container || container.clientWidth === 0 || container.clientHeight === 0) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    if (container.clientWidth < 600) {
      camera.position.z = 32;
    } else if (container.clientWidth < 950) {
      camera.position.z = 28;
    } else {
      camera.position.z = 25;
    }
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }

  window.addEventListener('resize', onResize);
  onResize();

  // --- 8. Lifecycle & prefers-reduced-motion ---
  let isVisible = true;
  if ('IntersectionObserver' in window && section) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.1 });
    observer.observe(section);
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    controls.autoRotate = false;
  }

  // --- 9. Animation Loop ---
  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    controls.update();

    if (!prefersReducedMotion) {
      // Animate the particles along the wires
      activeParticles.forEach(p => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
        }
        const point = p.curve.getPointAt(p.progress);
        p.mesh.position.copy(point);
      });
    }

    renderer.render(scene, camera);
  }

  animate();
})();
