#pragma strict

public static var An_T_08 : boolean;

function Update(){
    if(An_T_08 == true){
        UIController_08.killtimer_08 -= Time.deltaTime;
        if(UIController_08.killtimer_08<=0.0){
            An_T_08 = false;
            UIController_08.desBall_08 = true;
            Application.LoadLevel("S_Quiz_09");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_08 = true;
        UIController_08.desBall_08 = true;
        Application.LoadLevel("S_Quiz_09");
    }
}