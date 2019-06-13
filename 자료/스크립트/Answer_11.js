#pragma strict

public static var An_T_11 : boolean;

function Update(){
    if(An_T_11 == true){
        UIController_11.killtimer_11 -= Time.deltaTime;
        if(UIController_11.killtimer_11<=0.0){
            An_T_11 = false;
            Application.LoadLevel("G_00");
        }
    }
}

function QA_11_T(){
    An_T_11 = true;
}

function QA_11_F(){
    An_T_11 = false;
    ObjMove_11.power_11 += 2;
}
