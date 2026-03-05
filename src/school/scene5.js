export const SchoolAttack = () => {
    scene("scene5", () => {
        const school = add([
            sprite("school2"),
        ])
        const textGame = 
            [
                "— Фух, наконец прошел, интересная игрушка",
                "— Ой, уже стемнело",
                "— Что это?",
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
                    go("scene6")
                }
            }
            onKeyPress(["space", "enter"], nextText)
            onClick(nextText)
    })
}
