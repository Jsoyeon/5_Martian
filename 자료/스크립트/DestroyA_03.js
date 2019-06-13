#pragma strict

public var explosion_03 : GameObject;

function Update(){
    if(Answer_03.An_T_03 == true){
        Instantiate(explosion_03, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
