export const SchoolAttack = () => {

    loadSprite("school2", "sprites/school/school-night.png")
    loadSound("hospital-bgd-sound", "Sounds/hospital/nature.mp3")

    scene("scene5", () => {
        const school = add([
            sprite("school2"),
        ])

        const hospitalSound = play("hospital-bgd-sound", {
            loop: true,
            volume: 0.4,
        })
        
        hospitalSound.play()

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

                } 
                else if(TextIndex >= 2) {
                    hospitalSound.stop()
                }

                else {
                    go("scene4")
                }
            }
            onKeyPress(["space", "enter"], nextText)
            onClick(nextText)
    })
}
