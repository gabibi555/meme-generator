'use strict';

var gMeme = {
    isInput:false,
    txtUp:'',
    txtDown:'',
    size:'',
    color:'',
}

function init() {
    renderImgs()
    renderCanvas()
}

function renderCanvas() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');
    gCanvas.width = 450;
    gCanvas.height = 450;
}
function renderRelated(relatedImgs) {
    console.log(relatedImgs)
    let img = relatedImgs;
    let strHtmls = relatedImgs.map(img => {
        return `<div class="item flex">
                    <img id="${img.id}" class="photo-item"src="${img.url}" onclick="getImgToCanvas(this.id)" alt=""></img>
                  </div>`
    })
    document.querySelector('.related-img').innerHTML = strHtmls.join(" ");

}

function renderImgToCanvas(currImg) {
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");
    var img = new Image;
    console.log(img)
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, c.width, c.height);
    img.src = `${currImg}`
    img.onload = function () {
        ctx.drawImage(img, (c.width / 2) - (img.width / 2), 0, img.width, c.height);
    }
    document.querySelector('.sand-box').classList.remove("display-none")
 
}

function renderImgs(searchImgs) {
    if (searchImgs) {
        let img = searchImgs
        var strHtmls = searchImgs.map(function (img) {
            return `<div id="${img.id}" class="item flex" onclick="getImgToCanvas(this.id)">
                    <img class="photo-item" src="${img.url}" alt="">
             </div>`

        })
    } else {
        let img = searchImgs
        var strHtmls = gImgs.map(function (img) {
            return `<div id="${img.id}" class="item flex" onclick="getImgToCanvas(this.id)">
                    <img class="photo-item" src="${img.url}" alt="">
             </div>`
        })
    }

    document.querySelector(".gird-card").innerHTML = strHtmls.join(" ")
}

function getImgToCanvas(imgId) {
    let currImg = getImgUrl(imgId)
    renderImgToCanvas(currImg[0].url)
    let relatedImgs = getSimilarKeyWord(currImg[0].keyword)
    renderRelated(relatedImgs)
    renderImgs()
}
