#pragma strict

import UnityEngine.UI;

public var textx_06 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_06 : GameObject;

public static var gameOver_06 : boolean;
public static var nextLevel_06 : boolean;
public static var goHome_06 : boolean;

public static var killtimer_06 : float = 4.8;
public static var waittimer_06 : float = 1.0;
public static var desBall_06 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_06){
        textx_06.enabled = false;
        UI_Q_06.SetActive(false);
    }

    if(goHome_06){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_06.enabled = false;
    }
    if(ControllHP_06.pass_06 == true){
        waittimer_06 -= Time.deltaTime;
        if(waittimer_06<=0.0){
            desBall_06 = true;
            Application.LoadLevel("S_Quiz_07");
        }
    }
}