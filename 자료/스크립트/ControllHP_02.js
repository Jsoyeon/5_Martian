#pragma strict

public var sliderHP_02 : Slider;
public static var valueHP_02 : int;
public var exploo1_02 : GameObject;
public var exploo2_02 : GameObject;
public var exploo3_02 : GameObject;
public static var pass_02 : boolean;

function Start(){
    pass_02 = false;
    sliderHP_02.value = ControllHP_01.valueHP_01;
    valueHP_02 = ControllHP_01.valueHP_01;
    exploo1_02.SetActive(false);
    exploo2_02.SetActive(false);
    exploo3_02.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_02.dead_02==true){
        sliderHP_02.value -= 10;
        pass_02 = true;
        valueHP_02 = sliderHP_02.value;
        if(Answer_02.An_T_02 == false){      
            exploo1_02.SetActive(true);
            exploo2_02.SetActive(true);
            exploo3_02.SetActive(true);
        }
        Quiz_GameOver_02.dead_02=false;
    }
}