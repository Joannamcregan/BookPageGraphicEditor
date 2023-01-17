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