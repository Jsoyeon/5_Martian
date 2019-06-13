#pragma strict

public var explosion_04 : GameObject;

function Update(){
    if(Answer_04.An_T_04 == true){
        Instantiate(explosion_04, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
