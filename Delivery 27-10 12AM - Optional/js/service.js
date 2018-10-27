'use strict';

//funcation to create
var gImgs = [{
    id: makeId(),
    url: 'meme-imgs/001.jpg',
    keyword: 'nature'
},
{
    id: makeId(),
    url: 'meme-imgs/002.jpg',
    keyword: 'funny'
},
{
    id: makeId(),
    url: 'meme-imgs/003.jpg',
    keyword: 'cute'
},
{
    id: makeId(),
    url: 'meme-imgs/004.jpg',
    keyword: 'cute'
},
]
//fix
var gMeme = {
    currImg: '',
    txts: [
        {
            str: 'type  Here',
            size: '35px ',
            font: 'impact',
            posX: 225,
            posY: 50,
            color: '#ffffff',
        }
        ,],
}
var idx = 0
function getImgUrl(imgId) {
    let currImg = gImgs.find(img => {
        return img.id === imgId
    })
    return currImg;
}

function updateText(txtToUpdate, idx) {
    gMeme.txts[idx].str = txtToUpdate;
}
function changeFontsize(fontSize, idx) {
gMeme.txts[idx].size = fontSize;
}

function updateColor(color, idx) {
    gMeme.txts[idx].color = color;
}

function setTextPosY(diff, idx) {
    gMeme.txts[idx].posY += diff;
}
function setTextPosX(diff, idx) {
    gMeme.txts[idx].posX += diff;
}

function changeStart() {
    if (gCurrIdx >= 1) {
        gMeme.txts[gCurrIdx + 1].posY = 175;
    } else { gMeme.txts[gCurrIdx + 1].posY = 275 };
    gMeme.txts[gCurrIdx + 1].size = '35px ';
    gMeme.txts[gCurrIdx + 1].font = 'impact';
    gMeme.txts[gCurrIdx + 1].color = '#ffffff';
}

function setTextPosLeft(idx) {
    gMeme.txts[idx].posX;
}
function setTextPosRight(idx) {
    gMeme.txts[idx].posX = gCanvas.width - 50;

}

function getCenter(idx) {
    gMeme.txts[idx].posX = gCanvas.width / 2;
    gMeme.txts[idx].posY = gCanvas.height / 2;
    renderText('center')
}

function deleteCurrLine(idx) {
    console.log(idx)
    if (idx === 0) {
        return;
    }
    gMeme.txts.splice(idx, 1);
}
