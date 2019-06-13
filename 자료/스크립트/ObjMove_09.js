#pragma strict

public static var power_09 : float;
public static var target_09 : GameObject;

function Start(){
    power_09 = 3.7;
    target_09 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_09 : Vector3 = target_09.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_09.normalized*power_09);
    //transform.LookAt(direction);
}