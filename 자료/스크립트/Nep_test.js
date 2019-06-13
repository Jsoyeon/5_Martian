#pragma strict

import UnityEngine.UI;

public var parts : GameObject;

function Update() {
    if (Goal_Nep.goal7) {
        parts.SetActive(true);
    }
    else {
        parts.SetActive(false);
    }
}
