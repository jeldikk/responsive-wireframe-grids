console.log("this works only new new webbrowsers");

let toggleButton = document.getElementById("toggle-btn");
let slidingElement = document.getElementById("side-menu");
let isOpen = false;

function MobileDeviceToggleHandler(event){
    // console.log({isOpen})
    console.log("Handling Mobile Devices")
    if(isOpen){
        // console.log(slidingElement.style.width)
        // slidingElement.style.width = "0px";
        slidingElement.className = "item item-c";
        isOpen = !isOpen;
    }
    else{
        // slidingElement.style.width = "200px";
        slidingElement.className = "item item-c show-side-bar"
        isOpen = !isOpen;
    }
}

function TabletDeviceToggleHandler(event){
    console.log("handling Tablet Devices");
    let container = document.getElementsByClassName("container")[0];
    if(isOpen){
        container.className = "container"
        // slidingElement.className = "item item-c"
        isOpen = !isOpen
    }
    else{
        container.className = "container show-side-bar";
        // slidingElement.className = "item item-c show-side-bar"
        isOpen = !isOpen
    }
    // console.log({container})
}


window.addEventListener('resize', (event)=>{
    // console.log("window is resized");
    // console.log(`screen size is ${window.innerHeight}, ${window.innerWidth}`);
    const {innerWidth} = window;
    if(innerWidth <= 768){
        toggleButton.removeEventListener('click', TabletDeviceToggleHandler)
        toggleButton.addEventListener('click', MobileDeviceToggleHandler);
    }
    else if(769 <= innerWidth && innerWidth <= 992){
        //console.log("You are on laptop thing")
        //toggleButton.removeEventListener('click', MobileDeviceToggleHandler)
        // if(innerWidth <= 771){
        //     toggleButton.removeEventListener('click', MobileDeviceToggleHandler)
        // }
        toggleButton.removeEventListener('click', MobileDeviceToggleHandler);
        toggleButton.addEventListener('click', TabletDeviceToggleHandler);
    }
})

// toggleButton.addEventListener('click', MobileDeviceToggleHandler);
// toggleButton.addEventListener('click', TabletDeviceToggleHandler);

if(window.innerWidth < 768){
    toggleButton.addEventListener('click', MobileDeviceToggleHandler);
}
else if(769<= window.innerWidth && window.innerWidth <= 992){
    toggleButton.addEventListener('click', TabletDeviceToggleHandler);
}