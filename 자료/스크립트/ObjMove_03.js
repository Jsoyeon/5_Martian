#pragma strict

public static var power_03 : float;
public static var target_03 : GameObject;

function Start(){
    power_03 = 2.7;
    target_03 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_03 : Vector3 = target_03.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_03.normalized*power_03);
    //transform.LookAt(direction);
}