#pragma strict

public static var An_T_10 : boolean;

function Update(){
    if(An_T_10 == true){
        UIController_10.killtimer_10 -= Time.deltaTime;
        if(UIController_10.killtimer_10<=0.0){
            An_T_10 = false;
            Application.LoadLevel("Sc_Quiz_11");
        }
    }
}

function QA_10_T(){
    An_T_10 = true;
}

function QA_10_F(){
    An_T_10 = false;
    ObjMove_10.power_10 += 2;
}
