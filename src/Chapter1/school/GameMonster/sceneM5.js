export const SceneM5 = () => {
    scene("scenem5", () => {
        const phone = add([
            sprite("Phone"),
        ])

        const theme2 = play("theme2", {
            volume: 0.2,
        });

        theme2.play();

        const background = add([
            sprite("background5", {
                width: 700,
                height: 400,
            }),
            pos(600, 240),
        ])

        const fightingScene = add([
            sprite("fighting", {
                width: 80,
                height: 80,
            }),
            pos(800, 400),
        ])

        const grandpa = add([
            sprite("grandpa", {
                width: 80,
                height: 80,
            }),
            pos(950, 350),
        ]);

        fightingScene.play("start");


        const waitingAnswers = [
            'z','q','p','x','m','t','a','r','w','k',
            'e','o','y','b','n','d','i','s','g','h',
            'u','c','f','j','l','z','x','m','v','t',
            'k','r','e','p','w','y','a','n','s','o',
            'd','q','x','l','b'
        ];

        let currentIndex = 0;
        let currentButton = null;
        let Timer = null;

        const CreateButton = () => {
            console.log("Запуск успешен про чекбатон");

            if(currentIndex >= waitingAnswers.length) {
                const FlashImg = add([
                    sprite("flash"),
                ])
                go("scenem6");
                theme2.stop();
                return;
            }

            let currentButtonSprite = "btn-" + waitingAnswers[currentIndex];

            currentButton = add([
                sprite(currentButtonSprite, {
                    width: 100,
                    height: 100,
                }),
                pos(rand(600, 1000), rand(400, 500)),
            ]);

            Timer = wait(3, () => {
                destroy(currentButton);
                go("scenemlose");
                theme2.stop();
            });

        };
        
        const CheckButton = (key) => {
            if(key == waitingAnswers[currentIndex]) {
                Timer.cancel();
                shake(5),
                currentIndex++;
                destroy(currentButton);
                CreateButton();
            }

            else {
                go("scenemlose");
                theme2.stop(); 
            };
        };

        CreateButton();
        onKeyPress((key) => {
            CheckButton(key);
        });
        
    })
}