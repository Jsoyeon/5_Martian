#pragma strict

public static var An_T_01 : boolean;

function Update(){
    if(An_T_01 == true){
        UIController_01.killtimer_01 -= Time.deltaTime;
        if(UIController_01.killtimer_01<=0.0){
            An_T_01 = false;
            UIController_01.desBall_01 = true;
            Application.LoadLevel("S_Quiz_02");
        }
    }
}

function OnTriggerEnter (col:Collider){
    //if(col.gameObject.tag == "AnT"){
    if(col.gameObject.tag == "An_02"){
        An_T_01 = true;
        UIController_01.desBall_01 = true;
        //아랫줄 새로 했음 나중에 삭제
        Application.LoadLevel("S_Quiz_02");
    }
}