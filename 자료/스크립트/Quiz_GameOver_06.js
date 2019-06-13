#pragma strict

public static var dead_06 : boolean;

function Start(){
    dead_06 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_06.gameOver_06 = true;
        dead_06 = true;
    }
}