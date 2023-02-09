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
            parent: this,
            translation: [1.9296324247164605, -0.011999999254941773, 17.318332439582996],
            scale: [4, 4, 4],
            rotation: [0, 0.9871152358730054, 0, -0.16001097183437502],
            layers: ["pointer"],
            behaviorModules: ["PDFView"],
            name: "/Battery.pdf",
            color: 8947848,
            depth: 0.05,
            fileName: "/Battery.pdf",
            frameColor: 16777215,
            fullBright: true,
            height: 0.5625,
            modelType: "pdf",
            pdfLocation: "3xbqQfrN7WKSL-xB1vC8zCYAzqD7IAxcibJ8kVX0kvhsEAwMCAtCV1ceERQdC1YNC1YbChcJDR0MVhEXVw1XAi0MDyg3Aj4NNytJMxEfNSIRTUtBAD48P0BISlcRF1YbChcJDR0MVhURGwoXDh0KCx1WFBcbGRQcHQ4cHR4ZDRQMVyEBSwkXChoPMU0gGRQ9PjZBDQEpDjk2LkhNDQg3IDI1Jz5VDzsCMRBJGRNXHBkMGVcBSDY9IEwsDhcNNRtOAQs1FDcqED4hMBBPNzNKSBs1Dj4fNTs0MUBJEzxM",
            shadow: true,
            singleSided: true,
            type: "2d",
            width: 1,
            noSave: true
        });

        this.say("portalChanged");
    }
}


export default {
    modules: [
        {
            name: "Popup1",
            actorBehaviors: [PopupActor],
            
        }
    ]
}

/* globals Microverse */
