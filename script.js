let multiPlt = document.querySelector("#multi-plt");
let multiPlatformDiv = document.querySelector(".multi-platform-dev");

multiPlt.addEventListener("mouseenter", function(){
    multiPlatformDiv.style.opacity = 1;
    // multiPlatformDiv.style.scale = 1;
    multiPlatformDiv.style.transform = "translateY(0%)";
});

multiPlt.addEventListener("mouseleave", function(){
    multiPlatformDiv.style.opacity = 0;
    // multiPlatformDiv.style.scale = 0.9;
    multiPlatformDiv.style.transform = "translateY(-7%)";
});
