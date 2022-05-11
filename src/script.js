//this is a list of all the chapters so I can reference them later
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
//this gathers the areas where I want to put the comics
chapterGallery = document.getElementById("art-pieces")
chapterArea = document.getElementById("highlighted-art")

//this function is used to load all the chapters so that the user is able to pick which one to read
function loadChapters(chapterList){
    for (let chapter in chapterList){
        currentChapter = chapterList[chapter]
        chapterGallery.innerHTML += `<div class=${currentChapter.ID}><img class=${currentChapter.ID} src="images/${currentChapter.titleImage}"></div>`
    }
}

//this function loads the specific chapter that the user clicked on
function chapterView(evt){
    console.log("hi")
    index = parseInt(evt.target.className)
    chapter = chapterList[index]
    chapterArea.innerHTML = `<div id="individual_chapter"></div>`
    currentChapter = document.getElementById("individual_chapter")
    for (let image in chapter.chapterImages){
        console.log(chapter.chapterImages[image])
        currentChapter.innerHTML += `<img src="images/${chapter.chapterImages[image]}">`
    }
    currentChapter.innerHTML += '<button><span aria-hidden="true">Close here</span></button>'
    btn = document.querySelector("button")
    btn.addEventListener("click", startup)
    chapterGallery.innerHTML = ''
}

//this function is used to make sure that everything is run on starting the website
function startup(){
    chapterArea.innerHTML = ""
    loadChapters(chapterList)
    chapterGallery.addEventListener("click", chapterView)
}
  
startup()