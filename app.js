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
    if (event.target !== event.currentTarget) {
        let target = event.target;
        $story.style.opacity = 0;

        if (target.innerHTML === "Walk") {
            story.storyPart++;
        } else if (target.innerHTML === "Attack") {
            console.log("You attack");
        }

        setTimeout(() => {
            //show correct part of story
            $story.innerHTML = story.text[story.storyPart][1];
            //apply background color
            $game.style.backgroundColor = story.text[story.storyPart][2];
            $story.style.opacity = 1;
        }, 1000);
        console.log(target.innerHTML);
    }
    event.stopPropagation();
}, false);