#pragma strict

public static var dead_08 : boolean;

function Start(){
    dead_08 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_08.gameOver_08 = true;
        dead_08 = true;
    }
}