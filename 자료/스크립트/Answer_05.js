#pragma strict

public static var An_T_05 : boolean;

function Update(){
    if(An_T_05 == true){
        UIController_05.killtimer_05 -= Time.deltaTime;
        if(UIController_05.killtimer_05<=0.0){
            An_T_05 = false;
            Application.LoadLevel("Sc_Quiz_06");
        }
    }
}

function QA_05_T(){
    An_T_05 = true;
}

function QA_05_F(){
    An_T_05 = false;
    ObjMove_05.power_05 += 2;
}
