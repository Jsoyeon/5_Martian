#pragma strict

public var explosion_01 : GameObject;

function Update(){
    if(Answer_01.An_T_01 == true){
        Instantiate(explosion_01, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
