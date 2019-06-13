#pragma strict

public static var An_T_11 : boolean;
public var endingImg : GameObject;

function Update(){
    if(An_T_11 == true){
        UIController_11.killtimer_11 -= Time.deltaTime;
        endingImg.SetActive(true);
        if(UIController_11.killtimer_11<=0.0){
            An_T_11 = false;
            UIController_11.desBall_11 = true;
            Application.LoadLevel("G_00");
        }
    }
}

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "AnT"){
        An_T_11 = true;
        UIController_11.desBall_11 = true;
        Application.LoadLevel("G_00");
    }
}