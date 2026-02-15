export const Prolog = () => {

    loadSprite("bgd-hospital", "sprites/prolog/background/hospital.png");
    loadSprite("main-character", "sprites/main-character/idle/idle.png");
    scene("scene1", () => {

        const background = add([
            sprite("bgd-hospital"),
        ])

        const Player = add([
            sprite("main-character"),
            pos(600,618),
        ]);
    });
};