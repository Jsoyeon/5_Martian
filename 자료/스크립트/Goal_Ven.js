#pragma strict

public static var goal1: boolean;

function Start() {
    goal1 = false;
}
function OnTriggerEnter(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal1 = true;
    }
}
function OnTriggerExit(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal1 = false;
    }
}
