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


        this.popup = this.createCard({
            
            translation: [-8.456621278758638, -0.3386429294537037, -10.602046756660629],
            scale: [7, 7, 7],
            rotation: [0, -0.12750934617220697, 0, 0.9918373690473334],
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
            pdfLocation: "3DFCTQUz4qj2w0YfB8wFdZSS0mNIktdChkQzXkd1QwnYLDAwNDd-a2siLSghN2oxN2onNis1MSEwai0razFrPhEwMxQLPgIxCxd1Dy0jCR4tcXd9PAIAA3x0dmstK2onNis1MSEwaiktJzYrMiE2NyFqKCsnJSggITIgISIlMSgwazMbAzIhFzF9ESMyLHEID3xpDhEOMw8gPhcgCncVfQMLMgwxF303IwYcKXRrICUwJWsHcCF0DzIDNT4Acg0RBywwE3M3DwgdBXNzARAJAXdxLXFxMxIuAhUSECAj",
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
