export const Prolog2 = () => {

    loadSprite("bgd-hospital2", "sprites/prolog/background/hospital2.png")
    loadSprite("floor-hospital", "sprites/prolog/background/hospital-floor.png")
    loadSprite("left-wall-hospital", "sprites/prolog/background/hospital-left-wall.png")
    loadSprite("right-wall-hospital", "sprites/prolog/background/hospital-right-wall.png")
    loadSprite("hospital-call", "sprites/prolog/background/hospital-call.png")
    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")
    loadSprite("placeholder2", "sprites/placeholderText/placeholder2.png")
    loadSound("hospital-bgd-sound", "Sounds/hospital/nature.mp3")
    loadSprite("hospital-grandfather", "sprites/prolog/background/hospital-grandfather.png")
    loadSprite("button-e", "sprites/prolog/BUTTON/e/button-e.png", {
        sliceX: 10,
        sliceY: 1,
        anims: {
            animation: {from: 0, to: 9, loop: true}
        }
    })

    /* SOUNDS */
    loadSound("player-walk-sound", "Sounds/player/walk.mp3")
    loadSound("hospital-bgd-sound", "Sounds/hospital/nature.mp3")
    
    /* PLAYER */

    
    loadSprite("player1", "sprites/main-character/player.png", {
        sliceX: 9,
        sliceY: 1,
        anims: {
            
            idle: {from: 0, to: 0},
            
            walkD: {from: 1, to: 8, loop: true, speed: 10},
        },
    })
    
    scene("scene2", () => {

        
        const hospital = add([
            sprite("bgd-hospital2"),
        ])
        
        const hospitalFloor = add([
            sprite("floor-hospital"),
            pos(0, 950),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])
        
        const hospitalLeftWall = add([
            sprite("left-wall-hospital"),
            pos(0, 225),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])
        
        const hospitalright_wall = add([
            sprite("right-wall-hospital"),
            pos(1800, 260),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])
        
        const hospitalDed = add([
            sprite("hospital-grandfather"),
            pos(1480, 700),
            "grandpa",
        ])
        
        const call = add([
            sprite("hospital-call"),
            pos(156.5, 585),
            area(),
            "call"
        ])

        /* PLAYER */
        const playerWalk = play("player-walk-sound", {
            paused: true,
            loop: true
        })
        
        let currentAnim = "idle"
        
        const mainCharacter = add([
            
            sprite("player1"),
            pos(1380,618),
            area(),
            body(),
            "player"
        ])

        
        
        const WalkPlayer = (key) => {
            if(key == "d" || key == "в") {
                mainCharacter.flipX = false
                mainCharacter.move(200, 0)
                if(currentAnim !== "walkD") {
                    mainCharacter.play("walkD")
                    currentAnim = "walkD"
                }
            }
            if(key == "a" || key == "ф") {
                mainCharacter.flipX = true
                mainCharacter.move(-200, 0)
                if(currentAnim !== "walkD") {
                    mainCharacter.play("walkD")
                    currentAnim = "walkD"
                }
            }
        }

        onKeyRelease(["d", "в"], () => {
            mainCharacter.play("idle")
            currentAnim = "idle"
        })
        
        onKeyRelease(["a", "ф"], () => {
            mainCharacter.play("idle")
            currentAnim = "idle"
        })
        
        onKeyDown((key) => {
            WalkPlayer(key)
        })

        const labelText = mainCharacter.add([
            sprite("placeholder2", {
                width: 300,
                height: 50,
            }),
            pos(-100, -30),
        ])
    
        const label = mainCharacter.add([
            text("(Надо сообщить о смерти деда...)",
                 {
                    width: 300,
                    size: 16,
                    font: "VMVSegaGenesis"
                 }),
            pos(-100, -30),
        ])
    
    
        wait(2, () => {
            destroy(label)
            destroy(labelText)
        })

         const DialogWithMed = onCollide("player", "call", () => {
            console.log("collided")
            const e = add([
                sprite("button-e"),
                pos(220, 520),
            ])
            e.play("animation")
            onCollideEnd("player", "call", () => {
                destroy(e)
            })
            
            onKeyPress(["e", "у"], () => {

                
                destroy(e)
                
                const textWithPa = 
                [
                    "Вы что-то хотели?",
                    "— Дед... он...",
                    "— умер...",
                ]

                let TextIndex = 0

                const placeholderText = add([
                    sprite("placeholder"),
                ])

                const dialogText = add([
                    text(textWithPa[0], 
                        {
                            width: 1920,
                            size: 20,
                            font: "VMVSegaGenesis",
                        }
                    ),
                    pos(20, 1000),
                ])
                
                const nextText = () => {
                    TextIndex++
                    if(TextIndex < textWithPa.length) {
                        dialogText.text = textWithPa[TextIndex]

                    } else {
                        go("scene3")
                    }
                }
                onKeyPress(["space", "enter"], nextText)
                onClick(nextText)
            })
        })
    })
}