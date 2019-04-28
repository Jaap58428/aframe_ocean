// setTimeout(() => {
//     let oceanElements = document.getElementsByClassName('oceanElement');
//     [].forEach.call(oceanElements, (oceanElement) => {
//         let animation = document.getElementById("oceanElementWaveAnimation")
//         oceanElement.appendChild(animation);
//     });
// }, 1000);


// set global ocean variables
const oceanLength = 10;  // how many elements long the ocean is
const oceanWidth = 10;  // how many elements wide the ocean is
const waveHeight = 1;  // how high each element can rise as part of a wave

// how wide and deep every element is
// smaller elements create finer defined ocean at the cost of computing
// default = 0.25
const oceanResolution = 0.25;  

const createOcean = (oceanLength, oceanWidth, waveHeight, oceanResolution) => {
    // grab complete ocean to fill with elements
    let ocean = document.getElementById('ocean');

    for (let i = 0; i < oceanLength; i++) {
        for (let j = 0; j < oceanWidth; j++) {
            let newOceanElement = getNewOceanElement();
            newOceanElement.setAttribute('color', getRandomBlueTint());
            newOceanElement.setAttribute('position', getRandomBlueTint());
            // add coordinates
            // add animation according to timing?
        }        
    }
}

const getRandomBlueTint = () => {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#HSL_colors
    const hue = (Math.random() * 60) + 180;
    const saturation = (Math.random() * 50) + 25;
    const lightness = (Math.random() * 50) + 25;

    return `hsl(${hue}, ${saturation}, ${lightness}`;
}

const getNewOceanElement = () => {
    let  = document.createElement('a-box');
    oceanElement.setAttribute('depth', oceanResolution.toString);
    oceanElement.setAttribute('width', oceanResolution.toString);
    oceanElement.setAttribute('height', (waveHeight + 0.1).toString);
    oceanElement.className = "oceanElement"

    return oceanElement;
}

const main = () => {
    createOcean(oceanLength, oceanWidth, waveHeight, oceanResolution);
    
}

main();