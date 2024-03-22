var currentImage = 0;
let currentPage = 0;
let imageArray = [
    "Images/jumbo-1.png",
    "Images/jumbo-2.jpg",
    "Images/jumbo-3.jpg"
];

function changeJumboImage()
{
var img = document.getElementById("jumbo-image");
img.src=imageArray[currentImage];
if(currentImage == 1){ currentImage = 0; return; }
else if(currentImage == 0){ currentImage = 1; return; }
return false;
}

function SwitchPage(){
    currentPage++;
    if(currentPage > 2){ currentPage = 0; }

    var img = document.getElementById("jumbo-image");
    img.src=imageArray[currentPage];
    return false;
}