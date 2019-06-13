#pragma strict

public static var An_T_08 : boolean;

function Update(){
    if(An_T_08 == true){
        UIController_08.killtimer_08 -= Time.deltaTime;
        if(UIController_08.killtimer_08<=0.0){
            An_T_08 = false;
            Application.LoadLevel("Sc_Quiz_09");
        }
    }
}

function QA_08_T(){
    An_T_08 = true;
}

function QA_08_F(){
    An_T_08 = false;
    ObjMove_08.power_08 += 2;
}
