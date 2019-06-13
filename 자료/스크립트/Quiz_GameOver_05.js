#pragma strict

public static var dead_05 : boolean;

function Start(){
    dead_05 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_05.gameOver_05 = true;
        dead_05 = true;
    }
}