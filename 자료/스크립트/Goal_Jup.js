#pragma strict

public static var goal4: boolean;

function Start() {
    goal4 = false;
}
function OnTriggerEnter(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal4 = true;
    }
}
function OnTriggerExit(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal4 = false;
    }
}
