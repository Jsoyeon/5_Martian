#pragma strict

import UnityEngine.UI;

public var textx_02 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_02 : GameObject;

public static var gameOver_02 : boolean;
public static var nextLevel_02 : boolean;
public static var goHome_02 : boolean;

public static var killtimer_02 : float = 4.8;
public static var waittimer_02 : float = 1.0;
public static var desBall_02 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_02){
        textx_02.enabled = false;
        UI_Q_02.SetActive(false);
    }

    if(goHome_02){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_02.enabled = false;
    }
    if(ControllHP_02.pass_02 == true){
        waittimer_02 -= Time.deltaTime;
        if(waittimer_02<=0.0){
            desBall_02 = true;
            Application.LoadLevel("S_Quiz_023");
        }
    }
}