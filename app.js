console.log("app.js intact");

//elements
const $game = document.querySelector("#game");
const $story = document.querySelector("#story-text");
const $buttons = document.querySelector("#buttons");

//start up
(() => {
    console.log(true);
})();

//event listeners
$buttons.addEventListener("click", (event) => {
    let target = event.target;
    if (target !== event.currentTarget) {

        //check if game has ended
        if (func.isActive(target)) {
            //fade out
            $story.style.opacity = 0;
            if (story.text[story.storyPart][0] === "end") {
                func.disable(target);
                //fade in
                setTimeout(() => {
                    func.show();
                }, 1000);
                console.log("The End");
            } else {
                //check if taget button is even active
                if (target.innerHTML === "Walk") {
                    //fade in
                    setTimeout(() => {
                        func.show();
                        //move to next part of story
                        story.storyPart++;
                    }, 1000);
                } else if (target.innerHTML === "Attack" && story.text[story.storyPart][0] === "battle") {
                    console.log("You attack");
                }
            }
        }
        console.log(target.innerHTML);
    }
    event.stopPropagation();
}, false);