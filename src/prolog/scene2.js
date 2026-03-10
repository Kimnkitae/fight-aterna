import { WalkPlayer } from "../utils/walkplayer.js"
export const Prolog2 = () => {
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
        
       let currentAnim = {
            anim: "idle"
        }
        
        const mainCharacter = add([
            sprite("player1"),
            pos(1380,618),
            area(),
            body(),
            "player"
        ])
        
        onKeyDown((key) => {
            WalkPlayer(mainCharacter,key, currentAnim)
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