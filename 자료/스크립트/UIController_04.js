#pragma strict

import UnityEngine.UI;

public var textx_04 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_04 : GameObject;

public static var gameOver_04 : boolean;
public static var nextLevel_04 : boolean;
public static var goHome_04 : boolean;

public static var killtimer_04 : float = 4.8;
public static var waittimer_04 : float = 1.0;
public static var desBall_04 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_04){
        textx_04.enabled = false;
        UI_Q_04.SetActive(false);
    }

    if(goHome_04){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_04.enabled = false;
    }
    if(ControllHP_04.pass_04 == true){
        waittimer_04 -= Time.deltaTime;
        if(waittimer_04<=0.0){
            desBall_04 = true;
            Application.LoadLevel("S_Quiz_045");
        }
    }
}