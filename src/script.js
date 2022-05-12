//this is a list of all the chapters so I can reference them later
const chapterList = [
    {
        ID: "0",
        chapterName: "Chapter-1",
        titleImage: "dabloons.png",
        chapterImages: ["emi11.png", "emi12.png", "emi13.png","emi14.png"]
    },
    {
        ID: "1",
        chapterName: "Chapter-2",
        titleImage: "wires.jpg",
        chapterImages: ["emi21.png", "emi22.png", "emi23.png","emi24.png"]
    },
    {
        ID: "2",
        chapterName: "Chapter-3",
        titleImage: "ange.jpg",
        chapterImages: ["emi31.png","emi32.png","emi33.png"]
    },
    {
        ID: "3",
        chapterName: "Chapter-4",
        titleImage: "wires.jpg",
        chapterImages: ["emi41.png", "emi42.png","emi43.png","emi44.png","emi46.png","emi47.png"]
    },
    {
        ID: "4",
        chapterName: "Chapter-5",
        titleImage: "wires.jpg",
        chapterImages: ["emi51.png", "emi52.png","emi53.png","emi54.PNG","emi55.jpg"]
    },
    {
        ID: "5",
        chapterName: "Chapter-6",
        titleImage: "wires.jpg",
        chapterImages: ["emi61.png", "emi62.png","emi63.png","emi64.png","emi65.png","emi66.JPG"]
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
