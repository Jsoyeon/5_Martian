#pragma strict

public static var An_T_06 : boolean;

function Update(){
    if(An_T_06 == true){
        UIController_06.killtimer_06 -= Time.deltaTime;
        if(UIController_06.killtimer_06<=0.0){
            An_T_06 = false;
            UIController_06.desBall_06 = true;
            Application.LoadLevel("S_Quiz_07");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_06 = true;
        UIController_06.desBall_06 = true;
        Application.LoadLevel("S_Quiz_07");
    }
}