#pragma strict

public var explosion_07 : GameObject;

function Update(){
    if(Answer_07.An_T_07 == true){
        Instantiate(explosion_07, transform.position, transform.rotation);
        //유성의 좌표값에 따라가게 설정
        gameObject.SetActive(false);
    }
}
