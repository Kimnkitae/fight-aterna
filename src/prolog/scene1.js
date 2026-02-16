export const Prolog = () => {

    loadSprite("bgd-hospital", "sprites/prolog/background/hospital.png");
    loadSprite("floor-hospital", "sprites/prolog/background/hospital-floor.png");
    loadSprite("left-wall-hospital", "sprites/prolog/background/hospital-left-wall.png");
    loadSprite("right-wall-hospital", "sprites/prolog/background/hospital-right-wall.png");
    
    /* PLAYER */
    loadSprite("main-character", "sprites/main-character/idle/idle.png");
    loadSprite("player-walk", "sprites/main-character/walk/Walk.png", {
        sliceX: 1,
        sliceY: 7,
        anims: {

            walkD: {from: 0, to: 6, loop: true },
        },
    });

    scene("scene1", () => {

        const hospital = add([
            sprite("bgd-hospital"),
        ]);

        const hospital_floor = add([
            sprite("floor-hospital"),
            pos(0, 950),
            area(),
            fixed(),
            body({ isStatic: true }),
        ]);

        const hospital_left_wall = add([
            sprite("left-wall-hospital"),
            pos(0, 225),
            area(),
            fixed(),
            body({ isStatic: true }),
        ]);

        const hospital_right_wall = add([
            sprite("right-wall-hospital"),
            pos(1800, 260),
            area(),
            fixed(),
            body({ isStatic: true }),
        ]);

        /* PLAYER */
        
        const player = add([
            sprite("main-character"),
            pos(600,618),
            "player",
        ]);

        const WalkPlayer = (key) => {
            if(key == "d" || key == "в") {
                player.move(2000, 0);
                player.play("walkD");

            }
        }


        onKeyPress((key) => {
            WalkPlayer(key);
        })
    });
};