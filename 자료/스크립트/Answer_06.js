#pragma strict

public static var An_T_06 : boolean;

function Update(){
    if(An_T_06 == true){
        UIController_06.killtimer_06 -= Time.deltaTime;
        if(UIController_06.killtimer_06<=0.0){
            An_T_06 = false;
            Application.LoadLevel("Sc_Quiz_07");
        }
    }
}

function QA_06_T(){
    An_T_06 = true;
}

function QA_06_F(){
    An_T_06 = false;
    ObjMove_06.power_06 += 2;
}
