#pragma strict

public static var dead_11 : boolean;

function Start(){
    dead_11 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_11.gameOver_11 = true;
        dead_11 = true;
    }
}