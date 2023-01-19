var isParagraphMode = true;
var inputHeading = document.getElementById("input-heading");
var inputToggleButton = document.getElementById("toggle-cover-text");
var paragraphInputSection = document.getElementById("paragraph-input-section");
var coverSection = document.getElementById("cover-section");
var outputSection = document.getElementById("output-section");
var plainBackgroundColorPicker = document.getElementById("plain-background-color-picker");
var plainColorBackground = document.getElementById("plain-color-background");
var tabletScreen = document.getElementById("tablet-screen");
var cover = document.getElementById("cover");
var excerpt = document.getElementById("excerpt");

var previousTextColors = [];

var textSectionCounter = 0;
var textSections = [];

function toggleCoverExcerpt(){
    if (isParagraphMode) {
        inputHeading.innerText = 'Choose your cover image';
        inputToggleButton.innerText = 'display text instead of book cover';
        coverSection.classList.remove('hidden');
        paragraphInputSection.classList.add('hidden');
        cover.classList.remove('hidden');
        excerpt.classList.add('hidden');
        isParagraphMode = false;
    } else {
        inputHeading.innerText = 'Enter and format your text';
        inputToggleButton.innerText = 'display book cover instead of text';
        paragraphInputSection.classList.remove('hidden');
        coverSection.classList.add('hidden');
        excerpt.classList.remove('hidden');
        cover.classList.add('hidden');
        isParagraphMode = true;
    }
}

function setFontColor(e) {
    console.log("set color to " + e.value);
}

function setBackground(e) {
    let backgroundClass = e.firstElementChild.classList[1];
    let oldBackgroundClass = outputSection.classList[1];
    if (backgroundClass != oldBackgroundClass) {
        outputSection.style.backgroundColor.remove;
        outputSection.style.backgroundImage.remove;
        outputSection.classList.add(backgroundClass);
        outputSection.classList.remove(oldBackgroundClass);
    }
}

function showPlainBackgroundColorPicker() {
    plainBackgroundColorPicker.classList.remove("hidden");
}

function setPlainColorBackground() {
    let newColor = plainColorBackground.value;
    let oldBackgroundClass = outputSection.classList[1];
    if (oldBackgroundClass != "background-plain") {
        outputSection.classList.add("background-plain");
        outputSection.classList.remove(oldBackgroundClass);
    }
    outputSection.style.backgroundColor = newColor;
    document.getElementById("background-plain-sample").style.backgroundColor = newColor;
    plainBackgroundColorPicker.classList.add("hidden");
}

function closePlainColorBackgroundPicker() {
    plainBackgroundColorPicker.classList.add("hidden");
}

function fitCover() {
    console.log('fitting cover');
    console.log(cover.classList);
    cover.classList.remove('fill-cover');
    cover.classList.add('fit-cover');
    console.log(cover.classList);
}

function fillCover() {
    cover.classList.remove('fit-cover');
    cover.classList.add('fill-cover');
}

function updateText(num) {
    let textInput = document.getElementById("text-input-" + num).value;
    let outputId = "text-output-" + num;
    if (textSections.includes(outputId)) {
        document.getElementById(outputId).innerText = textInput;
    } else {
        newTextOutput = document.createElement('p');
        newTextOutput.id = outputId;
        newTextOutput.classList.add('excerpt-paragraph');
        newTextOutput.innerText = textInput;
        excerpt.appendChild(newTextOutput);
        document.getElementById("controll-section-" + num).classList.remove("hidden");
        document.getElementById("controll-section-" + num).classList.add("flex");
        document.getElementById("enter-paragraph-" + num).innerText = 'update this text';
        textSections.push(outputId);
    }
}

function toggleClass(num, className) {
    if (document.getElementById('text-output-' + num).classList.contains(className)) {
        document.getElementById('text-output-' + num).classList.remove(className);
    } else {
        document.getElementById('text-output-' + num).classList.add(className);
    }
}

function updateFont(num, e) {
    document.getElementById('text-output-' + num).style.fontFamily = e.value;
}

function updateFontSize(num, e) {
    console.log(e.value);
    document.getElementById('text-output-' + num).style.fontSize = e.value + 'px';
}

function openPicker(num, id) {
    document.getElementById(id + num).classList.remove('hidden');
}

function updateFontColor(num, e) {
    let color = e.parentElement.querySelector('input').value;
    document.getElementById('text-output-' + num).style.color = color;
    document.getElementById('font-color-' + num).firstChild.style.color = color;
    e.parentElement.classList.add('hidden');
}

function updateHighlightColor(num, e) {
    let color = e.parentElement.querySelector('input').value;
    document.getElementById('text-output-' + num).style.backgroundImage = "none";
    document.getElementById('text-output-' + num).style.backgroundColor = color;
    // document.getElementById('text-output-' + num).style.backgroundSize = 'fit-content';
    document.getElementById('highlight-color-' + num).firstChild.style.backgroundColor = color;
    e.parentElement.classList.add('hidden');
}

