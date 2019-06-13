#pragma strict

public var explosion_11 : GameObject;

function Update(){
    if(Answer_11.An_T_11 == true){
        Instantiate(explosion_11, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
