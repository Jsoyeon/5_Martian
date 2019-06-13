#pragma strict

public var explosion_02 : GameObject;

function Update(){
    if(Answer_02.An_T_02 == true){
        Instantiate(explosion_02, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
