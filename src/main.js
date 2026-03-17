import kaplay from "kaplay"

/* Assets */

import { loadAssets } from "./assets"

/* Menu */
import { Menu } from "/src/menu/menu.js"
import { MenuStartWarning } from "/src/menu/MenuStartWarning.js"
import { Settings } from "/src/menu/menu-settings.js"
/* Hospital */
import { Prolog } from "/src/prolog/scene1.js"
import { Prolog2 } from "/src/prolog/scene2.js"
/* School */
import { School } from "/src/school/scene3.js"
import { SchoolGame } from "/src/school/scene4.js"
import { SchoolAttack } from "/src/school/scene5.js"
import { SchoolAttack2 } from "/src/school/scene6.js"
import { SchoolAttack3 } from "/src/school/scene7.js"
import { SchoolAttack4 } from "/src/school/scene8.js"
import { SchoolAttack5 } from "/src/school/scene9.js"
/* GameMonster */
import { SceneM1 } from "/src/school/GameMonster/sceneM1.js"
import { SceneM2 } from "/src/school/GameMonster/sceneM2.js"
import { SceneM3 } from "/src/school/GameMonster/sceneM3.js"
import { SceneM4 } from "/src/school/GameMonster/sceneM4.js"
import { SceneM5 } from "/src/school/GameMonster/sceneM5.js"
import { SceneM6 } from "/src/school/GameMonster/sceneM6.js"
import { SceneM7 } from "/src/school/GameMonster/sceneM7.js"
import { SceneMLose } from "/src/school/GameMonster/sceneMLose.js"
/* END */
import { End } from "/src/end.js"

kaplay({
    width: 1920,
    height: 1080,
    canvas: document.querySelector("#canvas"),
})

/* ASSETS */
loadAssets()

/* Menu */
Menu()
MenuStartWarning()
Settings()
/* Hospital */
Prolog()
Prolog2()
/* School */
School()
SchoolGame()
SchoolAttack()
SchoolAttack2()
SchoolAttack3()
SchoolAttack4()
SchoolAttack5()
/* GameMonster */
SceneM1()
SceneM2()
SceneM3()
SceneM4()
SceneM5()
SceneM6()
SceneM7()
SceneMLose()
/* END */
End()

go("sceneMenu")