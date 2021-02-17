let caseCliquable = document.querySelectorAll(".case");


let player1 = true ;
let player2 = false ;

let gameStart = true

// ECRIRE X ET O 
caseCliquable.forEach(element => {
    
    if (gameStart) {
        element.addEventListener("click" , () => {
    
            if (player1 && element.innerText == ``) {
                element.innerText = "X"
                player1 = false
                player2 = true
                
            } else if (player2 && element.innerText == ``) {
                element.innerText = "O"
                player2 = false
                player1 = true
            }
    
            let a1 = document.getElementById("a-1").innerText
            let a2 = document.getElementById("a-2").innerText
            let a3 = document.getElementById("a-3").innerText
            
            let b1 = document.getElementById("b-1").innerText
            let b2 = document.getElementById("b-2").innerText
            let b3 = document.getElementById("b-3").innerText
            
            let c1 = document.getElementById("c-1").innerText
            let c2 = document.getElementById("c-2").innerText
            let c3 = document.getElementById("c-3").innerText
        
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
    
            //verif si ya une ligne de fait 
            for (let i = 0; i <= 7; i++) {
                let position = tableauGagnant[i]
                let position1 = position[0];
                let position2 = position[1];
                let position3 = position[2];
                
                if (position1 == "X" && position2 == "X" && position3 == "X") {
                    console.log('joueur X gagne');
                    gameStart = false
                    return false
    
                } else if (position1 == "O" && position2 == "O" && position3 == "O") {
                    console.log('joueur O gagne');
    
                    return false
                }
            
            }
    
        })
        
    
    }
    });




// VERIFICATION TABLEAU GAGNANT
