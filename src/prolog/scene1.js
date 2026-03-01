import { Dialog } from "../utils/dialog.js"
import { WalkPlayer } from "../utils/walkplayer.js"
export const Prolog = () => {

    loadSprite("bgd-hospital", "sprites/prolog/background/hospital.png")
    loadSprite("floor-hospital", "sprites/prolog/background/hospital-floor.png")
    loadSprite("left-wall-hospital", "sprites/prolog/background/hospital-left-wall.png")
    loadSprite("right-wall-hospital", "sprites/prolog/background/hospital-right-wall.png")
    loadSprite("hospital-grandfather", "sprites/prolog/background/hospital-grandfather.png")
    loadSprite("button-e", "sprites/prolog/BUTTON/e/button-e.png", {
        sliceX: 10,
        sliceY: 1,
        anims: {
            animation: {from: 0, to: 9, loop: true}
        }
    })
    loadSprite("placeholder", "sprites/placeholderText/placeholder.png")

    /* SOUNDS */
    loadSound("player-walk-sound", "Sounds/player/walk.mp3")
    loadSound("hospital-bgd-sound", "Sounds/hospital/nature.mp3")
    loadSound("air-conditioner", "Sounds/hospital/air-conditioner.mp3")
    /* FONTS */

    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")
    
    /* PLAYER */

    const hospitalSound = play("hospital-bgd-sound", {
        loop: true,
        volume: 0.4,
    })
    const hospitalSound2 = play("air-conditioner", {
        loop: true,
        volume: 0.1,
    })

    
    loadSprite("player1", "sprites/main-character/player.png", {
        sliceX: 9,
        sliceY: 1,
        anims: {

            idle: {from: 0, to: 0},

            walkD: {from: 1, to: 8, loop: true, speed: 10},
        },
    })

    hospitalSound.play()
    hospitalSound2.play()

    scene("scene1", () => {

        const hospital = add([
            sprite("bgd-hospital"),
        ])

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

        let currentAnim = "idle"
        let TextIndex = 0

        const mainCharacter = add([
            sprite("player1"),
            pos(600,618),
            area(),
            body(),
            "player"
        ])

        onUpdate(() => {
            Dialog("player", "grandpa", textWithPa, "scene2")
        })
        onKeyDown((key) => {
            WalkPlayer(mainCharacter, key, currentAnim)
        })

        const textWithPa = [
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

        
        

    })
}