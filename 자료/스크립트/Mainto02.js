#pragma strict

function OnTriggerEnter (col:Collider){
    if(col.gameObject.tag == "Player"){
        Application.LoadLevel("G_03");
    }
}