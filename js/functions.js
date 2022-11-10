function increment(param) {
    document.getElementById(`${param}`).stepUp();
}

function decrement(param){
    document.getElementById(`${param}`).stepDown();
}

function roundUp(num){
    return -1 * Math.floor(-num / 100) * 100;
}

function scoring(ron){
    let dealer = document.getElementById('dealerCheckbox').checked;
    let han = document.getElementById('hanCounter').value;
    let fu = document.getElementById('fuCounter').value;
    let honba = document.getElementById('honbaCounter').value;
    let basicPoints = fu * Math.pow(2,han + 2);

    console.log(ron);
    console.log(dealer);
    console.log(han);
    console.log(fu);
    console.log(honba);
    console.log(basicPoints);

    switch(han){
        default:
            basicPoints = Math.min(2000,basicPoints);
    }

    if(!dealer && !ron){
        document.getElementById('tsumo1').value = roundUp(basicPoints * 2) + (honba * 100);
        document.getElementById('tsumo2').value = roundUp(basicPoints) + (honba * 100);
    }

    console.log(roundUp(basicPoints * 2) + (honba * 100));
    console.log(roundUp(basicPoints) + (honba * 100));
}