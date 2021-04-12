var buttonObj=document.querySelectorAll('button')
var audios= document.querySelectorAll("audio")

(function(){    
    document.addEventListener('keydown', function(event){
        // console.log(event)
        if ("ASDFGHJKL".includes(event.key.toUpperCase())){
            buttonsResizeAndStopMusic(buttonObj);
            singleButtonResizeAndPlay(event.key.toUpperCase());
        } 
    })
})()

function buttonsResizeAndStopMusic(buttons){
    for(const button of buttons){
        button.classList.remove("runs")
    }
    for (const audio of audios) {   
        audio.pause()
        audio.currentTime=0
    }
}

function singleButtonResizeAndPlay(key){
    for (var button of buttonObj)
    if (key==button.textContent.split("\n")[1].trim()) {
        button.classList.add("runs");
    }
    for (var audio of audios){
        if(audio.id==key) audio.play()
    }
}