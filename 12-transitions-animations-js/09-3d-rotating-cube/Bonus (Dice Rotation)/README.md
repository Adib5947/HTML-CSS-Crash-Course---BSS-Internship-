# 🎲 3D Dice Cube

A pure **HTML, CSS, and JavaScript** 3D rotating dice built from scratch — no libraries, no frameworks.

---

## Preview

https://github.com/user-attachments/assets/dice-rotation.mp4

> Place `dice-rotation.mp4` in the root of your repository and GitHub will render it inline automatically.

---

## 📁 Project Structure

```
dice-project/
├── index.html        # Dice structure — 6 faces with dots
├── styles.css        # 3D transforms, face colors, dot positions
├── script.js         # Smooth infinite rotation via requestAnimationFrame
└── dice-rotation.mp4 # Demo video
```

---

## Tech Used

| Technology     | Role                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------ |
| **HTML**       | Structures the cube — container, 6 faces, and dot elements                                       |
| **CSS**        | Builds the 3D scene using `perspective`, `transform-style: preserve-3d`, and per-face transforms |
| **JavaScript** | Drives smooth infinite rotation using `requestAnimationFrame`                                    |

---

## How It Works

### HTML

The dice is made of a `.container` div, a `.cube` div inside it, and 6 `.face` divs (front, back, left, right, top, bottom). Each face holds dot divs laid out to represent numbers 1–6.

### CSS

- `perspective: 1000px` on the container creates the 3D depth effect
- `transform-style: preserve-3d` on the cube makes all faces exist in real 3D space
- Each face is rotated and pushed outward with `rotateX`/`rotateY` + `translateZ(100px)` to form a closed box
- Dots are placed using absolute positioning (named classes like `.top-left`, `.center`) or flexbox columns for faces 4 and 6

### JavaScript

Three angle counters (`rotX`, `rotY`, `rotZ`) increment at different speeds every frame and are applied to the cube as a CSS transform. Since the counters never reset, the rotation is perfectly smooth with no jumping or looping.

```js
function animate() {
  rotX += 0.4;
  rotY += 0.7;
  rotZ += 0.2;
  cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
  requestAnimationFrame(animate);
}
```

The different speeds on each axis ensure all 6 faces tumble into view over time.

---

## Run Locally

No installation needed. Just clone or download and open `index.html` in any browser.

```bash
git clone https://github.com/your-username/dice-project.git
cd dice-project
open index.html
```

---

## Author

Adib Ahmed - BSS
AI Engineer (Intern)

## 📄 License

MIT — free to use and modify.
