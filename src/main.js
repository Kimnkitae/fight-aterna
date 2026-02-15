import kaplay from "kaplay";
import { Prolog } from "/src/prolog/scene1.js";


kaplay({
    width: 1920,
    height: 1080,
    canvas: document.querySelector("#canvas"),
});

Prolog();
go("scene1");