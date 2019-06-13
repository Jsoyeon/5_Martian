#pragma strict

import UnityEngine.UI;

public var textx_07 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_07 : GameObject;

public static var gameOver_07 : boolean;
public static var nextLevel_07 : boolean;
public static var goHome_07 : boolean;

public static var killtimer_07 : float = 4.8;
public static var waittimer_07 : float = 1.0;
public static var desBall_07 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_07){
        textx_07.enabled = false;
        UI_Q_07.SetActive(false);
    }

    if(goHome_07){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_07.enabled = false;
    }
    if(ControllHP_07.pass_07 == true){
        waittimer_07 -= Time.deltaTime;
        if(waittimer_07<=0.0){
            desBall_07 = true;
            Application.LoadLevel("S_Quiz_08");
        }
    }
}