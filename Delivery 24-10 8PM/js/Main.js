'use strict';

function init() {
    renderImgs()
    renderCanvas()
    document.querySelector('.text-input').addEventListener("keypress", keyPressed);
}

function renderCanvas() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');
    gCanvas.width = 450;
    gCanvas.height = 450;
}

function renderRelated(relatedImgs) {
    let strHtmls = relatedImgs.map(img => {
        return `<div class="item flex">
                    <img id="${img.id}" class="photo-item"src="${img.url}" onclick="getImgToCanvas(this.id)" alt=""></img>
                  </div>`
    })
    document.querySelector('.related-img').innerHTML = strHtmls.join(" ");
}

function renderImgToCanvas(currImg) {
    let img = new Image;
    gCtx.fillRect(0, 0, c.width, c.height);
    img.src = `${currImg}`
    gCtx.drawImage(img, (c.width / 2) - (img.width / 2), 0, img.width, c.height);
    document.querySelector('.sand-box').classList.remove("display-none")
}

function renderText() {
    let txtsToRender = gMeme.txts
    renderImgToCanvas(gMeme.currImg.url)
         txtsToRender.forEach(txt =>{
             console.log(txt)
            gCtx.font = (txt.size + txt.font)
            gCtx.fillStyle = txt.color
            gCtx.textAlign = 'center'
            gCtx.fillText(txt.str, 225, txt.posY);
            gCtx.strokeText(txt.str, 225, txt.posY)
 })
}

function renderImgs(searchImgs) {
    let imgs = (searchImgs) ? searchImgs : gImgs;
    let strHtmls = imgs.map(function (img) {
        return `<div id="${img.id}" class="item flex" onclick="getImgToCanvas(this.id)">
                    <img class="photo-item" src="${img.url}" alt="">
                </div>`
    })
    document.querySelector(".gird-card").innerHTML = strHtmls.join(" ")
}

function getImgToCanvas(imgId) {
    let currImg = getImgUrl(imgId)
    gMeme.currImg = currImg
    renderImgToCanvas(currImg.url)
    let relatedImgs = getSimilarKeyWord(currImg.keyword)
    renderRelated(relatedImgs)
}

function changeFont(elInput) {
    let idx = +elInput.dataset.idx
    let fontSize = gMeme.txts[idx]
    document.querySelector('.font-size-num').innerHTML = elInput.value + 'px'
    fontSize.size = elInput.value + 'px '
    renderText()
}

function changeColor(colorId) {
    let currColor = updateColor(colorId)
    renderText()
}

function getText(elInput) {
    let idx = +elInput.dataset.idx;
    updateText(elInput.value, idx)
    renderText()
}

function textPosUp(elInput) {
    let idx = +elInput.dataset.idx;
    gY = gY - 15;
    let yPostion = gMeme.txts[idx];
    yPostion.posY = gY;
    renderText()
}

function textPosDown(elInput) {
    let idx = +elInput.dataset.idx;
    gY = gY + 15;
    let yPostion = gMeme.txts[idx];
    yPostion.posY = gY;
    renderText()
}

function keyPressed(k) {
    if (k.key ==='Enter'){
        let txtToPush = Object.assign({},gMeme.txts[0])
        gMeme.txts.push(txtToPush)
        document.querySelector('.text-input').value = "Put Text Here"
       let elInputs = document.querySelectorAll('[data-idx]')
       elInputs.forEach(input =>{
        input.dataset.idx ++
       })
    }   
}
