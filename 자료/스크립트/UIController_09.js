#pragma strict

import UnityEngine.UI;

public var textx_09 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_09 : GameObject;

public static var gameOver_09 : boolean;
public static var nextLevel_09 : boolean;
public static var goHome_09 : boolean;

public static var killtimer_09 : float = 4.8;
public static var waittimer_09 : float = 1.0;
public static var desBall_09 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_09){
        textx_09.enabled = false;
        UI_Q_09.SetActive(false);
    }

    if(goHome_09){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_09.enabled = false;
    }
    if(ControllHP_09.pass_09 == true){
        waittimer_09 -= Time.deltaTime;
        if(waittimer_09<=0.0){
            desBall_09 = true;
            Application.LoadLevel("S_Quiz_10");
        }
    }
}