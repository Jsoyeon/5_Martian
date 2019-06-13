#pragma strict

public static var An_T_02 : boolean;

function Update(){
    if(An_T_02 == true){
        UIController_02.killtimer_02 -= Time.deltaTime;
        if(UIController_02.killtimer_02<=0.0){
            An_T_02 = false;
            UIController_02.desBall_02 = true;
            Application.LoadLevel("S_Quiz_023");
        }
    }
}

function OnTriggerEnter (col:Collider){
    //if(col.gameObject.tag == "AnT"){
    if(col.gameObject.tag == "An_04"){
        An_T_02 = true;
        UIController_02.desBall_02 = true;
        //아랫줄 새로 했음 나중에 삭제
        Application.LoadLevel("S_Quiz_023");
    }
}