#pragma strict

public var sliderHP_06 : Slider;
public static var valueHP_06 : int;
public var exploo1_06 : GameObject;
public var exploo2_06 : GameObject;
public var exploo3_06 : GameObject;
public static var pass_06 : boolean;

function Start(){
    pass_06 = false;
    sliderHP_06.value = ControllHP_05.valueHP_05;
    valueHP_06 = ControllHP_05.valueHP_05;
    exploo1_06.SetActive(false);
    exploo2_06.SetActive(false);
    exploo3_06.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_06.dead_06==true){
        sliderHP_06.value -= 10;
        pass_06 = true;
        valueHP_06 = sliderHP_06.value;
        if(Answer_06.An_T_06 == false){      
            exploo1_06.SetActive(true);
            exploo2_06.SetActive(true);
            exploo3_06.SetActive(true);
        }
        Quiz_GameOver_06.dead_06=false;
    }
}