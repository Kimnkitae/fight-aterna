export const SchoolAttack2 = () => {
    scene("scene6", () => {
        const school = add([
            sprite("school-window-monster"),
        ])

        const textGame = 
            [
                "— ...",
                "— !!!",
                "— Он меня заметил!!!! Нужно прятаться!",
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
                    go("scene7")
                }
            }
            
            onKeyPress(["space", "enter"], nextText)
            onClick(nextText)
    })
}