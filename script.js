const number=document.getElementById('num');

const randomNum=Math.ceil(Math.random()*100);

let count=0;

const time=2000/randomNum;

setInterval(()=>{
    if(count===randomNum)
    {
        clearInterval();
        number.innerHTML=randomNum + "%";
    }
    else
    {
        count+=1;
        number.innerText=count + "%";
    }
},time)

const css=window.document.styleSheets[0];

const stroke= 440 - (440*(randomNum/100));

css.insertRule(
    `@keyframes animate
    {
        100%
        {
            stroke-dashoffset:${stroke};
        }
    }`
)