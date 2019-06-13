#pragma strict

public var sliderHP_08 : Slider;
public static var valueHP_08 : int;
public var exploo1_08 : GameObject;
public var exploo2_08 : GameObject;
public var exploo3_08 : GameObject;
public static var pass_08 : boolean;

function Start(){
    pass_08 = false;
    sliderHP_08.value = ControllHP_07.valueHP_07;
    valueHP_08 = ControllHP_07.valueHP_07;
    exploo1_08.SetActive(false);
    exploo2_08.SetActive(false);
    exploo3_08.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_08.dead_08==true){
        sliderHP_08.value -= 10;
        pass_08 = true;
        valueHP_08 = sliderHP_08.value;
        if(Answer_08.An_T_08 == false){      
            exploo1_08.SetActive(true);
            exploo2_08.SetActive(true);
            exploo3_08.SetActive(true);
        }
        Quiz_GameOver_08.dead_08=false;
    }
}