import kaplay from "kaplay"
import { Prolog } from "/src/prolog/scene1.js"
import { Prolog2 } from "/src/prolog/scene2.js"
import { School } from "/src/school/scene3.js"
import { SchoolGame } from "/src/school/scene4.js"
import { SchoolAttack } from "/src/school/scene5.js"
/* GameMonster */
import { SceneM1 } from "/src/school/GameMonster/sceneM1.js"
import { SceneM2 } from "/src/school/GameMonster/sceneM2.js"
import { SceneM3 } from "/src/school/GameMonster/sceneM3.js"
import { SceneM4 } from "/src/school/GameMonster/sceneM4.js"
import { SceneM5 } from "/src/school/GameMonster/sceneM5.js"
import { SceneM6 } from "/src/school/GameMonster/sceneM6.js"
import { SceneM7 } from "/src/school/GameMonster/sceneM7.js"

kaplay({
    width: 1920,
    height: 1080,
    canvas: document.querySelector("#canvas"),
})

Prolog()
Prolog2()
School()
SchoolGame()
SchoolAttack()
/* GameMonster */
SceneM1()
SceneM2()
SceneM3()
SceneM4()
SceneM5()
SceneM6()
SceneM7()
go("scenem5")