#pragma strict

public static var power_02 : float;
public static var target_02 : GameObject;

function Start(){
    power_02 = 2.6;
    target_02 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_02 : Vector3 = target_02.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_02.normalized*power_02);
    //transform.LookAt(direction);
}