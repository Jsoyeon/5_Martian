#pragma strict

import UnityEngine.UI;

public static var timer_01 : float;
public static var tt_01 : int;

function Start(){
}

function Update(){
    timer_01 += Time.deltaTime;

    var t_01 : int = Mathf.FloorToInt(timer_01);
    var t2_01 : int = 140-t_01;
    tt_01 = t2_01;
    var uiText_01 : Text = GetComponent.<Text>();
    uiText_01.text = "Time : "+t2_01.ToString();
}