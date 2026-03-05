import { Dialog } from "../utils/dialog.js"
import { WalkPlayer } from "../utils/walkplayer.js"
export const Prolog = () => {
    scene("scene1", () => {

        const hospital = add([
            sprite("bgd-hospital"),
        ])
        
        const hospitalSound = play("hospital-bgd-sound", {
            loop: true,
            volume: 0.4,
        })
        
        const hospitalSound2 = play("air-conditioner", {
            loop: true,
            volume: 0.1,
        })
        hospitalSound.play()
        hospitalSound2.play()

        const hospitalFloor = add([
            sprite("floor-hospital"),
            pos(0, 950),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])

        const hospitalLeftWall = add([
            sprite("left-wall-hospital"),
            pos(0, 225),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])

        const hospitalright_wall = add([
            sprite("right-wall-hospital"),
            pos(1800, 260),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])
        
        const hospitalDed = add([
            sprite("hospital-grandfather"),
            pos(1480, 700),
            area(),
            body(),
            body({ isStatic: true}),
            "grandpa",
        ])
        
        /* PLAYER */

        const mainCharacter = add([
            sprite("player1"),
            pos(600,618),
            area(),
            body(),
            "player"
        ])
        
        /* How to move */

        const textHowToMove = add([
            color(0,0,0),
            text("Управление", {
                font: "VMVSegaGenesis",
            }),
            pos(200, 100)
        ])
        
        const buttonsHowToMove = add([
            sprite("howToMove"),
            pos(220, 150)
        ])

        buttonsHowToMove.play("animation")
        
        const textHowToClick = add([
            color(0,0,0),
            text("Взаимодействие", {
                font: "VMVSegaGenesis",
            }),
            pos(800, 100)
        ])
        
        const buttonsHowToClick = add([
            sprite("howToClick"),
            pos(1000, 150)
        ])
        buttonsHowToClick.play("animation")
        
        let currentAnim = {
            anim: "idle"
        }

        onKeyDown((key) => {
            WalkPlayer(mainCharacter, key, currentAnim)
        })
        
        let entTextIndex = 0
        const texts = [
            "— Привет, дед. Я пришёл. Мама просила передать, что завтра принесёт бульон, но я... я просто хотел заглянуть пораньше.",
            "Привет, малый. Проходи, не стой в дверях, а то сквозняк ворует мои последние силы. Садись ближе.",
            "— Как ты сегодня? Врачи говорят, показатели в норме, но ты какой-то... слишком тихий.",
            "Врачи видят цифры, Сёва. А я вижу, как солнце садится. Красиво сегодня, правда? Золотое всё такое...",
            "— Да, на улице тепло. Скоро выпишут, пойдём в парк. Помнишь, как ты меня в детстве учил костры жечь без спичек?",
            "Помню. Ты тогда чуть брови себе не спалил. Слушай меня внимательно, внук. Ты ведь в последнее время... ничего странного не замечал? Воздух не вибрирует? Тени не кажутся гуще, чем должны быть?",
            "— Нет... Ну, иногда кажется, что краем глаза что-то вижу, но это просто усталость. Учёба, экзамены. А что?",
            "Хорошо. Значит, замок ещё держит. Но слушай... Когда меня не станет, мир для тебя может измениться. Стать громче, страшнее, непонятнее.",
            "— Деда, ну что ты такое говоришь? Ты поправишься! Не начинай эти свои загадки.",
            "Сёва, пообещай мне одну вещь. Если завеса упадет и ты увидишь то, что скрыто от других... не закрывай глаза. Не пытайся сбежать назад в темноту. Будь сильным. И помогай слабым — тем, кто не видит врага, который стоит у них за спиной.",
            "— Я не понимаю... О каких врагах ты?",
            "Скоро поймёшь. Просто помни: ты не проклят. Ты вооружён.",
            "— Дед?",
            "— ...",
        ]

    onCollide("player", "grandpa", () => {
            const e = add([
                sprite("button-e"),
                pos(1600, 600),
            ])
            e.play("animation")
            onCollideEnd("player", "grandpa", () => {
                destroy(e)
            })
            
            onKeyPress(["e", "у"], () => {
                destroy(e)

                

                const placeholderText = add([
                    sprite("placeholder"),
                ])

                const ObjectDialogText = add([
                    text(texts[0], 
                        {
                            width: 1920,
                            size: 20,
                            font: "VMVSegaGenesis",
                        }
                    ),
                    pos(20, 1000),
                ])
                
                const nextText = () => {
                    ++entTextIndex
                    if(entTextIndex < texts.length) {

                        ObjectDialogText.text = texts[entTextIndex]
                    } else {
                        go("scene2")
                    }
                }
                
                onKeyPress(["space", "enter"], () => {
                    nextText()
                })
                onClick(nextText)
            })
        })
    })
}