'use strict';
//Площадь поверхности тела
function PPT (height, weight) {
    let area = null;

    area = 0.007241 * Math.pow(weight, 0.725) * Math.pow(height, 0.425);

    return area;
}

let line = document.getElementById('line');
let valLP = document.getElementById('val');
let radio = document.querySelectorAll('.radio');

function lineLP () {

for (let i = 0; i < radio.length; i++) {
    if (radio[0].checked) {
        if (line.value <= 3.8) { valLP.value = 'Не увеличено';
        } else {
            valLP.value = 'Увеличено';
        }
    }
    if (radio[1].checked) {
        if (line.value <= 4) { valLP.value = 'Не увеличено';
        } else {
            valLP.value = 'Увеличено';
        }
    }
}
}

//Индекс ЛП
function indLP (lineVal, area) {

    let indexLP = null;

    //*Преобразуем строку в число
    lineVal = parseFloat(lineVal);

    area = parseFloat(area);

    indexLP = lineVal/area;

    return indexLP;
}

//Объем ЛП
function volumeLP (lineVal) {

    let volLP = null;

    lineVal = parseFloat(lineVal);

    volLP = ((7 * Math.pow(lineVal, 3)) / (2.4 + lineVal));

    return volLP;
}

//Значение КДР
let KDR = document.getElementById('kdr');
let vKDR = document.getElementById('valKDR');

function valKDRFunc () {

    for (let i = 0; i < radio.length; i++) {
        if (radio[0].checked) {
            if (KDR.value <= 5.3) { vKDR.value = 'Не увеличено';
            } else {
                vKDR.value = 'Увеличено';
            }
        }
        if (radio[1].checked) {
            if (KDR.value <= 5.9) { vKDR.value = 'Не увеличено';
            } else {
                vKDR.value = 'Увеличено';
            }
        }
    }
}


function kdiFun (KDRv, area) {

    let KDI = null;

    KDRv = parseFloat(KDRv);
    area = parseFloat(area);

    KDI = KDRv / area;

    return KDI;

}

//Расчет КДО
function kdoFun (KDRv) {

    let KDO = null;

    KDRv = parseFloat(KDRv);

    KDO = (7 * Math.pow(KDRv, 3) / (2.4 + KDRv));

    return KDO;
}


//Расчет КСО
function kcoFun (KCR) {

    let KCO = null;

    KCR = parseFloat(KCR);

    KCO = (7 * Math.pow(KCR, 3) / (2.4 + KCR));

    return KCO;
}


//Утолщена/Не утолщена МЖ
let MJ = document.getElementById('mj');
let valMJ = document.getElementById('valmj');

function checkValueMJ () {

    for (let i = 0; i < radio.length; i++) {
        if (radio[0].checked) {
            if (MJ.value <= 0.9) { valMJ.value = 'Не утолщена';
            } else {
                valMJ.value = 'Утолщена';
            }
        }
        if (radio[1].checked) {
            if (MJ.value <= 1.0) { valMJ.value = 'Не утолщена';
            } else {
                valMJ.value = 'Утолщена';
            }
        }
    }
}

//Утолщена/Не утолщена задняя стенка ЛЖ
let LJ = document.getElementById('wall');
let valLJ = document.getElementById('valwall');

function checkValueLJ () {

    for (let i = 0; i < radio.length; i++) {
        if (radio[0].checked) {
            if (LJ.value <= 0.9) { valLJ.value = 'Не утолщена';
            } else {
                valLJ.value = 'Утолщена';
            }
        }
        if (radio[1].checked) {
            if (LJ.value <= 1.0) { valLJ.value = 'Не утолщена';
            } else {
                valLJ.value = 'Утолщена';
            }
        }
    }
}

//Ударный объем

function calcShock (KDO, KCO) {

    let shock = null;

    KDO = parseFloat(KDO);
    KCO = parseFloat(KCO);

    shock = (KDO - KCO);

    return shock;
}

