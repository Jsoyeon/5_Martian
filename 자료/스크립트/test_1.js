#pragma strict

import UnityEngine.UI;

public var parts : GameObject;
public var parts1: GameObject;
public var parts2: GameObject;
public var parts3: GameObject;
public var parts4: GameObject;
public var parts5: GameObject;
public var parts6: GameObject;
public var parts7: GameObject;

function Update() {
    if (Goal_Mer.goal) {
        parts.SetActive(true);
    } else if (Goal_Ven.goal1) {
        parts1.SetActive(true);
    } else if (Goal_Ear.goal2) {
        parts2.SetActive(true);
    } else if (Goal_Mars.goal3) {
        parts3.SetActive(true);
    } else if (Goal_Jup.goal4) {
        parts4.SetActive(true);
    } else if (Goal_Sat.goal5) {
        parts5.SetActive(true);
    } else if (Goal_Ura.goal6) {
        parts6.SetActive(true);
    } else if (Goal_Nep.goal7) {
        parts7.SetActive(true);
    }
    else {
        parts.SetActive(false);
        parts1.SetActive(false);
        parts2.SetActive(false);
        parts3.SetActive(false);
        parts4.SetActive(false);
        parts5.SetActive(false);
        parts6.SetActive(false);
        parts7.SetActive(false);
    }
}
