#pragma strict

public var explosion_08 : GameObject;

function Update(){
    if(Answer_08.An_T_08 == true){
        Instantiate(explosion_08, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
