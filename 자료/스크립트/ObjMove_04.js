#pragma strict

public static var power_04 : float;
public static var target_04 : GameObject;

function Start(){
    power_04 = 2.8;
    target_04 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_04 : Vector3 = target_04.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_04.normalized*power_04);
    //transform.LookAt(direction);
}