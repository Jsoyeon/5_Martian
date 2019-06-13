#pragma strict

import UnityEngine.UI;

public var parts : GameObject;


function Update() {
   if (Goal_Ear.goal2) {
        parts.SetActive(true);
    }
    else {
        parts.SetActive(false);
       
    }
}
