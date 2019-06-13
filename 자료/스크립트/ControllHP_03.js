#pragma strict

public var sliderHP_03 : Slider;
public static var valueHP_03 : int;
public var exploo1_03 : GameObject;
public var exploo2_03 : GameObject;
public var exploo3_03 : GameObject;
public static var pass_03 : boolean;

function Start(){
    pass_03 = false;
    sliderHP_03.value = ControllHP_02.valueHP_02;
    valueHP_03 = ControllHP_02.valueHP_02;
    exploo1_03.SetActive(false);
    exploo2_03.SetActive(false);
    exploo3_03.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_03.dead_03==true){
        sliderHP_03.value -= 10;
        pass_03 = true;
        valueHP_03 = sliderHP_03.value;
        if(Answer_03.An_T_03 == false){      
            exploo1_03.SetActive(true);
            exploo2_03.SetActive(true);
            exploo3_03.SetActive(true);
        }
        Quiz_GameOver_03.dead_03=false;
    }
}