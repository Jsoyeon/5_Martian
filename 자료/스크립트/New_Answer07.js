#pragma strict

public static var An_T_07 : boolean;

function Update(){
    if(An_T_07 == true){
        UIController_07.killtimer_07 -= Time.deltaTime;
        if(UIController_07.killtimer_07<=0.0){
            An_T_07 = false;
            UIController_07.desBall_07 = true;
            Application.LoadLevel("S_Quiz_08");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_07 = true;
        UIController_07.desBall_07 = true;
        Application.LoadLevel("S_Quiz_08");
    }
}