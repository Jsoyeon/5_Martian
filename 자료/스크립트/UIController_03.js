#pragma strict

import UnityEngine.UI;

public var textx_03 : Text;
//public var finishImg : GameObject;
//public var backBtn : GameObject;

public var UI_Q_03 : GameObject;

public static var gameOver_03 : boolean;
public static var nextLevel_03 : boolean;
public static var goHome_03 : boolean;

public static var killtimer_03 : float = 4.8;
public static var waittimer_03 : float = 1.0;
public static var desBall_03 : boolean = false;
function Start(){
    /*
    overImg.SetActive(false);
    finishImg.SetActive(false);

    retryBtn.SetActive(false);
    backBtn.SetActive(false);
    */
}

function Update(){

    if(gameOver_03){
        textx_03.enabled = false;
        UI_Q_03.SetActive(false);
    }

    if(goHome_03){
        //finishImg.SetActive(true);
        //backBtn.SetActive(true);
        textx_03.enabled = false;
    }
    if(ControllHP_03.pass_03 == true){
        waittimer_03 -= Time.deltaTime;
        if(waittimer_03<=0.0){
            desBall_03 = true;
            Application.LoadLevel("S_Quiz_04");
        }
    }
}