console.log("data.js intact");

const data = {
    player: {
        health: 100,
        attack: 10
    },
    enemies: [
        //{name: "", health: 0, attack: 0}
        {
            name: "Zombie",
            health: 10,
            attack: 10
        },
        {
            name: "Skeleton",
            health: 10,
            attack: 10
        },
        {
            name: "Goblin",
            health: 10,
            attack: 10
        },
        {
            name: "Ent",
            health: 10,
            attack: 10
        }
    ]
}

let story = {
    storyPart: 0,
    text: [
        //blank story: ["type", "text", "rgb(219, 219, 219)"]
        ["text", "You take a few steps forward", "rgb(219, 219, 219)"],
        ["text", "The whiteness begins to fade away", "rgb(219, 255, 219)"],
        ["text", "You take a few steps forward", "rgb(210, 255, 210)"],
        ["text", "The brightness settles into a pastel of green", "rgb(200, 255, 200)"],
        ["text", "You feel a warm wetness in the air", "rgb(195, 255, 195)"],
        ["text", "You push forward", "rgb(190, 255, 190)"],
        ["text", "You hear birds chirping in the distance", "rgb(175, 255, 175)"],
        ["text", "Your vision clears", "rgb(100, 255, 100)"],
        ["text", "Trees surround you as you walk seeminglessly into a green forest", "rgb(100, 255, 100)"],
        ["battle", "An enemy approaches", "rgb(100, 255, 100)"],
        ["end", "The End", "rgb(100, 100, 100)"]
    ]
}

let func = {
    show: () => {
        //show correct part of story
        $story.innerHTML = story.text[story.storyPart][1];
        //apply background color
        $game.style.backgroundColor = story.text[story.storyPart][2];
        //fade in
        $story.style.opacity = 1;
    },
    isActive: (element) => {
        if (element.classList.contains("active-button")) {
            return true;
        } else {
            return false;
        }
    },
    activate: (element) => {
        if(element.classList.contains("disabled-button")) {
            element.classList.remove("disabled-button");
            element.classList.add("active-button");
        } else if(element.classList.contains("active-button")) {
            console.log("Already Active");
        } else {
            element.classList.add("active-button");
        }
    },
    disable: (element) => {
        if(element.classList.contains("active-button")) {
            element.classList.remove("active-button");
            element.classList.add("disabled-button");
        } else if(element.classList.contains("disabled-button")) {
            console.log("Already Disabled");
        } else {
            element.classList.add("disabled-button");
        }
    }
}