#pragma strict

public static var MaxHP_01 =120;
public var sliderHP_01 : Slider;
public static var valueHP_01 : int;
public var exploo1_01 : GameObject;
public var exploo2_01 : GameObject;
public var exploo3_01 : GameObject;
public static var pass_01 : boolean;

function Start(){
    pass_01 = false;
    sliderHP_01.maxValue = 120;
    sliderHP_01.value = 120;
    valueHP_01 = 120;
    exploo1_01.SetActive(false);
    exploo2_01.SetActive(false);
    exploo3_01.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_01.dead_01==true){
        sliderHP_01.value -= 10;
        pass_01 = true;
        valueHP_01 = sliderHP_01.value;
        if(Answer_01.An_T_01 == false){      
            exploo1_01.SetActive(true);
            exploo2_01.SetActive(true);
            exploo3_01.SetActive(true);
        }
        Quiz_GameOver_01.dead_01=false;
    }
}