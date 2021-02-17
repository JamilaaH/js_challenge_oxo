let caseCliquable = document.querySelectorAll(`.case`);
let tour = document.querySelector('.text')
let btnRestart = document.querySelector('.restart')
let player1 = true ;
let player2 = false ;

// le jeu commence
let gameActive = true;
tour.innerHTML = "C'est parti <br> Au tour de joueur X"

// ECRIRE X ET O 
caseCliquable.forEach(element => {

    element.addEventListener(`click` , () => {

        let roundWon = false;
        //placer les X et O
        if (gameActive) {
            if (player1 && element.innerText == ``) {
                element.innerText = `X`
                tour.innerHTML ='Au tour du joueur O'
                player1 = false
                player2 = true
    
            } else if (player2 && element.innerText == ``) {
                element.innerText = `O`
                player2 = false
                player1 = true
                tour.innerHTML ='Au tour du joueur X'
            }
    
            let a1 = document.getElementById(`a-1`).innerText
            let a2 = document.getElementById(`a-2`).innerText
            let a3 = document.getElementById(`a-3`).innerText
    
            let b1 = document.getElementById(`b-1`).innerText
            let b2 = document.getElementById(`b-2`).innerText
            let b3 = document.getElementById(`b-3`).innerText
    
            let c1 = document.getElementById(`c-1`).innerText
            let c2 = document.getElementById(`c-2`).innerText
            let c3 = document.getElementById(`c-3`).innerText

            // tableau avec ttes les combinaisons gagnantes
            let tableauGagnant = [
                [a1,a2,a3],
                [b1,b2,b3],
                [c1,c2,c3],
                [a1,b1,c1],
                [a2,b2,c2],
                [a3,b3,c3],
                [a1,b2,c3],
                [a3,b2,c1]
            ];
            
            let tab = [a1,a2, a3, b1, b2, b3, c1, c2, c3]

            //Vérifier si chaque ligne ou diagonal est fait
            for (let index = 0; index <= 7; index++) {
    
                let position = tableauGagnant[index]
                let position1 = position[0]
                let position2 = position[1]
                let position3 = position[2]  
                if (position1 == `X` && position2 == `X` && position3 == `X`) {
                    tour.innerHTML ='X a gagné'
                    console.log(`X a gagné`);
                    gameActive = false
                    roundWon = true;
                    btnRestart.style = "display: flex"
                    return false;
    
                } else if (position1 == `O` && position2 == `O` && position3 == `O`) {
                    tour.innerHTML ='O a gagné'
                    console.log(`O a gagné`);
                    gameActive = false
                    roundWon = true;
                    btnRestart.style = "display: flex"
                    return false;
    
                }
                // fin du round quand un joueur gagne
                if (roundWon) {
                    gameActive = false
                    return false;

                } 

            }
            
            //cas d'egalité 
            let roundDraw =! tab.includes("");
            if (roundDraw) {
                tour.innerHTML = "match nul"
                gameActive  = false
                btnRestart.style = "display: flex"
                return false
            }
        }
    })
});

//restart avec la game finie
btnRestart.addEventListener('click', ()=> {
    document.location.reload()
})