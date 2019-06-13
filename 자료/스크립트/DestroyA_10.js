#pragma strict

public var explosion_10 : GameObject;

function Update(){
    if(Answer_10.An_T_10 == true){
        Instantiate(explosion_10, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
