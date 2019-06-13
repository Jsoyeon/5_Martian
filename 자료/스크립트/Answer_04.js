#pragma strict

public static var An_T_04 : boolean;

function Update(){
    if(An_T_04 == true){
        UIController_04.killtimer_04 -= Time.deltaTime;
        if(UIController_04.killtimer_04<=0.0){
            An_T_04 = false;
            Application.LoadLevel("Sc_Quiz_05");
        }
    }
}

function QA_04_T(){
    An_T_04 = true;
}

function QA_04_F(){
    An_T_04 = false;
    ObjMove_04.power_04 += 2;
}
