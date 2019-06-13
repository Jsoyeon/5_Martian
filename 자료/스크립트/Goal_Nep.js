#pragma strict

public static var goal7: boolean;

function Start() {
    goal7 = false;
}
function OnTriggerEnter(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal7 = true;
    }
}
function OnTriggerExit(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal7 = false;
    }
}
