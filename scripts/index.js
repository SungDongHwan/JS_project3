
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];
console.log(num);
//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

 //폭탄이 섞였는지 체크하는 flag변수`
let shuffleFlag = false;

// 폭탄 섞기 함수
const boxShuffle =()=>{
    if (shuffleFlag){
        showMsg('폭탄을 이미 섞으셨습니다.');
        return;
    }
    num.sort(()=>Math.random()-0.5)
    shuffleFlag = true;
    boardclear();
    console.log(num);

}
// 메세지 표시 함수
const showMsg = (m)=>{
    document.querySelector("#msg").innerHTML= m;
}
// 보드 내용 지우기
const boardclear= ()=>{
    const board =document.querySelectorAll(".boardBox");
    console.log(board);
    for(let item of board){
        item.innerHTML='';
    }
    cnt= 0;
    selNum.length = 0;

}
// show(보드 숫자 누른후 보여주기) 함수
const show = (n)=>{
    if (!shuffleFlag){
        showMsg('폭탄위치가 결정됬습니다..');
        boxShuffle();
        return;
    }
    console.log(n);
// 같은곳을 여러번 눌렀을 때
    if(selNum.indexOf(n)!= -1) return;
    cnt ++;//누른 횟수 세기
    selNum.push(n);
    console.log(selNum);
    let img;
    if(num[n-1]==0){img = 'hart' ;
}else{   
    img = 'boom';
    shuffleFlag=false;
    showMsg('폭탄이 터졌습니다.');
}
    document.querySelector("#box"+n).innerHTML = `<img src = "./images/${img}.png">`
if(cnt==8){
    showAll();
    shuffleFlag = false;
    showMsg('폭탄제거 성공')
}
    
}
// 보드 전체 하트
const showAll = ()=> {
    let idx = num.indexOf(1)+1;
    console.log(idx);
    document.querySelector("#box"+idx).innerHTML = `<img src = "./images/hart.png">`

}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{

});