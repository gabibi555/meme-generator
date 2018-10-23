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

function getImgUrl(imgId) {
    let currImg = gImgs.filter(img => {
        return img.id === imgId
    })
    return currImg;
}

function getSimilarKeyWord(keyword) {
    let relatedImgs=[]
        gImgs.map(img => {
        if(img.keyword === keyword) {
            relatedImgs.push(img)
        }
    })
    return relatedImgs;
}


