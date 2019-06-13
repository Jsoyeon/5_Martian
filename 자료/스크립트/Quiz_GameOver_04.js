#pragma strict

public static var dead_04 : boolean;

function Start(){
    dead_04 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_04.gameOver_04 = true;
        dead_04 = true;
    }
}