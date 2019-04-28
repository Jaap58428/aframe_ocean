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

    for (let row = 0; row < oceanLength; row++) {
        for (let column = 0; column < oceanWidth; column++) {
            let newOceanElement = getNewOceanElement();
            newOceanElement.setAttribute('color', getRandomBlueTint());
            newOceanElement.setAttribute('position', `
                ${row * oceanResolution}, 
                ${0 - waveHeight}, 
                ${(0 - column) * oceanResolution}  // backwards: in front instead of backwards
            `);
            console.log(newOceanElement);
            
            // add animation according to timing?
            ocean.appendChild(newOceanElement);
        }        
    }
}

const getRandomBlueTint = () => {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#HSL_colors
    const hue = Math.round((Math.random() * 60)) + 180;
    const saturation = Math.round((Math.random() * 50)) + 25;
    const lightness = Math.round((Math.random() * 50)) + 25;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

const getNewOceanElement = () => {
    let oceanElement = document.createElement('a-box');
    oceanElement.setAttribute('depth', oceanResolution.toString());
    oceanElement.setAttribute('width', oceanResolution.toString());
    oceanElement.setAttribute('height', (waveHeight + 0.1).toString());
    oceanElement.className = "oceanElement"

    return oceanElement;
}

const main = () => {
    createOcean(oceanLength, oceanWidth, waveHeight, oceanResolution);
    
}

main();