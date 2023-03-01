window.onload = () => {
    generateRandomCube()
};
const container = document.getElementById('container');
function generateRandomCube() {
    let cube;
    for (let i = 0; i <= 150; i++) {
        let num = i;
        cube = document.createElement('div');
        cube.setAttribute('class','cube' + `${num} cube`,);
        let randomScale = Math.floor(Math.random() * 140);
        if(randomScale <= 10)
            randomScale = 15;
        let randomRadius = Math.floor(Math.random() * 30);
        let randomPositionX = Math.floor(Math.random() * (window.innerWidth) - randomScale);
        let randomPositionY = Math.floor(Math.random() * (window.innerHeight) - randomScale);
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${r}, ${g}, ${b})`;
        cube.style.position = 'absolute';
        cube.style.width = `${randomScale}px`;
        cube.style.height = `${randomScale}px`;
        cube.style.left = `${randomPositionX}px`;
        cube.style.top = `${randomPositionY}px`;
        cube.style.border = `3px solid ${randomColor}`;
        cube.style.borderRadius = `${randomRadius}px`;
        container.appendChild(cube);
    }
}




