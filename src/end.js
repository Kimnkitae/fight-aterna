export const End = () => {

    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")
    loadSprite("end-bgd", "sprites/menu/menu-start-warning.png")

    scene("end", () => {

        const bgd = add([
            sprite("end-bgd"),
        ])

        const tex = add([
            pos(550, 500),
            text("Продолжение следует...", {
                size: 40,
                font:"VMVSegaGenesis",
            }),
        ])
        
        const support = add([
            text("Нажмите R, чтобы вернуться в главное меню", {
                size: 24,
                font:"VMVSegaGenesis",
            }),
        ])
    })
}