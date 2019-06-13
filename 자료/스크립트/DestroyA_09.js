#pragma strict

public var explosion_09 : GameObject;

function Update(){
    if(Answer_09.An_T_09 == true){
        Instantiate(explosion_09, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
