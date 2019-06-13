#pragma strict

import UnityEngine.UI;

public var parts : GameObject;


function Update() {
    if (Goal_Mars.goal3) {
        parts.SetActive(true);
    } 
    else {
        parts.SetActive(false);
        
    }
}
