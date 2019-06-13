#pragma strict

public var explosion_05 : GameObject;

function Update(){
    if(Answer_05.An_T_05 == true){
        Instantiate(explosion_05, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
