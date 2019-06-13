#pragma strict

public static var power_01 : float;
public static var target_01 : GameObject;

function Start(){
    power_01 = 3.1;
    target_01 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_01 : Vector3 = target_01.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_01.normalized*power_01);
    //transform.LookAt(direction);
}
