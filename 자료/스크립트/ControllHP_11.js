#pragma strict

public var sliderHP_11 : Slider;
public static var valueHP_11 : int;
public var exploo1_11 : GameObject;
public var exploo2_11 : GameObject;
public var exploo3_11 : GameObject;
public static var pass_11 : boolean;

public var exploo1_31 : GameObject;
public var exploo2_31 : GameObject;
public var exploo3_31 : GameObject;
public var exploo4_31 : GameObject;
public var exploo5_31 : GameObject;
public var exploo6_31 : GameObject;
public var exploo7_31 : GameObject;
public var exploo8_31 : GameObject;
public var exploo9_31 : GameObject;
public var exploo10_31 : GameObject;
public var exploo11_31 : GameObject;

function Start(){
    pass_11 = false;
    sliderHP_11.value = ControllHP_10.valueHP_10;
    valueHP_11 = ControllHP_10.valueHP_10;
    exploo1_11.SetActive(false);
    exploo2_11.SetActive(false);
    exploo3_11.SetActive(false);

    exploo1_31.SetActive(false);
    exploo2_31.SetActive(false);
    exploo3_31.SetActive(false);
    exploo4_31.SetActive(false);
    exploo5_31.SetActive(false);
    exploo6_31.SetActive(false);
    exploo7_31.SetActive(false);
    exploo8_31.SetActive(false);
    exploo9_31.SetActive(false);
    exploo10_31.SetActive(false);
    exploo11_31.SetActive(false);
}

function Update(){
    if(Quiz_GameOver_11.dead_11==true){
        sliderHP_11.value -= 10;
        pass_11 = true;
        valueHP_11 = sliderHP_11.value;
        if(Answer_11.An_T_11 == false){      
            exploo1_11.SetActive(true);
            exploo2_11.SetActive(true);
            exploo3_11.SetActive(true);
            if(sliderHP_11.value<=20){
                exploo1_31.SetActive(true);
                exploo2_31.SetActive(true);
                exploo3_31.SetActive(true);
                exploo4_31.SetActive(true);
                exploo5_31.SetActive(true);
                exploo6_31.SetActive(true);
                exploo7_31.SetActive(true);
                exploo8_31.SetActive(true);
                exploo9_31.SetActive(true);
                exploo10_31.SetActive(true);
                exploo11_31.SetActive(true);
            }
        }
        Quiz_GameOver_11.dead_11=false;
    }
}
//마지막에 폭발 11개 추가했음!