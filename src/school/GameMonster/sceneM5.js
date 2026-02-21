export const SceneM5 = () => {

    loadSprite("Phone", "sprites/MonsterGame/sprites/school/schoolGame.png")
    loadSprite("fighting", "sprites/MonsterGame/vsRazor/vsRazorAnimation.png", {
        sliceX: 4,
        anims: {
            start: {from: 0, to: 3, loop: true },
        }
    })

    loadSprite("background5", "sprites/MonsterGame/scene4/background/background.png");
    loadSprite("grandpa", "sprites/MonsterGame/scene4/grandfather/grandfather-died.png");
    loadSprite("flash", "sprites/MonsterGame/scene5/flesh.png");
    loadSprite("game-over", "sprites/MonsterGame/vsRazor/gameover.png");
    loadSprite("btn-a", "sprites/MonsterGame/buttonsBattle/btn-a.png");
    loadSprite("btn-b", "sprites/MonsterGame/buttonsBattle/btn-b.png");
    loadSprite("btn-c", "sprites/MonsterGame/buttonsBattle/btn-c.png");
    loadSprite("btn-d", "sprites/MonsterGame/buttonsBattle/btn-d.png");
    loadSprite("btn-e", "sprites/MonsterGame/buttonsBattle/btn-e.png");
    loadSprite("btn-f", "sprites/MonsterGame/buttonsBattle/btn-f.png");
    loadSprite("btn-g", "sprites/MonsterGame/buttonsBattle/btn-g.png");
    loadSprite("btn-h", "sprites/MonsterGame/buttonsBattle/btn-h.png");
    loadSprite("btn-i", "sprites/MonsterGame/buttonsBattle/btn-i.png");
    loadSprite("btn-j", "sprites/MonsterGame/buttonsBattle/btn-j.png");
    loadSprite("btn-k", "sprites/MonsterGame/buttonsBattle/btn-k.png");
    loadSprite("btn-l", "sprites/MonsterGame/buttonsBattle/btn-l.png");
    loadSprite("btn-m", "sprites/MonsterGame/buttonsBattle/btn-m.png");
    loadSprite("btn-n", "sprites/MonsterGame/buttonsBattle/btn-n.png");
    loadSprite("btn-o", "sprites/MonsterGame/buttonsBattle/btn-o.png");
    loadSprite("btn-p", "sprites/MonsterGame/buttonsBattle/btn-p.png");
    loadSprite("btn-q", "sprites/MonsterGame/buttonsBattle/btn-q.png");
    loadSprite("btn-r", "sprites/MonsterGame/buttonsBattle/btn-r.png");
    loadSprite("btn-s", "sprites/MonsterGame/buttonsBattle/btn-s.png");
    loadSprite("btn-t", "sprites/MonsterGame/buttonsBattle/btn-t.png");
    loadSprite("btn-u", "sprites/MonsterGame/buttonsBattle/btn-u.png");
    loadSprite("btn-v", "sprites/MonsterGame/buttonsBattle/btn-v.png");
    loadSprite("btn-w", "sprites/MonsterGame/buttonsBattle/btn-w.png");
    loadSprite("btn-x", "sprites/MonsterGame/buttonsBattle/btn-x.png");
    loadSprite("btn-y", "sprites/MonsterGame/buttonsBattle/btn-y.png");
    loadSprite("btn-z", "sprites/MonsterGame/buttonsBattle/btn-z.png");
    loadSound("theme2", "sprites/MonsterGame/Music/theme2.mp3");

    scene("scenem5", () => {
        const phone = add([
            sprite("Phone"),
        ])

        const theme2 = play("theme2", {
            volume: 0.4,
        });

        theme2.play();

        const background = add([
            sprite("background5"),
            pos(0, 0),
        ])

        const fightingScene = add([
            sprite("fighting"),
            pos(400, 400),
        ])

        const grandpa = add([
            sprite("grandpa"),
            pos(500, 200),
        ]);

        fightingScene.play("start");


        const waitingAnswers = [
            'p', 'x', 'q', 'm', 'a', 'l', 'c', 'o', 'b', 'z', 
            'k', 'v', 'w', 'n', 's', 'u', 'g', 'y', 'd', 'r', 
            'j', 'e', 'i', 't', 'f', 'h', 'p', 'z', 'm', 'q', 
            'l', 'x', 'o', 'c', 'v', 'a', 'n', 'w', 's', 'k', 
            'u', 'b', 'y', 'g', 'r', 'd', 't', 'j', 'e', 'i',
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
                sprite(currentButtonSprite),
                pos(rand(400, 800), rand(400, 500)),
            ]);

            Timer = wait(2, () => {
                destroy(currentButton);
                go("sceneLose");
                theme2.stop();
            });

        };
        
        const CheckButton = (key) => {
            if(key == waitingAnswers[currentIndex]) {
                Timer.cancel();
                loadBean(),
                shake(5),
                currentIndex++;
                destroy(currentButton);
                CreateButton();
                console.log("next button");
            }

            else {
                go("sceneLose");
                theme2.stop(); 
            };
        };

        CreateButton();
        
        
        /* onKeyPress("enter", "space")
           onKeyPress((key) => {
            }) */
        onKeyPress((key) => {
            CheckButton(key);
        });
        
    })
}