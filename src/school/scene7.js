export const SchoolAttack3 = () => {

    loadSprite("school-fight", "sprites/school/school-night.png")
    
    

    scene("scene7", () => {
        const school = add([
            sprite("school-fight"),
        ])
        

        const textGame = 
            [
                "— Что мне делать?",
                
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
                    go("scene8")
                }
            }
            onKeyPress(["space", "enter"], nextText)
            onClick(nextText)
    })
}