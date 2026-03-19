

















// change bg color
document.getElementById("bgColorBtn").onClick=function(){
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
};

// incresase font size
document.getElementById("fontSizeBtn").addEventListener("click", function(){
    fontSize +=2;
    paragraph.style.fontSize = fontSize + "px";
});

// show/hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function(){
    if(paragraph.style.display === "none"){
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// reset page
document.getElementById("resetBtn").addEventListener("click", function(){
    HTMLHeadingElement.innerHTML = "Welcome to JavaScript DOM Manipulation!";
    document.body.style.backgroundColor = "#ffffff";
    paragraph.style.fontSize = "16px";
    paragraph.style.display = "block";
    input.value = "";
});