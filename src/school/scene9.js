export const SchoolAttack5 = () => {
    
    scene("scene9", () => {
        const bgd = add([
            sprite("schoolMeet"),
        ])

        const textGame = 
            [
                "— Чёрт..",
            ]

            let TextIndex = 0

            const placeholderText = add([
                sprite("placeholder"),
            ])

            const dialogText = add([
                text(textGame[0], 
                    {
                        width: 1920,
                        size: 24,
                        font: "VMVSegaGenesis",
                    }
                ),
                pos(20, 1000),
            ])
               
            const nextText = () => {
                TextIndex++
                if(TextIndex < textGame.length) {
                    dialogText.text = textGame[TextIndex]

                } else {
                    go("scene10")
                }
            }
            onKeyPress(["space", "enter"], nextText)
            onClick(nextText)
    })
}