import kaplay from "kaplay"
import { Prolog } from "/src/prolog/scene1.js"
import { Prolog2 } from "/src/prolog/scene2.js"
import { School } from "/src/school/scene3.js"

kaplay({
    width: 1920,
    height: 1080,
    canvas: document.querySelector("#canvas"),
})

Prolog()
Prolog2()
School()
go("scene1")