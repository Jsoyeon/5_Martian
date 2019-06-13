#pragma strict

//public var player00 : GameObject;

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Player"){
        //Destroy(palyer00, 0.1);
        Application.LoadLevel("G_02");
    }
}