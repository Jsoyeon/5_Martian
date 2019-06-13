#pragma strict

public static var An_T_05 : boolean;

function Update(){
    if(An_T_05 == true){
        UIController_05.killtimer_05 -= Time.deltaTime;
        if(UIController_05.killtimer_05<=0.0){
            An_T_05 = false;
            UIController_05.desBall_05 = true;
            Application.LoadLevel("S_Quiz_06");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_05 = true;
        UIController_05.desBall_05 = true;
        Application.LoadLevel("S_Quiz_06");
    }
}