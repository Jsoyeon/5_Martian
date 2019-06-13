#pragma strict

import UnityEngine.UI;

public var textx_11 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;


public var UI_Q_11 : GameObject;

public static var gameOver_11 : boolean;
public static var nextLevel_11 : boolean;
public static var goHome_11 : boolean;

public static var killtimer_11 : float = 4.8;
public static var waittimer_11 : float = 1.0;
public static var desBall_11 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_11){
        textx_11.enabled = false;
        UI_Q_11.SetActive(false);
    }

    if(goHome_11){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_11.enabled = false;
    }
    if(ControllHP_11.pass_11 == true){
        waittimer_11 -= Time.deltaTime;
        if(waittimer_11<=0.0){
            desBall_11 = true;
            Application.LoadLevel("G_00");
        }
    }
}