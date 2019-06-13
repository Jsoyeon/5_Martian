#pragma strict

public static var power_05 : float;
public static var target_05 : GameObject;

function Start(){
    power_05 = 2.9;
    target_05 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_05 : Vector3 = target_05.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_05.normalized*power_05);
    //transform.LookAt(direction);
}