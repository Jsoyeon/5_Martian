#pragma strict

public static var dead_02 : boolean;

function Start(){
    dead_02 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_02.gameOver_02 = true;
        dead_02 = true;
    }
}