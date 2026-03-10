export const loadAssets = () => {

    /* ---------------- FONTS ---------------- */

    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")
    loadFont("StepovikSPBasic-Bold", "fonts/StepovikSPBasic-Bold.otf")


    /* ---------------- MENU ---------------- */

    loadSprite("menu-background", "sprites/menu/menu.png")
    loadSprite("settings-bgd", "sprites/menu/menu-settings-bgd.png")
    loadSprite("warning", "sprites/menu/menu-start-warning.png")

    loadSound("soundbgdMenu", "Sounds/menu/bgdMenu.mp3")
    loadSound("menuClick", "Sounds/clicks/click1.mp3")


    /* ---------------- COMMON ---------------- */

    loadSprite("placeholder", "sprites/placeholderText/placeholder.png")
    loadSprite("placeholder2", "sprites/placeholderText/placeholder2.png")

    loadSprite("Phone", "sprites/school/schoolGame.png")


    /* ---------------- PLAYER ---------------- */

    loadSprite("player1", "sprites/main-character/player.png", {
        sliceX: 9,
        sliceY: 1,
        anims: {
            idle: { from: 0, to: 0 },
            walkD: { from: 1, to: 8, loop: true, speed: 10 },
        },
    })


    /* ---------------- PROLOG / HOSPITAL ---------------- */

    loadSprite("bgd-hospital", "sprites/prolog/background/hospital.png")
    loadSprite("bgd-hospital2", "sprites/prolog/background/hospital2.png")

    loadSprite("floor-hospital", "sprites/prolog/background/hospital-floor.png")

    loadSprite("left-wall-hospital", "sprites/prolog/background/hospital-left-wall.png")
    loadSprite("right-wall-hospital", "sprites/prolog/background/hospital-right-wall.png")

    loadSprite("hospital-grandfather", "sprites/prolog/background/hospital-grandfather.png")
    loadSprite("hospital-call", "sprites/prolog/background/hospital-call.png")

    loadSprite("button-e", "sprites/prolog/BUTTON/e/button-e.png", {
        sliceX: 10,
        sliceY: 1,
        anims: {
            animation: { from: 0, to: 9, loop: true }
        }
    })

    loadSprite("howToMove", "sprites/prolog/background/helpHowtoMove.png", {
        sliceX: 3,
        sliceY: 1,
        anims: {
            animation: { from: 0, to: 2, speed: 10, loop: true }
        }
    })

    loadSprite("howToClick", "sprites/prolog/background/helpHowToClick.png", {
        sliceX: 3,
        sliceY: 1,
        anims: {
            animation: { from: 0, to: 2, speed: 10, loop: true }
        }
    })

    loadSound("hospital-bgd-sound", "Sounds/hospital/nature.mp3")
    loadSound("air-conditioner", "Sounds/hospital/air-conditioner.mp3")


    /* ---------------- PLAYER SOUNDS ---------------- */

    loadSound("player-walk-sound", "Sounds/player/walk.mp3")


    /* ---------------- SCHOOL ---------------- */

    loadSprite("school", "sprites/school/school.png")
    loadSprite("school2", "sprites/school/school-night.png")
    loadSprite("school-window-monster", "sprites/school/school-window-mosnter.png")
    loadSprite("blockSchClss", "sprites/school/blockSchoolClass.png")
    loadSprite("school-fight", "sprites/school/school-night.png")
    loadSprite("school-classroom", "sprites/school/school-fight.png")
    loadSprite("school-fight-floor", "sprites/school/school-fight-floor.png")
    loadSprite("school-koridor", "sprites/school/school-koridor.png")
    loadSprite("schoolMeet", "sprites/school/schoolMeet.png")
    loadSprite("schoolEnd", "sprites/school/schoolEnd.png")
    loadSprite("stranger", "sprites/school/stranger.png", {
        sliceX: 9,
        sliceY: 1,
        anims: {
            idle: { from: 0, to: 0 },
            walkD: { from: 1, to: 8, loop: true, speed: 10 },
        },
    })
    loadSprite("schoolEndFloor", "sprites/school/schoolEndFloor.png")

    /* ---------------- MONSTER GAME ---------------- */

    loadSprite("menu", "sprites/MonsterGame/scene0/Menu.png")
    loadSound("theme1", "sprites/MonsterGame/Music/theme1.mp3")
    loadSound("theme2", "sprites/MonsterGame/Music/theme2.mp3")
    loadSprite("text-form", "sprites/MonsterGame/scene1/text/text-form.png")

    /* PLAYER (MonsterGame) */

    loadSprite("player", "sprites/MonsterGame/player/playerSprite.png", {
        sliceX: 7,
        sliceY: 4,
        anims: {
            walkS: { from: 0, to: 5, loop: true },
            walkW: { from: 7, to: 13, loop: true },
            walkD: { from: 14, to: 19, loop: true },
            walkA: { from: 21, to: 26, loop: true },
        },
    })

    loadSprite("player-base", "sprites/MonsterGame/player/behind/behind-walk.png")
    loadSprite("player-right", "sprites/MonsterGame/player/right/right-walk.png")
    loadSprite("player-dead", "sprites/MonsterGame/scene6/player-dead.png")


    /* Scene 2 */

    loadSprite("background2Wall-left", "sprites/MonsterGame/scene2/background/background-left-wall.png")
    loadSprite("background2Wall-right", "sprites/MonsterGame/scene2/background/background-right-wall.png")
    loadSprite("background2Wall-top", "sprites/MonsterGame/scene2/background/background-top-wall.png")
    loadSprite("background2Wall-down", "sprites/MonsterGame/scene2/background/background-down-wall.png")
    loadSprite("background2Wall", "sprites/MonsterGame/scene2/background/background-wall.png")
    loadSprite("background2Door", "sprites/MonsterGame/scene2/background/background-door.png")


    /* Scene 3 */

    loadSprite("blockTop", "sprites/MonsterGame/scene3/blockTop.png")
    loadSprite("blockRight", "sprites/MonsterGame/scene3/blockRight.png")
    loadSprite("blockBottom", "sprites/MonsterGame/scene3/blockBottom.png")
    loadSprite("blockLeft", "sprites/MonsterGame/scene3/blockLeft.png")
    loadSprite("Collide", "sprites/MonsterGame/scene3/Collide.png")


    /* Scene 4 */

    loadSprite("background3", "sprites/MonsterGame/scene4/background/background.png")
    loadSprite("background5", "sprites/MonsterGame/scene4/background/background.png")

    loadSprite("grandpa", "sprites/MonsterGame/scene4/grandfather/grandfather-died.png")


    /* Boss / Razor */

    loadSprite("razorA", "sprites/MonsterGame/Razor/razorA.png")

    loadSprite("fighting", "sprites/MonsterGame/vsRazor/vsRazorAnimation.png", {
        sliceX: 4,
        anims: {
            start: { from: 0, to: 3, loop: true }
        }
    })

    loadSprite("flash", "sprites/MonsterGame/scene5/flesh.png")
    loadSprite("game-over", "sprites/MonsterGame/vsRazor/gameover.png")


    /* ---------------- BATTLE BUTTONS ---------------- */

    loadSprite("btn-a", "sprites/MonsterGame/buttonsBattle/btn-a.png")
    loadSprite("btn-b", "sprites/MonsterGame/buttonsBattle/btn-b.png")
    loadSprite("btn-c", "sprites/MonsterGame/buttonsBattle/btn-c.png")
    loadSprite("btn-d", "sprites/MonsterGame/buttonsBattle/btn-d.png")
    loadSprite("btn-e", "sprites/MonsterGame/buttonsBattle/btn-e.png")
    loadSprite("btn-f", "sprites/MonsterGame/buttonsBattle/btn-f.png")
    loadSprite("btn-g", "sprites/MonsterGame/buttonsBattle/btn-g.png")
    loadSprite("btn-h", "sprites/MonsterGame/buttonsBattle/btn-h.png")
    loadSprite("btn-i", "sprites/MonsterGame/buttonsBattle/btn-i.png")
    loadSprite("btn-j", "sprites/MonsterGame/buttonsBattle/btn-j.png")
    loadSprite("btn-k", "sprites/MonsterGame/buttonsBattle/btn-k.png")
    loadSprite("btn-l", "sprites/MonsterGame/buttonsBattle/btn-l.png")
    loadSprite("btn-m", "sprites/MonsterGame/buttonsBattle/btn-m.png")
    loadSprite("btn-n", "sprites/MonsterGame/buttonsBattle/btn-n.png")
    loadSprite("btn-o", "sprites/MonsterGame/buttonsBattle/btn-o.png")
    loadSprite("btn-p", "sprites/MonsterGame/buttonsBattle/btn-p.png")
    loadSprite("btn-q", "sprites/MonsterGame/buttonsBattle/btn-q.png")
    loadSprite("btn-r", "sprites/MonsterGame/buttonsBattle/btn-r.png")
    loadSprite("btn-s", "sprites/MonsterGame/buttonsBattle/btn-s.png")
    loadSprite("btn-t", "sprites/MonsterGame/buttonsBattle/btn-t.png")
    loadSprite("btn-u", "sprites/MonsterGame/buttonsBattle/btn-u.png")
    loadSprite("btn-v", "sprites/MonsterGame/buttonsBattle/btn-v.png")
    loadSprite("btn-w", "sprites/MonsterGame/buttonsBattle/btn-w.png")
    loadSprite("btn-x", "sprites/MonsterGame/buttonsBattle/btn-x.png")
    loadSprite("btn-y", "sprites/MonsterGame/buttonsBattle/btn-y.png")
    loadSprite("btn-z", "sprites/MonsterGame/buttonsBattle/btn-z.png")

}