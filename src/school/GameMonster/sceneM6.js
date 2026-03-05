export const SceneM6 = () => {
    scene("scenem6", () => {
        const phone = add([
            sprite("Phone"),
        ])
        const texts = [
            "Я проиграл?",
        ]

        let entTextIndex = 0;

        const dialogText = add([
            text(texts[0],
                {
                    width: 900,
                    size: 12,
                    font: "VMVSegaGenesis", 
                }
            ),
            pos(580, 560),
        ])

        const nextText = () => {
            entTextIndex++
            if (entTextIndex < texts.length) {
                dialogText.text = texts[entTextIndex]
            } else {
                go("scenem7")
            }
        }

        onKeyPress(["space", "enter"], nextText)
        onClick(nextText)
    })
}