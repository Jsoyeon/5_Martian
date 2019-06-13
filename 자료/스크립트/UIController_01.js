#pragma strict

import UnityEngine.UI;

//public var player01 : GameObject;
public var textx_01 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_01 : GameObject;

public static var gameOver_01 : boolean;
public static var nextLevel_01 : boolean;
public static var goHome_01 : boolean;

public static var killtimer_01 : float = 4.8;
public static var waittimer_01 : float = 1.0;

public static var desBall_01 : boolean = false;

function Start(){
   // player01.SetActive(true);
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){
    
    if(gameOver_01){
        textx_01.enabled = false;
        UI_Q_01.SetActive(false);
    }

    if(goHome_01){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_01.enabled = false;
    }
    if(ControllHP_01.pass_01 == true){
        waittimer_01 -= Time.deltaTime;
        if(waittimer_01<=0.0){
            desBall_01 = true;
            Application.LoadLevel("S_Quiz_02");
        }
    }
}