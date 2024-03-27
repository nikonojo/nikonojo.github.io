var currentImage = 0;
let currentPage = 0;
let imageArray = [
    "Images/jumbo-1.png",
    "Images/jumbo-2.png",
    "Images/jumbo-3.jpg"
];
let textArray = [
    'PROJECT: STARLIGHT',
    'DANN FOX & THE TIME MACHINE',
    'cofe hehe'
];

function changeJumboImage()
{
var img = document.getElementById("jumbo-image");
img.src=imageArray[currentImage];
if(currentImage == 1){ currentImage = 0; return; }
else if(currentImage == 0){ currentImage = 1; return; }
return false;
}

function SwitchPage(index){
    if(index == 1){
        currentPage++;
        if(currentPage > 2){ currentPage = 0; }
    
        var img = document.getElementById("jumbo-image");
        img.src=imageArray[currentPage];

        var txt = document.getElementById("jumbo-text");
        txt.textContent = textArray[currentPage];
        return false;
    }

    else{
        currentPage--;
        if(currentPage < 0){ currentPage = 2; }
    
        var img = document.getElementById("jumbo-image");
        img.src=imageArray[currentPage];

        var txt = document.getElementById("jumbo-text");
        txt.textContent = textArray[currentPage];
        return false;
    }
}