#pragma strict

import UnityEngine.UI;

public var textx_10 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_10 : GameObject;

public static var gameOver_10 : boolean;
public static var nextLevel_10 : boolean;
public static var goHome_10 : boolean;

public static var killtimer_10 : float = 4.8;
public static var waittimer_10 : float = 1.0;
public static var desBall_10 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_10){
        textx_10.enabled = false;
        UI_Q_10.SetActive(false);
    }

    if(goHome_10){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_10.enabled = false;
    }
    if(ControllHP_10.pass_10 == true){
        waittimer_10 -= Time.deltaTime;
        if(waittimer_10<=0.0){
            desBall_10 = true;
            Application.LoadLevel("S_Quiz_11");
        }
    }
}