'use strict';

var gCanvas;
var gCtx;
var gX;
var gY = 255;
var gCurrIdx = 0;



function init() {
    renderImgs()
    renderCanvas()
}

function renderCanvas() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');
    gCanvas.width = 450;
    gCanvas.height = 350;
}

function renderImgToCanvas(currImg) {
    let img = new Image;
    img.src = `${currImg.url}`
    var imageDimensions = getImageDimensions(img, gCanvas)
    gCtx.drawImage(img, 0, 0, imageDimensions.width, imageDimensions.height);
    document.querySelector('.sand-box').classList.remove("display-none")
    document.querySelector('.control-panel').classList.remove("display-none")
}


function getImageDimensions(image, gCanvas) {
    var wrh = image.width/image.height;
    var newWidth = gCanvas.width;
    var newHeight = newWidth / wrh;
    if (newHeight > gCanvas.height) {
        newHeight = gCanvas.height;
        newWidth = newHeight * wrh;
    }
    return {
        width: newWidth,
        height: newHeight
    }
}

function renderText() {
    let txtsToRender = gMeme.txts
    renderImgToCanvas(gMeme.currImg)
    txtsToRender.forEach(txt => {
        gCtx.font = (txt.size + txt.font)
        gCtx.fillStyle = txt.color
        gCtx.textAlign = 'center'
        console.log(gCtx.measureText(txt.str).width)
        gCtx.fillText(txt.str, txt.posX, txt.posY);
        gCtx.strokeText(txt.str, txt.posX, txt.posY);
        
    })
}

function renderImgs(searchImgs) {
    let imgs = (searchImgs) ? searchImgs : gImgs;
    let strHtmls = imgs.map(function (img) {
        return `<div id="${img.id}" class="item flex" onclick="getImgToCanvas(this)">
                    <img class="photo-item"  src="${img.url}" alt="">
                </div>`
    })
    document.querySelector(".gird-card").innerHTML = strHtmls.join(" ")
}

function getImgToCanvas(elImg) {
    document.querySelector('.logo').classList.add('animation')
    setTimeout(() => {
        document.querySelector('.logo').classList.remove('animation')
    }, 2500);
    gMeme.txts.splice(1, gCurrIdx)
    gCurrIdx = 0
    document.querySelector('#curr-idx').innerText = 'Line :' + (gCurrIdx + 1)
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    let currImg = getImgUrl(elImg.id)
    gMeme.currImg = currImg
    renderImgToCanvas(gMeme.currImg)
    renderText()
}

// All canvas controls e.g Text/position/color/add/delete.
function addLine() {
    let txtToPush = Object.assign({}, gMeme.txts[0])
    gMeme.txts.push(txtToPush)
    document.querySelector('.text-input').value = ""
    gMeme.txts[gCurrIdx + 1].str = 'type here'
    changeStart()
    let elInputs = document.querySelectorAll('[data-idx]')
    elInputs.forEach(input => {
        input.dataset.idx++
    })
    gCurrIdx++
    document.querySelector('#curr-idx').innerText = 'Line :' + (gCurrIdx + 1)
    document.querySelector('.color-input').value = '#ffffff';
    renderText()
}

function deleteLine() {
    deleteCurrLine(gCurrIdx)
    renderText()
    idxDown()
}

function idxUp() {
    if (gCurrIdx === gMeme.txts.length - 1) return;
    gCurrIdx++;
    document.querySelector('#curr-idx').innerText = 'Line :' + (gCurrIdx + 1);
    document.querySelector('.text-input').value = gMeme.txts[gCurrIdx].str;
    document.querySelector('.color-input').value = gMeme.txts[gCurrIdx].color;
}

function idxDown() {
    if (gCurrIdx === 0) return;
    gCurrIdx--;
    document.querySelector('#curr-idx').innerText = 'Line :' + (gCurrIdx + 1);
    document.querySelector('.text-input').value = gMeme.txts[gCurrIdx].str;
    document.querySelector('.color-input').value = gMeme.txts[gCurrIdx].color;
}
function changeFont(elInput) {
    let fontSize = gMeme.txts[gCurrIdx]
    changeFontsize(elInput.value, gCurrIdx)
    document.querySelector('.font-size-num').innerHTML = elInput.value + 'px'
    fontSize.size = elInput.value + 'px '
    renderText()
}

function changeColor(elInput) {
    updateColor(elInput.value, gCurrIdx)
    renderText()
}

function getText(elInput) {
    updateText(elInput.value, gCurrIdx)
    renderText()
}

function textPosUp() {
    setTextPosY(-15, gCurrIdx)
    renderText()
}
function textPosDown() {
    setTextPosY(15, gCurrIdx)
    renderText()
}
function ceneterText() {
    getCenter(gCurrIdx)
}

function textPosLeft() {
    setTextPosX(-30, gCurrIdx)
    renderText()
}
function textPosRight() {
    setTextPosX(30, gCurrIdx)
    renderText()
}

function downloadCanvas(elLink) {
   document.querySelector('.logo').classList.add('animation')
    setTimeout(() => {
        document.querySelector('.logo').classList.remove('animation')
    }, 4400);
    elLink.href = gCanvas.toDataURL()
    elLink.download = 'Just-Meme.jpg'
}