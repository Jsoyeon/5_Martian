#pragma strict

import UnityEngine.UI;

public var parts : GameObject;


function Update() {
    if (Goal_Ura.goal6) {
        parts.SetActive(true);
    }
    else {
        parts.SetActive(false);
    }
}
