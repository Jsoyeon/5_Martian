#pragma strict

public var sliderHP_04 : Slider;
public static var valueHP_04 : int;
public var exploo1_04 : GameObject;
public var exploo2_04 : GameObject;
public var exploo3_04 : GameObject;
public static var pass_04 : boolean;

function Start(){
    pass_04 = false;
    sliderHP_04.value = ControllHP_03.valueHP_03;
    valueHP_04 = ControllHP_03.valueHP_03;
    exploo1_04.SetActive(false);
    exploo2_04.SetActive(false);
    exploo3_04.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_04.dead_04==true){
        sliderHP_04.value -= 10;
        pass_04 = true;
        valueHP_04 = sliderHP_04.value;
        if(Answer_04.An_T_04 == false){      
            exploo1_04.SetActive(true);
            exploo2_04.SetActive(true);
            exploo3_04.SetActive(true);
        }
        Quiz_GameOver_04.dead_04=false;
    }
}