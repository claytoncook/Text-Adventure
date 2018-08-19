console.log("app.js intact");

//elements
const $game = document.querySelector("#game");
const $buttons = document.querySelector("#buttons");
const $story = document.querySelector("#story-text");

//event listeners
let storyPart = 0;
$buttons.addEventListener("click", function (event) {
    if (event.target !== event.currentTarget) {
        let target = event.target;

        if (target.innerHTML === "Walk") {
            //show correct part of story
            $story.innerHTML = story[storyPart][0];
            //apply background color
            $game.style.backgroundColor = story[storyPart][1];
            $story.style.opacity = 1;
            storyPart++;
        }
        console.log(target.innerHTML);
    }
    event.stopPropagation();
}, false);