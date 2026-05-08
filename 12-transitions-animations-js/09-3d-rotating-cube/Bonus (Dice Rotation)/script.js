const cube = document.getElementById("cube");
let rotX = 0;
let rotY = 0;
let rotZ = 0;
function animate() {
  rotX += 0.4;
  rotY += 0.7;
  rotZ += 0.2;
  cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
  requestAnimationFrame(animate); //calling itself recursively
}

animate();
