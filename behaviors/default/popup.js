class PopupActor {
    setup() {
        this.addEventListener("pointerTap", "pressed");
    }

    check() {
        this.hasOpened = false;
    }


    pressed() {
        
        if (this.popup) {
        this.popup.destroy()
        delete this.popup
        return
        }
        

        this.popup = this.createCard ({
           
        });

        this.say("portalChanged");
    }
}


export default {
    modules: [
        {
            name: "Popup",
            actorBehaviors: [PopupActor],
            
        }
    ]
}

/* globals Microverse */
