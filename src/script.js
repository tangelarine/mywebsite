const chapterList = [
    {
        ID: "0",
        chapterName: "Chapter-1",
        titleImage: "dabloons.png",
        chapterImages: ["emi1.png", "emi2.png", "emi3.png"]
    },
    {
        ID: "1",
        chapterName: "Chapter-1",
        titleImage: "wires.jpg",
        chapterImages: ["emi4.png", "emi5.png"]
    },
    {
        ID: "2",
        chapterName: "Chapter-1",
        titleImage: "ange.jpg",
        chapterImages: ["emi6.jpg"]
    }

]

chapterGallery = document.getElementById("art-pieces")
chapterArea = document.getElementById("highlighted-art")
function loadChapters(chapterList){
    for (let chapter in chapterList){
        currentChapter = chapterList[chapter]
        chapterGallery.innerHTML += `<div class=${currentChapter.ID}><img class=${currentChapter.ID} src="images/${currentChapter.titleImage}"></div>`
    }
}
  
function chapterView(evt){
    console.log("hi")
    index = parseInt(evt.target.className)
    chapter = chapterList[index]
    chapterArea.innerHTML = `<div id="individual_chapter"><button><span aria-hidden="true">Close here</span></button></div>`
    currentChapter = document.getElementById("individual_chapter")
    for (let image in chapter.chapterImages){
        console.log(chapter.chapterImages[image])
        currentChapter.innerHTML += `<img src="images/${chapter.chapterImages[image]}">`
    }
    btn = document.querySelector("button")
    btn.addEventListener("click", startup)
    chapterGallery.innerHTML = ''
}
  
function startup(){
    chapterArea.innerHTML = ""
    loadChapters(chapterList)
    chapterGallery.addEventListener("click", chapterView)
}
  
startup()