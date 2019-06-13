using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Building : MonoBehaviour {

    public GameObject Canvas;
	// Use this for initialization
	public void CanvasSetActive()
    {
        Canvas.SetActive(!Canvas.active);
    }
}
