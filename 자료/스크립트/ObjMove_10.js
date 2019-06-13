#pragma strict

public static var power_10 : float;
public static var target_10 : GameObject;

function Start(){
    power_10 = 3.9;
    target_10 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_10 : Vector3 = target_10.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_10.normalized*power_10);
    //transform.LookAt(direction);
}