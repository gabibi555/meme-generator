'use strict';

var gCanvas;
var gCtx;
var gX;
var gY = 255;
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
            str: '',
            size: '20px ',
            font: 'impact',
            color: '#ffffff',
            posX: 255,
            posY: 255,
        }
        ,],
}

function getImgUrl(imgId) {
    let currImg = gImgs.find(img => {
        return img.id === imgId
    })
    return currImg;
}

function getSimilarKeyWord(keyword) {
    let relatedImgs = gImgs.filter(img => {
        return img.keyword === keyword
    })
    return relatedImgs;
}
function searchValue(keyword) {
    if (!keyword) {
        return renderImgs()
    }
    let relatedImgs = []
    gImgs.map(img => {
        if (img.keyword === keyword) {
            relatedImgs.push(img)
        }
    })
    renderImgs(relatedImgs);
}

function updateText(txtToUpdate, idx = 0) {
    let currTxt = gMeme.txts
    let currLine = currTxt[0];
    gMeme.txts[idx].str = txtToUpdate;
}

function updateColor(elInput) {
    let idx = +elInput.dataset.idx;
    let currColor = gMeme.txts[idx];
    currColor.color = elInput.value
}


