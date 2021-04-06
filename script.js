let attackStatus = 100;
let deffenseStatus = 16;
let healthStatus = 200;
let luckStatus = 5;

//User can do -25% to +50% dmg 1/3 
function attackCard () {

    //Attack Rating
    let roll = Math.random();
    if (roll < 0.34) {
        let damageDown = attackStatus/4;
        var randomBonus = (Math.floor(roll * damageDown));
        attackMove = attackStatus - randomBonus;
    } else {
        let damageUp = attackStatus/2; //22
        var randomBonus = (Math.floor(roll * damageUp))
        attackMove = attackStatus + randomBonus;
    }

    //apply chance to double base dmg and add it to user attack 
    let luckRoll = Math.random();
    if (luckRoll <= (luckStatus/100)) {
        attackMove = attackMove + attackMove;
    }

    // console.log(roll);
    // console.log(luckRoll);
    // console.log(randomBonus);
    console.log(attackMove);

}

//User can increase their deffense up to +50% with a chance to Dodge entirely
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


// attackCard();
// deffenseCard();


for(let i = 0; i < 10; i++) {
    deffenseCard();
}