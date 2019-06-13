#pragma strict

public var sliderHP_05 : Slider;
public static var valueHP_05 : int;
public var exploo1_05 : GameObject;
public var exploo2_05 : GameObject;
public var exploo3_05 : GameObject;
public static var pass_05 : boolean;

function Start(){
    pass_05 = false;
    sliderHP_05.value = ControllHP_04.valueHP_04;
    valueHP_05 = ControllHP_04.valueHP_04;
    exploo1_05.SetActive(false);
    exploo2_05.SetActive(false);
    exploo3_05.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_05.dead_05==true){
        sliderHP_05.value -= 10;
        pass_05 = true;
        valueHP_05 = sliderHP_05.value;
        if(Answer_05.An_T_05 == false){      
            exploo1_05.SetActive(true);
            exploo2_05.SetActive(true);
            exploo3_05.SetActive(true);
        }
        Quiz_GameOver_05.dead_05=false;
    }
}