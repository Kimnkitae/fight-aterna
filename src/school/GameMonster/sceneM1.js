export const SceneM1 = () => {

    loadSprite("Phone", "sprites/school/schoolGame.png")
    loadSprite("text-form", "scene1/text/text-form.png")
    loadSound("theme1", "sprites/MonsterGame/Music/theme1.mp3")
    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")

    scene("scenem1", () => {
        const phone = add([
            sprite("Phone"),
        ])

        const theme1 = play("theme1");

        theme1.play()

        
        const texts = [
            "Утро было холодным, как лезвие, только что вытащенное из ледяной воды. Туман окутывал поросшие мхом камни, а в воздухе пахло сыростью и сосновыми иголками.",
            "В маленькой деревянной хижине с дерновой крышей шестнадцатилетний мальчик ворочался на соломенном матрасе. Его звали Гару. Ни фамилии, ни семьи, ни прошлого — только имя, высеченное в память о том, кто его покинул.",
            "Глаза Гару резко распахнулись. Сердце колотилось, словно после долгого забега. Ему приснилась битва — кровавая, яростная, со звоном стали и криками умирающих. Во сне он держал меч, который звенел в его руках, рассекая врагов, словно ветер по сухой траве. Но как только он проснулся, меч исчез, оставив лишь пустоту в груди.",
            "— Довольно, — прошептал он себе под нос, сжимая кулаки. — Я мужчина. И я хочу драться.",
            "Гароу, — произнес он вслух, словно вкушая это имя. — Величайший фехтователь в мире. Так меня и будут звать. Он улыбнулся, обнажив крепкие зубы. Улыбка была дикой, почти животной.",
        ];

        let entTextIndex = 0

        const dialogText = add([
            text(texts[0],
                {
                    width: 830,
                    size: 12,
                    font: "VMVSegaGenesis", 
                }
            ),
            pos(550, 580),

        ]);

        const nextText = () => {

            entTextIndex++
            if (entTextIndex < texts.length) {
                dialogText.text = texts[entTextIndex];
            } else {
                theme1.stop()
                go("scenem2")
            }
        }

        onKeyPress(["space", "enter"], nextText)
        onClick(nextText)
        
    })
}