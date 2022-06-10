let bill=document.querySelector('.bill input');
let numberOfPeople=document.querySelector('.number input');
let Tips=document.querySelectorAll('.percent span');
let customTip=document.querySelector('.percent input');
let tipPerPerson=document.querySelector('.per-person span');
let totalPerPerson=document.querySelector('.all span');
let resetButton=document.querySelector('button');
let noPerson=document.querySelector('.zero');

let tipPercentage;
let billPerPerson;
let tipAmout;

Tips.forEach(tip=>{
    tip.onclick=function(){
        Tips.forEach(tip=>{
            tip.classList.remove('active');
        });
        this.classList.add('active');
        noPerson.style.display='block';
        numberOfPeople.style.border='1px solid rgb(212, 114, 87)';
    };

});

customTip.onfocus=function(){
    Tips.forEach(tip=>{
        tip.classList.remove('active');
    });
    noPerson.style.display='block';
    numberOfPeople.style.border='1px solid rgb(212, 114, 87)';
};

function check(){
    Tips.forEach(tip=>{
        if(tip.classList.contains('active')){
            if(bill.value!='' && numberOfPeople.value!=''){
                calc();
                resetButton.classList.add('active');
                noPerson.style.display='none';
                numberOfPeople.style.border='none';
                clearInterval(counter);
            };
        }
        else if(customTip.value!=''){
            if(bill.value!='' && numberOfPeople.value!=''){
                calcWithCustomTip();
                resetButton.classList.add('active');
                noPerson.style.display='none';
                numberOfPeople.style.border='none';
                clearInterval(counter);
            };
        }
    });
};

let counter=setInterval(check,100);

function calc(){
    tipPercentage=document.querySelector('.percent .active');

    billPerPerson=(bill.value / numberOfPeople.value).toFixed(2);

    tipAmout=(billPerPerson * parseInt(tipPercentage.textContent) / 100).toFixed(2);

    tipPerPerson.innerHTML=tipAmout;

    totalPerPerson.innerHTML=(parseFloat(billPerPerson)+parseFloat(tipAmout)).toFixed(2);
};

function calcWithCustomTip(){
    billPerPerson=(bill.value / numberOfPeople.value).toFixed(2);

    tipAmout=(billPerPerson * customTip.value / 100).toFixed(2);

    tipPerPerson.innerHTML=tipAmout;

    totalPerPerson.innerHTML=(parseFloat(billPerPerson)+parseFloat(tipAmout)).toFixed(2);
}

resetButton.onclick=function(){
    location.reload();
};





















