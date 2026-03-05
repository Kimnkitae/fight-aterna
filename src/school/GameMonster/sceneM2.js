export const SceneM2 = () => {
    scene("scenem2", () => {
        const phone = add([
            sprite("Phone"),
        ])

        const theme1 = play("theme1")

        theme1.play()
        const background1Wall = add([
            sprite("background2Wall", {
                width: 750,
                height: 340,
            }),
            pos(580, 250),
        ])

        const background1WallLeft = add([
            sprite("background2Wall-left", {
                width: 25,
                height: 340,
            }),  
            pos(560, 240),
            area(),
            body({ isStatic: true }),
        ])

        const background1WallRight = add([
            sprite("background2Wall-right", {
                width: 25,
            }),  
            pos(1320, 240),
            fixed(),
            area(),
            body({ isStatic: true }),
        ])

        const background1WallTop = add([
            sprite("background2Wall-top", {
                height: 25,
                width: 750,
            }),  
            pos(580, 240),
            area(),
            body({ isStatic: true }),
        ])

        const background1WallDown = add([
            sprite("background2Wall-down", {
                width: 750,
                height: 25,
            }),  
            pos(560, 570),
            area(),
            body({ isStatic: true }),
        ])

        const background1Door = add([
            sprite("background2Door", {
                width: 100,
                height: 25,
            }), 
            pos(1225, 570), 
            body({ isStatic: true }),
            area(),
            "Door"
        ])

        const player = add([
            sprite("player", {
                width: 80,
                height: 80,
            }),
            pos(600, 300),
            area(),
            body(),
            "player",
        ])
        
        onKeyPress(["s", "ы"], () => {
            player.move(0, 2000)
            player.play("walkS")
        })
        onKeyPress(["w", "ц"], () => {
            player.move(0, -2000)
            player.play("walkW")
        })
        onKeyPress(["a", "ф"], () => {
            player.move(-2000, 0)
            player.play("walkA")
        })
        onKeyPress(["d", "в"], () => {
            player.move(2000, 0)
            player.play("walkD")
        })
        player.onCollide("Door", () => {
            theme1.stop()
            go("scenem3")
        })
    })
}