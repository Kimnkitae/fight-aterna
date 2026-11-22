export const SceneM3 = () => {
    scene("scenem3", () => {
        const phone = add([
            sprite("Phone"),
        ])

         const Collide = add([
            sprite("Collide", {
                width: 10,
                height: 400,
            }),
            pos(1320, 240),
            body(),
            area(),
            "Collide",
        ]) 

        const blockTop = add([
            sprite("blockTop"),
            pos(580, 360),
            area(),
            body({ isStatic: true}),
        ])

        const blockDown = add([
            sprite("blockBottom"),
            pos(580, 600),
            area(),
            body({ isStatic: true}),
        ])

        const blockLeft = add([
            sprite("blockLeft"),
            pos(580, 250),
            area(),
            body({ isStatic: true}),
        ])

        const background = add([
            sprite("background3", {
                width: 750,
                height: 400,
            }),
            pos(580, 240),
        ])

        const player = add([
            sprite("player", {
                width: 80,
                height: 80,
            }),
            pos(600, 400),
            area(),
            body(),
            "player",
        ])
        
        onKeyPress(["s", "ы"], () => {
            player.move(0, 2000)
            player.play("walkS")
        })
        onKeyPress(["w", "ц"], () => {
            player.move(0, -2000);
            player.play("walkW");
        })
        onKeyPress(["a", "ф"], () => {
            player.move(-2000, 0);
            player.play("walkA");
        })
        onKeyPress(["d", "в"], () => {
            player.move(2000, 0);
            player.play("walkD");
        })

        player.onCollide("Collide", () => {
            go("scenem4");  
        })
    })
}