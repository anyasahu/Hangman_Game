const output = document.getElementById("output");
const points = document.getElementById("points")

dataBase = ["anyakaushik", "kaushikanya", "chiya", "dramaqueenofanya"]
const myGame = () => {
    game = 3
    points.innerHTML = "points= " + game
    var random = Math.floor(Math.random() * dataBase.length)
    console.log(random)
    var randomWord = dataBase[random];
    console.log(randomWord)
    var result = []
    for (i = 0; i < randomWord.length; i++) {
        result.push("_")
    }
    output.innerHTML = ""
    for (i = 0; i < result.length; i++) {
        output.innerHTML += result[i] + " "
    }
    document.addEventListener("keypress", (event) => {
        if (game > 0) {
            guessKey = event.key;
            console.log(event)
            for (i = 0; i < randomWord.length; i++) {
                console.log(randomWord[i])
                if (guessKey === randomWord[i]) {
                    result[i] = guessKey;
                }
            }
            if (!randomWord.includes(guessKey)) {
                game--
            }
            points.innerHTML = "points= " + game
            output.innerHTML = ""
            for (i = 0; i < result.length; i++) {
                output.innerHTML += result[i] + " "
            }
        }else{
            points.innerHTML = "You Lost";
        }


    })

}


myGame()


