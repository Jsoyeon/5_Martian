#pragma strict

public static var An_T_04 : boolean;

function Update(){
    if(An_T_04 == true){
        UIController_04.killtimer_04 -= Time.deltaTime;
        if(UIController_04.killtimer_04<=0.0){
            An_T_04 = false;
            UIController_04.desBall_04 = true;
            Application.LoadLevel("S_Quiz_045");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_04 = true;
        UIController_04.desBall_04 = true;
        Application.LoadLevel("S_Quiz_045");
    }
}