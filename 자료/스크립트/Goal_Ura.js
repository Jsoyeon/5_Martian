#pragma strict

public static var goal6: boolean;

function Start() {
    goal6 = false;
}
function OnTriggerEnter(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal6 = true;
    }
}
function OnTriggerExit(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal6 = false;
    }
}
