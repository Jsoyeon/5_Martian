#pragma strict

import UnityEngine.UI;

public var textx_05 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_05 : GameObject;

public static var gameOver_05 : boolean;
public static var nextLevel_05 : boolean;
public static var goHome_05 : boolean;

public static var killtimer_05 : float = 4.8;
public static var waittimer_05 : float = 1.0;
public static var desBall_05 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_05){
        textx_05.enabled = false;
        UI_Q_05.SetActive(false);
    }

    if(goHome_05){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_05.enabled = false;
    }
    if(ControllHP_05.pass_05 == true){
        waittimer_05 -= Time.deltaTime;
        if(waittimer_05<=0.0){
            desBall_05 = true;
            Application.LoadLevel("S_Quiz_06");
        }
    }
}