#pragma strict

public static var power_07 : float;
public static var target_07 : GameObject;

function Start(){
    power_07 = 3.2;
    target_07 = GameObject.FindGameObjectWithTag("Death");
}

function FixedUpdate(){
    var direction_07 : Vector3 = target_07.transform.position - transform.position;
    GetComponent.<Rigidbody>().AddForce(direction_07.normalized*power_07);
    //transform.LookAt(direction);
}