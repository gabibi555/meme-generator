'use strict';

var gCanvas;
var gCtx;
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

var gMeme = {
    isInput: false,
    txtUp: '',
    txtDown: '',
    size: '',
    color: '',
}

function getImgUrl(imgId) {
    let currImg = gImgs.filter(img => {
        return img.id === imgId
    })
    return currImg;
}

function getSimilarKeyWord(keyword) {
    let relatedImgs = []
    gImgs.map(img => {
        if (img.keyword === keyword) {
            relatedImgs.push(img)
        }
    })
    return relatedImgs;
}
function searchValue(keyword) {
    console.log(keyword)
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

function updateTextUp(txt) {
    if (!gMeme.isInput) {
        gMeme.isInput = true
    } else {
        gMeme.txtUp = txt
    }
}
function updateTextDown(txt) {
    if (!gMeme.isInput) {
        gMeme.isInput = true
    } else {
        gMeme.txtDown = txt
    }
}

function updateColor(colorId) {
    gMeme.color = colorId
}


