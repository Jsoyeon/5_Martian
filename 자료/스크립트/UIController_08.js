#pragma strict

import UnityEngine.UI;

public var textx_08 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_08 : GameObject;

public static var gameOver_08 : boolean;
public static var nextLevel_08 : boolean;
public static var goHome_08 : boolean;

public static var killtimer_08 : float = 4.8;
public static var waittimer_08 : float = 1.0;
public static var desBall_08 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_08){
        textx_08.enabled = false;
        UI_Q_08.SetActive(false);
    }

    if(goHome_08){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_08.enabled = false;
    }
    if(ControllHP_08.pass_08 == true){
        waittimer_08 -= Time.deltaTime;
        if(waittimer_08<=0.0){
            desBall_08 = true;
            Application.LoadLevel("S_Quiz_09");
        }
    }
}