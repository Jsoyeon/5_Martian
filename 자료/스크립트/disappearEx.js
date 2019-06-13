#pragma strict
public var extime=6000;
function Update(){
    extime = extime - Time.deltaTime*6000;
    if(extime<=0){
        Destroy(gameObject);
    }
}