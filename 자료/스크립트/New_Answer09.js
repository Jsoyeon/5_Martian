#pragma strict

public static var An_T_09 : boolean;

function Update(){
    if(An_T_09 == true){
        UIController_09.killtimer_09 -= Time.deltaTime;
        if(UIController_09.killtimer_09<=0.0){
            An_T_09 = false;
            UIController_09.desBall_09 = true;
            Application.LoadLevel("S_Quiz_10");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_09 = true;
        UIController_09.desBall_09 = true;
        Application.LoadLevel("S_Quiz_10");
    }
}