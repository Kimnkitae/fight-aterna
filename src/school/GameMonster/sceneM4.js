export const SceneM4 = () => {
    scene("scenem4", () => {
        const phone = add([
            sprite("Phone"),
        ])

        const background = add([
            sprite("background3", {
                width: 700,
                height: 400,
            }),
            pos(600, 240),
        ])

        const player = add([
            sprite("player-right", {
                width: 80,
                height: 80,
            }),
            pos(600, 420),
            area(),
            body(),
            "player",
        ])

        const grandpa = add([
            sprite("grandpa", {
                width: 80,
                height: 80,
            }),
            pos(950, 350),
        ])

        const razorA = add([
            sprite("razorA", {
                width: 80,
                height: 80,
            }),
            pos(1000, 420),
        ])

        const tForm = add([
            sprite("text-form", {
                width: 700,
                height: 300,
            }),
            pos(600, 320),
        ])

         const texts = [
            "Гароу: Кто ты?",
            "?: Неважно...",
            "Гароу: Почему ты убил этого старика?",
            "?: Потому что я могу",
            "Гароу: Как будущий великий мечник, ты станешь моим первым препятствием, атакуй!",
            "?: Я...убью..тебя",
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
                go("scenem5")
            }
        }

        onKeyPress(["space", "enter"], nextText)
        onClick(nextText)
    })
}