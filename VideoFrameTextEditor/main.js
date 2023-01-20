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
var paragraphInputs = document.getElementById("paragraph-inputs");

var previousTextColors = [];

var textSectionCounter = 1;
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

function addParagraph() {    
//<div class="paragraph-input" id="paragraph-input-0">
    let paragraphInput = document.createElement('div');
    paragraphInput.classList.add('paragraph-input');
    paragraphInput.id = "paragraph-input-" + textSectionCounter;
//<textarea class="text-input" id="text-input-0" placeholder="Enter a paragraph from your page here."></textarea>
    let textInput = document.createElement('textarea');
    textInput.classList.add('text-input');
    textInput.id = "text-input-" + textSectionCounter;
    textInput.placeholder = "Enter a paragraph from your page here.";
    paragraphInput.appendChild(textInput);
// <div class="controll-section hidden" id="controll-section-0">
    let controllSection = document.createElement('div');
    controllSection.classList.add("controll-section");
    controllSection.classList.add("hidden");
    controllSection.id = "controll-section-" + textSectionCounter;
//<select onchange="updateFont(0, this)">
    let updateFontSelect = document.createElement('select');
    updateFontSelect.onchange = "updateFont(" + textSectionCounter + ", this)";
//<option style="font-family: Arial, Helvetica, sans-serif">Arial</option>
    let updateFontOption = document.createElement('option');
    updateFontOption.style = "font-family: Arial, Helvetica, sans-serif";
    updateFontOption.innerText = 'Arial';
    updateFontSelect.appendChild(updateFontOption);
//<option style="font-family: Verdana, Geneva, Tahoma, sans-serif">Verdana</option>
    updateFontOption = document.createElement('option');
    updateFontOption.style ="font-family: Verdana, Geneva, sans-serif";
    updateFontOption.innerText = 'Verdana';
    updateFontSelect.appendChild(updateFontOption);
//<option style="font-family: Tahoma, sans-serif">Tahoma</option>
    updateFontOption = document.createElement('option');
    updateFontOption.style ="font-family: Tahoma, sans-serif";
    updateFontOption.innerText = 'Tahoma';
    updateFontSelect.appendChild(updateFontOption);
//<option style="font-family: Trebuchet, sans-serif">Trebuchet</option>
    updateFontOption = document.createElement('option');
    updateFontOption.style ="font-family: Trebuchet, sans-serif";
    updateFontOption.innerText = 'Trebuchet';
    updateFontSelect.appendChild(updateFontOption);
//<option style="font-family: 'Times New Roman', Times, serif">Times New Roman</option>
    updateFontOption = document.createElement('option');
    updateFontOption.style ="font-family: 'Times New Roman', Times, serif";
    updateFontOption.innerText = 'Times New Roman';
    updateFontSelect.appendChild(updateFontOption);
//<option style="font-family: Georgia, serif">Georgia</option>
    updateFontOption = document.createElement('option');
    updateFontOption.style ="font-family: Georgia, serif";
    updateFontOption.innerText = 'Georgia';
    updateFontSelect.appendChild(updateFontOption);
//<option style="font-family: Garamond, serif">Garamond</option>
    updateFontOption = document.createElement('option');
    updateFontOption.style ="font-family: Garamond, serif";
    updateFontOption.innerText = 'Garamond';
    updateFontSelect.appendChild(updateFontOption);
//<option style="font-family: 'Courier New', Courier, monospace">Courier New</option>
    updateFontOption = document.createElement('option');
    updateFontOption.style ="font-family: 'Courier New', Courier, monospace";
    updateFontOption.innerText = 'Courier New';
    updateFontSelect.appendChild(updateFontOption);
    controllSection.appendChild(updateFontSelect);
//<input type="number" id="font-size" min="10" max="100" value="16" onchange="updateFontSize(0, this)">
    let fontSizeInput = document.createElement('input');
    fontSizeInput.type = "number";
    fontSizeInput.id = "font-size";
    fontSizeInput.min = "10";
    fontSizeInput.max = "100";
    fontSizeInput.value = "16";
    fontSizeInput.onchange = "updateFontSize(" + textSectionCounter + ", this)";
    controllSection.appendChild(fontSizeInput);
//<button class="controll-button" onclick="toggleClass(0, 'bold')">
    let button = document.createElement('button');
    button.classList.add(controll-button);
    button.onclick = "toggleClass(" + textSectionCounter + ", 'bold')";
//<span><strong><i class="fa-solid fa-bold"></i></strong></span>
    let buttonSpan = document.createElement('span');
    let buttonStrong = document.createElement('strong');
    let buttonIcon = document.createElement('i');
    buttonIcon.classList.add('fa-solid');
    buttonIcon.classList.add('fa-bold');
    buttonStrong.appendChild(buttonIcon);
    buttonSpan.appendChild(buttonStrong);
    button.appendChild(buttonSpan);
    controllSection.appendChild(button);
//<button class="controll-button" onclick="toggleClass(0, 'italic')">
//<span><strong><i class="fa-solid fa-italic"></i></strong></span>
    button = document.createElement('button');
    button.classList.add(controll-button);
    button.onclick = "toggleClass(" + textSectionCounter + ", 'italic')";
    buttonSpan = document.createElement('span');
    buttonStrong = document.createElement('strong');
    buttonIcon = document.createElement('i');
    buttonIcon.classList.add('fa-solid');
    buttonIcon.classList.add('fa-italic');
    buttonStrong.appendChild(buttonIcon);
    buttonSpan.appendChild(buttonStrong);
    button.appendChild(buttonSpan);
    controllSection.appendChild(button);
//<button class="controll-button" onclick="toggleClass(0, 'underline')">
//<span><strong><i class="fa-solid fa-underline"></i></strong></span>
    button = document.createElement('button');
    button.classList.add(controll-button);
    button.onclick = "toggleClass(" + textSectionCounter + ", 'underline')";
    buttonSpan = document.createElement('span');
    buttonStrong = document.createElement('strong');
    buttonIcon = document.createElement('i');
    buttonIcon.classList.add('fa-solid');
    buttonIcon.classList.add('fa-underline');
    buttonStrong.appendChild(buttonIcon);
    buttonSpan.appendChild(buttonStrong);
    button.appendChild(buttonSpan);
    controllSection.appendChild(button);
//<div>
    let rowDiv = document.createElement('div');
//<button class="controll-button" onclick="openPicker(0, 'font-color-picker-')">
    button = document.createElement('button');
    button.classList.add('controll-button');
    button.onclick = "openPicker(" + textSectionCounter + ", 'font-color-picker-')";
//<span id="font-color-0"><strong>Font Color</strong></span>
    buttonSpan = document.createElement('span');
    buttonSpan.id = "font-color-" + textSectionCounter;
    buttonStrong = document.createElement('strong');
    buttonStrong.innerText = 'Font Color';
    buttonSpan.appendChild(buttonStrong);
    button.appendChild(buttonSpan);
    rowDiv.appendChild(button);
//<div id="font-color-picker-0" class="color-picker hidden">
    let pickerDiv = document.createElement('div');
    pickerDiv.id = "font-color-picker-" + textSectionCounter;
    pickerDiv.classList.add("color-picker hidden");
//<h3>Choose a font color</h3>
    let h3 = document.createElement('h3');
    h3.innerText = 'Choose a font color';
    pickerDiv.appendChild(h3);
//<input type="color" value="black">
    let pickerInput = document.createElement('input');
    pickerInput.type = 'color';
    pickerInput.value = 'black';
    pickerDiv.appendChild(pickerInput);
//<button onclick="updateFontColor(0, this)" class="set-button first-of-two">set color</button>
    button = document.createElement('button');
    button.onclick = "updateFontColor(" + textSectionCounter + ", this)";
    button.classList.add('set-button');
    button.classList.add('first-of-two');
    button.innerText = 'set color';
    pickerDiv.appendChild(button);
//<button onclick="closeParent(this)" class="close-button second-of-two">close</button>
    button = document.createElement('button');
    button.onclick = "closeParent(this)";
    button.classList.add('close-button');
    button.classList.add('second-of-two');
    button.innerText = 'close';
    pickerDiv.appendChild(button);
    rowDiv.appendChild(pickerDiv);
//<button class="controll-button" id="font-highlight" onclick="openPicker(0, 'highlight-color-picker-')">
//<span id="highlight-color-0"><strong style="background-color: #f1f19c" style="background-size: fit-content">Highlight</strong></span>
    button = document.createElement('button');
    button.classList.add(controll-button);
    button.onclick = "openPicker(" + textSectionCounter + ", 'highlight-color-picker-')";
    buttonSpan = document.createElement('span');
    buttonSpan.id = "highlight-color-" + textSectionCounter;
    buttonStrong = document.createElement('strong');
    buttonStrong.style ="background-color: #f1f19c";
    buttonStrong.style += "background-size: fit-content";
    buttonStrong.innerText = 'Highlight';
    buttonSpan.appendChild(buttonStrong);
    button.appendChild(buttonSpan);
    controllSection.appendChild(button);
//<div id="highlight-color-picker-0" class="color-picker hidden">
    pickerDiv = document.createElement('div');
    pickerDiv.id = "highlight-color-picker-" + textSectionCounter;
    pickerDiv.classList.add("color-picker hidden");
//<h3>Choose a highlight color</h3>
    h3 = document.createElement('h3');
    h3.innerText = 'Choose a highlight color';
    pickerDiv.appendChild(h3);
//<input type="color" value="#f1f19c">
    pickerInput = document.createElement('input');
    pickerInput.type = 'color';
    pickerInput.value = "#f1f19c";
    pickerDiv.appendChild(pickerInput);
//<button onclick="updateHighlightColor(0, this)" class="set-button first-of-three">set highlight</button>
    button = document.createElement('button');
    button.onclick = "updateHighlightColor(" + textSectionCounter + ", this)";
    button.classList.add('set-button');
    button.classList.add('first-of-three');
    button.innerText = 'set highlight';
    pickerDiv.appendChild(button);
//<button onclick="removeHighlight(0, this)" class="remove-button second-two">remove</button>
    button = document.createElement('button');
    button.onclick = "removeHighlight(" + textSectionCounter + ", this)";
    button.classList.add("remove-button");
    button.classList.add('second-two');
    button.innerText = 'remove';
    pickerDiv.appendChild(button);
//<button onclick="closeParent(this)" class="close-button second-two">close</button>
    button = document.createElement('button');
    button.onclick = "closeParent(this)";
    button.classList.add('close-button');
    button.classList.add('second-two');
    button.innerText = 'close';
    pickerDiv.appendChild(button);
    rowDiv.appendChild(pickerDiv);
//<button class="controll-button" onclick="openPicker(0, 'ombrelight-color-picker-')">
//<span id="ombrelight-color-0"><strong style="background-image: linear-gradient(#9cf1a2, #cb9cf1)" style="background-size: fit-content">Ombrelight</strong></span>
    button =  document.createElement('button');
    button.classList.add('controll-button');
    button.onclick = "openPicker(" + textSectionCounter + ", 'ombrelight-color-picker-')";
    buttonSpan = document.createElement('span');
    buttonSpan.id = "ombrelight-color-" + textSectionCounter;
    buttonStrong = document.createElement('strong');
    buttonStrong.style = "background-image: linear-gradient(#9cf1a2, #cb9cf1)";
    buttonStrong.style += "background-size: fit-content";
    buttonStrong.innerText = 'Ombrelight';
    buttonSpan.appendChild(buttonStrong);
    button.appendChild(buttonSpan);
    rowDiv.appendChild(button);
//<div id="ombrelight-color-picker-0" class="color-picker hidden">
    pickerDiv = document.createElement('div');
    pickerDiv.id = "ombrelight-color-picker-" + textSectionCounter;
    pickerDiv.classList.add('color-picker');
    pickerDiv.classList.add('hidden');
//<h3>Choose two colors</h3>
    h3 = document.createElement('h3');
    h3.innerText = 'Choose two colors';
    pickerDiv.appendChild(h3);
//<input type="color" value="#9cf1a2">
    pickerInput = document.createElement('input');
    pickerInput.type = 'color';
    pickerInput.value = "#9cf1a2";
    pickerDiv.appendChild(pickerInput);
//<input type="color" value="#cb9cf1">
    pickerInput = document.createElement('input');
    pickerInput.type = 'color';
    pickerInput.value = "#cb9cf1";
    pickerDiv.appendChild(pickerInput);
//<button onclick="updateOmbrelightGradient(0, this)" class="set-button first-of-three">set gradient</button>
    button = document.createElement('button');
    button.onclick = "updateOmbrelightGradient(" + textSectionCounter + ", this)";
    button.classList.add('set-button');
    button.classList.add('first-of-three');
    button.innerText = 'set gradient';
    pickerDiv.appendChild(button);
//<button onclick="removeOmbrelight(0, this)" class="remove-button second-two">remove</button>
    button = document.createElement(button);
    button.onclick = "removeOmbrelight(" + textSectionCounter + ", this)";
    button.classList.add('remove-button');
    button.classList.add('second-two');
    button.innerText = 'remove';
    pickerDiv.appendChild(button);
//<button onclick="closeParent(this)" class="close-button second-two">close</button>
    button = document.createElement('button');
    button.onclick = "closeParent(this)";
    button.classList.add('close-button');
    button.classList.add('second-two');
    button.innerText = 'close';
    pickerDiv.appendChild(button);
    rowDiv.appendChild(pickerDiv);
//line 91
    

    
    paragraphInput.appendChild(controllSection);

    paragraphInputs.appendChild(paragraphInput);
}