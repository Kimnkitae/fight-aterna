export const School = () => {

    loadSprite("placeholder", "sprites/placeholderText/placeholder.png")
    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")
    loadSprite("school", "sprites/school/school.png")


    scene("scene3", () => {

        const school = add([
            sprite("school"),
        ])
            
        const textGame = 
            [
                "— Черт...Надо отвлечься",
                "— Хм...",
                "— Поиграю в игру, которая сейчас очень популярна",
                "— Кажется, называется Monster",
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
                    go("scene4")
                }
            }
            onKeyPress(["space", "enter"], nextText)
            onClick(nextText)
    })
}