#pragma strict

public static var opTimer : float = 10.9;
//public var btnStart : GameObject;

function Start(){
    //btnStart.SetActive(false);
}

function Update(){
    opTimer -= Time.deltaTime;
    if(opTimer<=0.0){
        Application.LoadLevel("G_00");
        //btnStart.SetActive(true);
    }
    //나중에 버튼 없애고 음악 적절할 때 저절로 넘어가도록
    //위의 if문에 loadlevel하기.
}

function Click_Start(){
   // Application.LoadLevel("Sc_Quiz_01");
}
