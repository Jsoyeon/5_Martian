#pragma strict

public var sliderHP_07 : Slider;
public static var valueHP_07 : int;
public var exploo1_07 : GameObject;
public var exploo2_07 : GameObject;
public var exploo3_07 : GameObject;
public static var pass_07 : boolean;

function Start(){
    pass_07 = false;
    sliderHP_07.value = ControllHP_06.valueHP_06;
    valueHP_07 = ControllHP_06.valueHP_06;
    exploo1_07.SetActive(false);
    exploo2_07.SetActive(false);
    exploo3_07.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_07.dead_07==true){
        sliderHP_07.value -= 10;
        pass_07 = true;
        valueHP_07 = sliderHP_07.value;
        if(Answer_07.An_T_07 == false){      
            exploo1_07.SetActive(true);
            exploo2_07.SetActive(true);
            exploo3_07.SetActive(true);
        }
        Quiz_GameOver_07.dead_07=false;
    }
}