#pragma strict

public var sliderHP_10 : Slider;
public static var valueHP_10 : int;
public var exploo1_10 : GameObject;
public var exploo2_10 : GameObject;
public var exploo3_10 : GameObject;
public static var pass_10 : boolean;

function Start(){
    pass_10 = false;
    sliderHP_10.value = ControllHP_09.valueHP_09;
    valueHP_10 = ControllHP_09.valueHP_09;
    exploo1_10.SetActive(false);
    exploo2_10.SetActive(false);
    exploo3_10.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_10.dead_10==true){
        sliderHP_10.value -= 10;
        pass_10 = true;
        valueHP_10 = sliderHP_10.value;
        if(Answer_10.An_T_10 == false){      
            exploo1_10.SetActive(true);
            exploo2_10.SetActive(true);
            exploo3_10.SetActive(true);
        }
        Quiz_GameOver_10.dead_10=false;
    }
}