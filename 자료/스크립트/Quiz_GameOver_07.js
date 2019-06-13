#pragma strict

public static var dead_07 : boolean;

function Start(){
    dead_07 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_07.gameOver_07 = true;
        dead_07 = true;
    }
}