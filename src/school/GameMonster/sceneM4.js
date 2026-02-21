export const SceneM4 = () => {

    loadSprite("Phone", "sprites/school/schoolGame.png")
    loadSprite("player", "sprites/MonsterGame/player/playerSprite.png", {
        sliceX: 7,
        sliceY: 4,
        anims: {
            walkS: {from: 0, to: 5, loop: true },
            walkW: {from: 7, to: 13, loop: true },
            walkD: {from: 14, to: 19, loop: true },
            walkA: {from: 21, to: 26, loop: true },
        },
    })

    loadSprite("grandpa", "sprites/MonsterGame/scene4/grandfather/grandfather-died.png")
    loadSprite("grandpa", "sprites/MonsterGame/scene4/grandfather/grandfather-died.png")
    
    loadSprite("background3", "scene4/background/background.png")
    loadSprite("background3", "sprites/MonsterGame/scene4/background/background.png")
    loadSprite("razorA", "sprites/MonsterGame/Razor/razorA.png")
    loadSprite("razorA", "sprites/MonsterGame/Razor/razorA.png")
    loadSprite("player-right", "sprites/MonsterGame/player/right/right-walk.png")
    loadSprite("player-right", "sprites/MonsterGame/player/right/right-walk.png")
    loadSprite("text-form", "sprites/MonsterGame/scene1/text/text-form.png")
    loadSprite("text-form", "sprites/MonsterGame/scene1/text/text-form.png")
    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")

    scene("scenem4", () => {
        const phone = add([
            sprite("Phone"),
        ])

        const background = add([
            sprite("background3", {
                width: 700,
                height: 400,
            }),
            pos(600, 240),
        ])

        const player = add([
            sprite("player-right", {
                width: 80,
                height: 80,
            }),
            pos(600, 420),
            area(),
            body(),
            "player",
        ])

        const grandpa = add([
            sprite("grandpa", {
                width: 80,
                height: 80,
            }),
            pos(950, 350),
        ])

        const razorA = add([
            sprite("razorA", {
                width: 80,
                height: 80,
            }),
            pos(1000, 420),
        ])

        const tForm = add([
            sprite("text-form", {
                width: 700,
                height: 300,
            }),
            pos(600, 320),
        ])


         const texts = [
            "Garou: Who are you?",
            "?: Don't care..",
            "Garou: Why did you killed that old man?",
            "?: Because I can",
            "Garou: As a future great swordsman, you will become my first obstacle, attack!",
            "?: I...kill..you",
        ]

        let entTextIndex = 0;

        const dialogText = add([
            text(texts[0],
                {
                    width: 600,
                    size: 12,
                    font: "VMVSegaGenesis", 
                }
            ),
            pos(650, 570),

        ])

        const nextText = () => {

            entTextIndex++
            if (entTextIndex < texts.length) {
                dialogText.text = texts[entTextIndex]
            } else {
                go("scenem5")
            }
        }

        onKeyPress(["space", "enter"], nextText)
        onClick(nextText)
        
    })
}