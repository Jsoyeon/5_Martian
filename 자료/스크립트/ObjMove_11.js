#pragma strict

public static var power_11 : float;
public static var target_11 : GameObject;

function Start(){
    power_11 = 4;
    target_11 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_11 : Vector3 = target_11.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_11.normalized*power_11);
    //transform.LookAt(direction);
}