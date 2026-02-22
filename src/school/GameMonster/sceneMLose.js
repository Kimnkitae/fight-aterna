export const SceneMLose = () => {

    loadSprite("Phone", "sprites/school/schoolGame.png")
     loadSprite("game-over", "sprites/MonsterGame/vsRazor/gameover.png")
     loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")

    scene("scenemlose", () => {
        const phone = add([
            sprite("Phone"),
        ])
        
        const GameOver = add([
            sprite("game-over", {
                width: 720,
                height: 400,
            }),
            pos(600, 240),
        ]);

        const R = add([
            text("Нажмите R чтобы начать снова", {
                font: "VMVSegaGenesis",
                size: 12,
            }),
            pos(600, 240),
        ])

        const restartgame = () => {
            go("scenem5")
        }

        /* Dont work */
        onKeyPress("r", () => {
            restartgame()
        })
    })
}