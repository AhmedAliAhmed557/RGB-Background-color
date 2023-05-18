### html

```html
<!DOCTYPE html>
<html>
<head>
    <title>RGB Color Picker</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="container">
        <div class="color-box"></div>
        <div class="controls">
            <label for="red">Red:</label>
            <input type="range" id="red" min="0" max="255" value="0">
            <label for="green">Green:</label>
            <input type="range" id="green" min="0" max="255" value="0">
            <label for="blue">Blue:</label>
            <input type="range" id="blue" min="0" max="255" value="0">
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```





### css

```css
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

.color-box {
    width: 200px;
    height: 200px;
    background-color: rgb(0, 0, 0);
    margin-bottom: 20px;
}

.controls {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    font-size: 18px;
    margin-bottom: 10px;
}

input[type="range"] {
    width: 200px;
    margin-bottom: 20px;
}
```





### js

```js
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let colorBox = document.querySelector('.color-box');

function updateColor() {
    let r = red.value;
    let g = green.value;
    let b = blue.value;
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

red.addEventListener('input', updateColor);
green.addEventListener('input', updateColor);
blue.addEventListener('input', updateColor);
```

