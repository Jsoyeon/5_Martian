#pragma strict

public static var dead_09 : boolean;

function Start(){
    dead_09 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_09.gameOver_09 = true;
        dead_09 = true;
    }
}