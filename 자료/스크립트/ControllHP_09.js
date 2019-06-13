#pragma strict

public var sliderHP_09 : Slider;
public static var valueHP_09 : int;
public var exploo1_09 : GameObject;
public var exploo2_09 : GameObject;
public var exploo3_09 : GameObject;
public static var pass_09 : boolean;

function Start(){
    pass_09 = false;
    sliderHP_09.value = ControllHP_08.valueHP_08;
    valueHP_09 = ControllHP_08.valueHP_08;
    exploo1_09.SetActive(false);
    exploo2_09.SetActive(false);
    exploo3_09.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_09.dead_09==true){
        sliderHP_09.value -= 10;
        pass_09 = true;
        valueHP_09 = sliderHP_09.value;
        if(Answer_09.An_T_09 == false){      
            exploo1_09.SetActive(true);
            exploo2_09.SetActive(true);
            exploo3_09.SetActive(true);
        }
        Quiz_GameOver_09.dead_09=false;
    }
}