#pragma strict

import UnityEngine.UI;

public var parts : GameObject;


function Update() {
    if (Goal_Ven.goal1) {
        parts.SetActive(true);
    } 
    else {
        parts.SetActive(false);

    }
}
