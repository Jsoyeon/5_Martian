#pragma strict

public static var power_06 : float;
public static var target_06 : GameObject;

function Start(){
    power_06 = 3.1;
    target_06 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_06 : Vector3 = target_06.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_06.normalized*power_06);
    //transform.LookAt(direction);
}