#pragma strict

public static var An_T_01 : boolean;

function Update(){
    if(An_T_01 == true){
        UIController_01.killtimer_01 -= Time.deltaTime;
        if(UIController_01.killtimer_01<=0.0){
            An_T_01 = false;
            Application.LoadLevel("Sc_Quiz_02");
        }
    }
}

function QA_01_T(){
    An_T_01 = true;
}

function QA_01_F(){
    An_T_01 = false;
    ObjMove_01.power_01 += 2;
}
