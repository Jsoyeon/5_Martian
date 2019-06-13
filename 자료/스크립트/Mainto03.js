#pragma strict

public static var dest03 : boolean;

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Player"){
        dest03=true;
        Application.LoadLevel("S_Quiz_01");
    }
}