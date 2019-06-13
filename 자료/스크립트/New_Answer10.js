#pragma strict

public static var An_T_10 : boolean;

function Update(){
    if(An_T_10 == true){
        UIController_10.killtimer_10 -= Time.deltaTime;
        if(UIController_10.killtimer_10<=0.0){
            An_T_10 = false;
            UIController_10.desBall_10 = true;
            Application.LoadLevel("S_Quiz_11");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_10 = true;
        UIController_10.desBall_10 = true;
        Application.LoadLevel("S_Quiz_11");
    }
}