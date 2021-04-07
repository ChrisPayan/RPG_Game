let playerLevel = 1;
let baseDamage = 24;
let baseDeffense = 12;
let baseHealth = 0;
let baseLuck = 100;

function updateBaseDamge() {

}

function updateBaseDeffense() {

} 

function updateBaseHealth() {

}

function updateBaseLuck() {

}

function levelUp() {

    if (playerLevel < 20 ) {
        updateBaseDamge();
    } else if (playerLevel < 40) {

    } else if (playerLevel < 60 ) {

    } else if (playerLevel < 80) {

    } else {

    }

}



let attackStatus = 24;
let deffenseStatus = 12;
let healthStatus = 100;
let luckStatus = 1;

//User can do -50% to +50% dmg with a chance to crit
function attackCard () {

    //Attack Rating
    let roll = Math.random();
    if (roll < 0.34) {
        let damageDown = attackStatus/4;
        var randomBonus = (Math.floor(roll * damageDown));
        attackMove = attackStatus - randomBonus;
    } else {
        let damageUp = attackStatus/2; //22
        let randomBonus = (Math.floor(roll * damageUp));
        console.log(randomBonus);
        attackMove = attackStatus + randomBonus;
    }

    //apply chance to double base dmg and add it to user attack 
    if(luckStatus == 0) {
        return;
    } else {
        let luckRoll = Math.random();
        console.log(luckRoll);
        if (luckRoll <= (luckStatus/100)) {
        attackMove = attackMove + attackMove;
        }  
    }
    

    console.log(roll);
   
    console.log(attackMove);

}

//User can increase their deffense up to +50% with a chance to Dodge entirely at the cost of 15% dmg
function deffenseCard () {

    let roll = Math.random();
    let deffenseUp = deffenseStatus/2;
    let randomBonus = (Math.floor(roll * deffenseUp));
    let deffenseMove = deffenseStatus + randomBonus;

    let luckRoll = Math.random();
    if (luckRoll <= (luckStatus/100)) {
        deffenseMove = 1000;
    }

    console.log(deffenseMove);
}

function healCard() {
    //Heal based on missing health
}

function runAway() {
    //Take enemies attack then leave battle
}


attackCard();
// deffenseCard();


// for(let i = 0; i < 10; i++) {
//     deffenseCard();
// }