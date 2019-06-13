#pragma strict

public static var power_08 : float;
public static var target_08 : GameObject;

function Start(){
    power_08 = 3.3;
    target_08 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_08 : Vector3 = target_08.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_08.normalized*power_08);
    //transform.LookAt(direction);
}