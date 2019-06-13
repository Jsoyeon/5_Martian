#pragma strict

public static var dead_01 : boolean;

function Start(){
    dead_01 = false;
}

function OnTriggerEnter (col:Collider){
    //나중에 씬1의 타이머가 100을 담당하는 지 보고 여기 숫자만 바꾸면 될 듯. 영향주면 1로 아니면 마지막 스테이지의 넘버로.
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_01.gameOver_01 = true;
        dead_01 = true;
    }
}