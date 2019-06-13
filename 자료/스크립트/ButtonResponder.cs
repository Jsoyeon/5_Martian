using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;


public class ButtonResponder : MonoBehaviour {

    private EventTrigger _trigger;


	// Use this for initialization
	void Start () {
        _trigger = this.gameObject.AddComponent<EventTrigger>();

        EventTrigger.Entry entry1 = new EventTrigger.Entry();

        entry1.eventID = EventTriggerType.PointerEnter;

        entry1.callback.AddListener(
            delegate
            {
                OnButtonHover(true);
            }
            );

        _trigger.triggers.Add(entry1);

        EventTrigger.Entry entry2 = new EventTrigger.Entry();

        entry2.eventID = EventTriggerType.PointerExit;

        entry2.callback.AddListener(
            delegate
            {
                OnButtonHover(false);
            });

        _trigger.triggers.Add(entry2);
	}

    void OnButtonHover(bool isHover)
    {
        Debug.Log("Button is hoverd = " + isHover);
    }
}
