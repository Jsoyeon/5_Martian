#pragma strict

import UnityEngine.UI;

public var parts : GameObject;


function Update() {
    if (Goal_Jup.goal4) {
        parts.SetActive(true);
    }
    else {
        parts.SetActive(false);
        
    }
}
