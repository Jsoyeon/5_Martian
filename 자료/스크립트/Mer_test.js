#pragma strict

import UnityEngine.UI;

public var parts : GameObject;


function Update() {
    if (Goal_Mer.goal) {
        parts.SetActive(true);
    } 
    else {
        parts.SetActive(false);
    }
}
