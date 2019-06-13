#pragma strict

public static var dead_10 : boolean;

function Start(){
    dead_10 = false;
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Enemy" || Quiz_Timer_01.tt_01 >= 140){
        UIController_10.gameOver_10 = true;
        dead_10 = true;
    }
}