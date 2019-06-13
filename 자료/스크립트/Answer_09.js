#pragma strict

public static var An_T_09 : boolean;

function Update(){
    if(An_T_09 == true){
        UIController_09.killtimer_09 -= Time.deltaTime;
        if(UIController_09.killtimer_09<=0.0){
            An_T_09 = false;
            Application.LoadLevel("Sc_Quiz_10");
        }
    }
}

function QA_09_T(){
    An_T_09 = true;
}

function QA_09_F(){
    An_T_09 = false;
    ObjMove_09.power_09 += 2;
}
