#pragma strict

public static var dead_03 : boolean;

function Start(){
    dead_03 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_03.gameOver_03 = true;
        dead_03 = true;
    }
}