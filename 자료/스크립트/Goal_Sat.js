#pragma strict

public static var goal5: boolean;

function Start() {
    goal5 = false;
}
function OnTriggerEnter(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal5 = true;
    }
}
function OnTriggerExit(col: Collider) {
    if (col.gameObject.tag == "MainCamera") {
        goal5 = false;
    }
}