function removeHighlight(num, e) {
    document.getElementById('text-output-' + num).style.backgroundColor = '';
    e.parentElement.classList.add('hidden');
}

function updateOmbrelightGradient(num, e) {
    document.getElementById('text-output-' + num).style.backgroundColor = "none";
    let color0 = e.parentElement.querySelectorAll('input')[0].value;
    let color1 = e.parentElement.querySelectorAll('input')[1].value;
    document.getElementById('text-output-' + num).style.backgroundImage = "linear-gradient(" + color0 + ", " + color1 + ")";
    document.getElementById('ombrelight-color-' + num).style.backgroundImage = "linear-gradient(" + color0 + ", " + color1 + ")";
    e.parentElement.classList.add('hidden');
}

function removeOmbrelight(num, e) {
    document.getElementById('text-output-' + num).style.backgroundImage = "none";
    e.parentElement.classList.add('hidden');
}

function addOutline(num, e) {
    let color = e.parentElement.querySelectorAll('input')[0].value;
    let thickness = e.parentElement.querySelectorAll('input')[1].value;
    document.getElementById('text-output-' + num).style.textShadow = "0 0 " + thickness + "px " + color;
    document.getElementById('font-outline-' + num).firstElementChild.style.textShadow = "0 0 2px " + color;    
    document.getElementById("font-shadow-" + num).classList.add("hidden");
    document.getElementById("font-blurred-" + num).classList.add("hidden");
    document.getElementById("grayed-out-font-shadow-" + num).classList.remove("hidden");
    document.getElementById("grayed-out-font-blurred-" + num).classList.remove("hidden");
    e.parentElement.classList.add('hidden');
}

function removeOutline(num, e) {
    document.getElementById("text-output-" + num).style.textShadow = "";    
    document.getElementById("grayed-out-font-shadow-" + num).classList.add("hidden");
    document.getElementById("grayed-out-font-blurred-" + num).classList.add("hidden");
    document.getElementById("font-shadow-" + num).classList.remove("hidden");
    document.getElementById("font-blurred-" + num).classList.remove("hidden");
    e.parentElement.classList.add('hidden');
}

function toggleShadow(num) {
    if (document.getElementById("text-output-" + num).style.textShadow) {
        document.getElementById("text-output-" + num).style.textShadow = "";
        document.getElementById("grayed-out-font-outline-" + num).classList.add("hidden");
        document.getElementById("grayed-out-font-blurred-" + num).classList.add("hidden");
        document.getElementById("font-outline-" + num).classList.remove("hidden");
        document.getElementById("font-blurred-" + num).classList.remove("hidden");
    } else {        
        document.getElementById("text-output-" + num).style.textShadow = "1px 1px 3px #215271";
        document.getElementById("font-outline-" + num).classList.add("hidden");
        document.getElementById("font-blurred-" + num).classList.add("hidden");
        document.getElementById("grayed-out-font-outline-" + num).classList.remove("hidden");
        document.getElementById("grayed-out-font-blurred-" + num).classList.remove("hidden");
    }
} 

function toggleBlur(num) {
    if (document.getElementById("text-output-" + num).style.textShadow) {
        let alreadyInArray = false;
        let counter = 0;
        while (alreadyInArray === false && counter < previousTextColors.length){
            if (previousTextColors[counter].paragraphNum == num){
                document.getElementById("text-output-" + num).style.color = previousTextColors[counter].previousColor;
                alreadyInArray = true;
            } else {
                document.getElementById("text-output-" + num).style.color = "black";
            }
        }
        document.getElementById("text-output-" + num).style.textShadow = "";        
        document.getElementById("grayed-out-font-outline-" + num).classList.add("hidden");
        document.getElementById("grayed-out-font-shadow-" + num).classList.add("hidden");
        document.getElementById("font-outline-" + num).classList.remove("hidden");
        document.getElementById("font-shadow-" + num).classList.remove("hidden");
    } else {        
        let alreadyInArray = false;
        let counter = 0;
        while (alreadyInArray === false && counter < previousTextColors.length){
            if (previousTextColors[counter].paragraphNum == num){
                previousTextColors[counter].previousColor = document.getElementById("text-output-" + num).style.color;
                alreadyInArray = true;
            }
        }        
        if (alreadyInArray === false) {
            let previousTextColor = {
                paragraphNum: num,
                previousColor: document.getElementById("text-output-" + num).style.color
            };
            previousTextColors.push(previousTextColor);
        }
        document.getElementById("text-output-" + num).style.color = "rgba(0, 0, 0, 0.2)";
        document.getElementById("text-output-" + num).style.textShadow = "0 0 5px black";
        document.getElementById("font-outline-" + num).classList.add("hidden");
        document.getElementById("font-shadow-" + num).classList.add("hidden");
        document.getElementById("grayed-out-font-outline-" + num).classList.remove("hidden");
        document.getElementById("grayed-out-font-shadow-" + num).classList.remove("hidden");
    }
} 

function closeParent(e) {
    e.parentElement.classList.add('hidden');
}