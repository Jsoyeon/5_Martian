#pragma strict

public static var An_T_03 : boolean;

function Update(){
    if(An_T_03 == true){
        UIController_03.killtimer_03 -= Time.deltaTime;
        if(UIController_03.killtimer_03<=0.0){
            An_T_03 = false;
            UIController_03.desBall_03 = true;
            Application.LoadLevel("S_Quiz_04");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_03 = true;
        UIController_03.desBall_03 = true;
        Application.LoadLevel("S_Quiz_04");
    }
}