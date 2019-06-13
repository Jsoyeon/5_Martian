#pragma strict

public static var An_T_07 : boolean;

function Update(){
    if(An_T_07 == true){
        UIController_07.killtimer_07 -= Time.deltaTime;
        if(UIController_07.killtimer_07<=0.0){
            An_T_07 = false;
            Application.LoadLevel("Sc_Quiz_08");
        }
    }
}

function QA_07_T(){
    An_T_07 = true;
}

function QA_07_F(){
    An_T_07 = false;
    ObjMove_07.power_07 += 2;
}
