function increment(param) {
    document.getElementById(`${param}`).stepUp();
    scoring();
}

function decrement(param){
    document.getElementById(`${param}`).stepDown();
    scoring();
}

function roundUp(num){
    return -1 * Math.floor(-num / 100) * 100;
}

function scoring(){
    let dealer = document.getElementById('dealerCheckbox').checked;
    let han = parseInt(document.getElementById('hanCounter').value);
    let fu = document.getElementById('fuCounter').value;
    let honba = document.getElementById('honbaCounter').value;
    let basicPoints = fu * Math.pow(2,han + 2);

    switch(han){
        case 6:
        case 7:
            basicPoints = 3000;
            break;
        case 8:
        case 9:
        case 10:
            basicPoints = 4000;
            break;
        case 11:
        case 12:
            basicPoints = 6000;
            break;
        case 13:
            basicPoints = 8000;
            break;
        default:
            basicPoints = Math.min(2000,basicPoints);
    }

    if(!dealer){
        document.getElementById('ron').value = roundUp(basicPoints * 4) + (honba * 300);
        document.getElementById('tsumo1').value = roundUp(basicPoints * 2) + (honba * 100);
        document.getElementById('tsumo2').value = roundUp(basicPoints) + (honba * 100);
        document.getElementById('tsumo2').style.visibility = 'visible';
    }

    if(dealer){
        document.getElementById('ron').value = roundUp(basicPoints * 6) + (honba * 300);
        document.getElementById('tsumo1').value = roundUp(basicPoints * 2) + (honba * 100);
        document.getElementById('tsumo2').style.visibility = 'hidden';
    }

}