//Значение ММЛЖ
function calcValueMMLG (KDRv, MJ, LJ) {

    let MMLG = null;

    KDRv = parseFloat(KDRv);
    MJ = parseFloat(MJ);
    LJ = parseFloat(LJ);

    MMLG = ((Math.pow([KDRv + MJ+ LJ], 3) - Math.pow(KDRv, 3) + 0.6) * 0.8 * 1.04);

    return MMLG;

}

//Значение ИММЛЖ
function calcValueIMMLJ (MMLG, area) {

    let IMMLJ = null;

    MMLG = parseFloat(MMLG);
    area = parseFloat(area);

    IMMLJ = MMLG / area;

    return IMMLJ;

}

//Увеличен/Не увеличен ИММЛЖ
let IMMLJ = document.getElementById('immlj');
let valIMMLG = document.getElementById('valimmlj');

function checkValueIMMLJ () {

    for (let i = 0; i < radio.length; i++) {
        if (radio[0].checked) {
            if (IMMLJ.value <= 95) { valIMMLG.value = 'Не утолщен';
            } else {
                valIMMLG.value = 'Утолщен';
            }
        }
        if (radio[1].checked) {
            if (IMMLJ.value <= 115) { valIMMLG.value = 'Не утолщен';
            } else {
                valIMMLG.value = 'Утолщен';
            }
        }
    }
}

//Фракция выброса
function calcFV (shock, KDO) {
    let fraction = null;

    shock = parseFloat(shock);
    KDO = parseFloat(KDO);

    fraction = (( shock / KDO ) * 100);

    return fraction;

}

//Сохранена/Не сохранена ФВ
let FV = document.getElementById('fraction');
let valFV = document.getElementById('valfraction');
function checkValueFV () {

    if (FV.value >= 55) {
        valFV.value = 'Сохранена';
    } else {
        valFV.value = 'Не сохранена';
    }

}


document.querySelector('.push').onclick = function (e) {
    e.preventDefault();
    //Площадь поверхности тела
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let area = PPT(height, weight);

    document.getElementById('area').value = area.toFixed(2);

    //Увеличен/Не увеличен размер ЛП
    lineLP();

    //Индекс ЛП
    let lineVal = document.getElementById('line').value;
    let index = indLP(lineVal, area);

    document.getElementById('index').value = index.toFixed(2);

    //Объем ЛП
    let volLP = volumeLP(lineVal);
    document.getElementById('volume').value = volLP.toFixed(2);

    //Увеличен/Не увеличен КДР
    valKDRFunc();

    let KDRv = document.getElementById('kdr').value;
    let KDI = kdiFun(KDRv, area);
    document.getElementById('kdi').value = KDI.toFixed(2);

    //Расчет КДО
    let KDO = kdoFun(KDRv);
    document.getElementById('kdo').value = KDO.toFixed(2);

    //Расчет КСО
    let KCR = document.getElementById('kcr').value;
    let KCO = kcoFun(KCR);
    document.getElementById('kco').value = KCO.toFixed(2);

    //Увеличен/Не увеличен размер МЖ
    checkValueMJ();

    //Увеличена/Не увеличена здняя стенка ЛЖ
    checkValueLJ();

    //Ударный объем
    let shock = calcShock(KDO, KCO);
    document.getElementById('shock').value = shock.toFixed(2);

    //ММЛЖ
    let MJ = document.getElementById('mj').value;
    let LJ = document.getElementById('wall').value;
    let MMLG = calcValueMMLG(KDRv, MJ, LJ);
    document.getElementById('mmlj').value = MMLG.toFixed(2);

    //ИММЛЖ
    let IMMLG = calcValueIMMLJ(MMLG, area);
    document.getElementById('immlj').value = IMMLG.toFixed(2);

    //Значение ИММЛЖ
    checkValueIMMLJ();

    //Фракция выброса
    let fraction = calcFV(shock, KDO);
    document.getElementById('fraction').value = fraction.toFixed(2);

    //Сохранена/Не сохранена ФВ
    checkValueFV();
};