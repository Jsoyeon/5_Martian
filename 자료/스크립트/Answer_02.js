#pragma strict

public static var An_T_02 : boolean;

function Update(){
    if(An_T_02 == true){
        UIController_02.killtimer_02 -= Time.deltaTime;
        if(UIController_02.killtimer_02<=0.0){
            An_T_02 = false;
            Application.LoadLevel("Sc_Quiz_03");
        }
    }
}

function QA_02_T(){
    An_T_02 = true;
}

function QA_02_F(){
    An_T_02 = false;
    ObjMove_02.power_02 += 2;
}
