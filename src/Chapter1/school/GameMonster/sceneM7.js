export const SceneM7 = () => {
    scene("scenem7", () => {
        const phone = add([
            sprite("Phone"),
        ])

        const background = add([
            sprite("background5", {
                width: 720,
                height: 400,
            }),
            pos(580, 240),
        ])

        const grandpa = add([
            sprite("grandpa", {
                width: 80,
                height: 80,
            }),
            pos(950, 350),
        ])

        const playerDead = add([
            sprite("player-dead", {
                width: 80,
                height: 80,
            }),
            pos(600, 400),
        ])

        const tForm = add([
            sprite("text-form", {
                width: 700,
                height: 300,
            }),
            pos(600, 320),
        ])
    
        const texts = [
            "...",
            "продолжение следует...",
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
    
                go("scene5")
            }
        }

        onKeyPress(["space", "enter"], nextText)
        onClick(nextText)
        
    })
}