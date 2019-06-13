#pragma strict

public var explosion_06 : GameObject;

function Update(){
    if(Answer_06.An_T_06 == true){
        Instantiate(explosion_06, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
