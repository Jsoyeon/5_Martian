#pragma strict

import UnityEngine.UI;

public var parts : GameObject;


function Update() {
    if (Goal_Sat.goal5) {
        parts.SetActive(true);
    }
    else {
        parts.SetActive(false);
    }
}
