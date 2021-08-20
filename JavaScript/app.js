console.log("Hi");
window.addEventListener('load',()=>{
    const sound = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#b8ceb3",
        "#a8c5e5"

    ];
    
    //Lets get going with the sound here
    pads.forEach((pads,index) =>{
        pads.addEventListener('click',function(){
            sound[index].currentTime = 0;
            sound[index].play();

            createBubbles(index);
        });
    });

    //Create a function that makes bubbles
    const createBubbles=(index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationed',function(){
            visual.removeChild(this);
        });
    }
});