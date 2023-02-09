class BirdsEyePawn {
    setup() {
        this.subscribe(this.sessionId, "goHomePressed", "goHomePressed");

        let home = document.body.querySelector("#homeBtn");
        if (home && !this._homeBtnHandler) {
            this._homeBtnHandler = () => {
                this.publish(this.sessionId, "goHomePressed");
            };
            home.addEventListener("click", this._homeBtnHandler);
        }
    }

    goHomePressed() {
        let avatar = this.getMyAvatar();
        let anchor = avatar.actor._anchor;
        let yaw = 0;
        if (anchor && anchor.rotation) {
            yaw = Microverse.q_yaw(anchor.rotation);
        }
        setTimeout(() => avatar.lookTo(-0.5, yaw, [0, 5, 5]), 1500);
    }

    teardown() {
        let home = document.body.querySelector("#homeBtn");
        if (home && this._homeBtnHandler) {
            home.removeEventListener("click", this._homeBtnHandler);
            delete this._homeBtnHandler;
        }
    }
}

export default {
    modules: [
        {
            name: "BirdsEye",
            pawnBehaviors: [BirdsEyePawn]
        }
    ]
}

/* globals Microverse */