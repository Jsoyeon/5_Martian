#pragma strict

public static var An_T_03 : boolean;

function Update(){
    if(An_T_03 == true){
        UIController_03.killtimer_03 -= Time.deltaTime;
        if(UIController_03.killtimer_03<=0.0){
            An_T_03 = false;
            Application.LoadLevel("Sc_Quiz_04");
        }
    }
}

function QA_03_T(){
    An_T_03 = true;
}

function QA_03_F(){
    An_T_03 = false;
    ObjMove_03.power_03 += 2;
}
