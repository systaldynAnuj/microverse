// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js",
        "birdseye.js",
        "video.js",
        "popup.js",
        "hinge.js",
        "replaceWorld.js",
        "ambientSound.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation: [0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
            }
        },
        {
            card: {
                translation: [3.2729167632439307, -1.5942209806095633, -19.55361354200975],
                scale: [6.622984531268566, 6.622984531268566, 6.622984531268566],
                rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                behaviorModules: ["BirdsEye"],
                name: "/all.glb",
                dataLocation: "3OJU0iCnZPeXnmxAmkLbc-LKTBPYpXH_b7vfDFpRON3wJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgNRo7OB8ANQk6ABx-BCYoAhUmenx2NwkLCHd_fWAmIGEsPSA-Oio7YSImLD0gOSo9PCphIyAsLiMrKjkrKikuOiM7YCs5Oh8tBwUCDC15KQIXfzUfPCQCOT87IX0rKR4dITgFGHx_JiM8IBoXBntgKy47LmAYGCw-KxkkHjo7ECciPzUIfBUFGxV4fBk3ED0FBSwfejUtEAs5HA0HHH8G",
                dataScale: [12.558032602217754, 12.558032602217754, 12.558032602217754],
                fileName: "/all.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [-2.449220435262933, 2.927591332029505, -14.893604301487285],
                scale: [2.085825199033338, 2.085825199033338, 2.085825199033338],
                rotation: [-0.002651013267094766, -0.01756131453433531, -0.014744956127744574, 0.9997335438151882],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                fullBright: true,
                height: 1,
                pauseTime: 10.081432,
                playStartTime: 152.363843,
                ranslation: [0.6869556955891094, -0.6425672886613045, -12.11102208165136],
                textureHeight: 1024,
                textureLocation: "./assets/videos/demo.mp4",
                textureType: "video",
                textureWidth: 1024,
                type: "2d",
                width: 1,

            }
        },
        {
            card: {
                translation: [-7.892626376435745, 7.660231107926356, -34.169399832835126],
                scale: [1.9694460034158856, 1.9694460034158856, 1.9694460034158856],
                rotation: [-0.012063864119512392, -0.7001967123440083, -0.008882836543433985, 0.7137927727429655],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                fullBright: true,
                height: 1,
                pauseTime: 0.436792,
                playStartTime: 491.46,
                ranslation: [0.6869556955891094, -0.6425672886613045, -12.11102208165136],
                textureHeight: 1024,
                textureLocation: "./assets/metaverse1.mp4",
                textureType: "video",
                textureWidth: 1024,
                type: "2d",
                width: 1,
            }
        },
        {
            card: {
                translation: [5.786236859177914, 10.141792210949381, -9.439314652226589],
                rotation: [0.006073839627531445, -0.6782197289543246, -0.010006667720490392, 0.7347659316615281],
                layers: ["pointer"],
                dataLocation: "3U-gvMVxB-RrGHdUWBdCOod_ajl0QuUnSvkaWnN-YGAwPSEhJSZvenozPDkwJnsgJns2JzokIDAhezw6eiB6LwAhIgUaLxMgGgZkHjwyGA88YGZsLRMREm1lZ3o8Ons2JzokIDAhezg8Nic6IzAnJjB7OTo2NDkxMCMxMDM0IDkhejgDGmMzHjM5GxI3FwcAIycXGz04ZhceHREbOGYbbDMzZz0tbCEYNixhJAB6MTQhNHoGByMSMGxkNhQ9NhsSBwENAzINZQEzBhctHzYCJGIDFmEADARiJTpmYQYm",
                dataScale: [1.7714784242101398, 1.7714784242101398, 1.7714784242101398],
                modelType: "obj",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [5.655936797230041, 10.141792210949381, -13.922419207348723],
                rotation: [0.006073839627531445, -0.6782197289543246, -0.010006667720490392, 0.7347659316615281],
                layers: ["pointer"],
                dataLocation: "3U-gvMVxB-RrGHdUWBdCOod_ajl0QuUnSvkaWnN-YGAwPSEhJSZvenozPDkwJnsgJns2JzokIDAhezw6eiB6LwAhIgUaLxMgGgZkHjwyGA88YGZsLRMREm1lZ3o8Ons2JzokIDAhezg8Nic6IzAnJjB7OTo2NDkxMCMxMDM0IDkhejgDGmMzHjM5GxI3FwcAIycXGz04ZhceHREbOGYbbDMzZz0tbCEYNixhJAB6MTQhNHoGByMSMGxkNhQ9NhsSBwENAzINZQEzBhctHzYCJGIDFmEADARiJTpmYQYm",
                dataScale: [1.7714784242101398, 1.7714784242101398, 1.7714784242101398],
                modelType: "obj",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [19.71218276821285, -1.473864112111591, -27.18366054092682],
                scale: [1.5944690893853635, 1.5944690893853635, 1.5944690893853635],
                rotation: [0.0048656307033029395, 0.024387362881104366, 0.006153531954853498, 0.999671804250798],
                layers: ["pointer"],
                behaviorModules: ["Popup"],
                dataLocation: "3OGnV_N23iPy1ghvq-j2PzoKabS8gB3ZTUnOCQSq7G3UJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgNRo7OB8ANQk6ABx-BCYoAhUmenx2NwkLCHd_fWAmIGEsPSA-Oio7YSImLD0gOSo9PCphIyAsLiMrKjkrKikuOiM7YDotOn0QfAoKeyoKdwJ9Cho4OSYfKBs1JnkEDCYlJ38sFQMlCHkVLisJIzxgKy47LmAFNRwGCi4pCgA-eXsnIwQmf3w6KRp-fXYtGHg5CTklCT4reTkDGCQDIiF_",
                dataScale: [0.0008888888888888889, 0.0008888888888888889, 0.0008888888888888889],
                modelType: "obj",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [20.068640549282915, -1.473864112111591, -22.67427700947462],
                scale: [1.5944690893853635, 1.5944690893853635, 1.5944690893853635],
                rotation: [0.0048656307033029395, 0.024387362881104366, 0.006153531954853498, 0.999671804250798],
                layers: ["pointer"],
                behaviorModules: ["Popup", "Hinge"],
                dataLocation: "3OGnV_N23iPy1ghvq-j2PzoKabS8gB3ZTUnOCQSq7G3UJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgNRo7OB8ANQk6ABx-BCYoAhUmenx2NwkLCHd_fWAmIGEsPSA-Oio7YSImLD0gOSo9PCphIyAsLiMrKjkrKikuOiM7YDotOn0QfAoKeyoKdwJ9Cho4OSYfKBs1JnkEDCYlJ38sFQMlCHkVLisJIzxgKy47LmAFNRwGCi4pCgA-eXsnIwQmf3w6KRp-fXYtGHg5CTklCT4reTkDGCQDIiF_",
                dataScale: [0.0008888888888888889, 0.0008888888888888889, 0.0008888888888888889],
                modelType: "obj",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [32.340487348340005, -1.3393062699169516, -25.441065023680824],
                scale: [1.459564146589995, 1.459564146589995, 1.459564146589995],
                rotation: [0, -0.9999867178403045, 0, 0.005154041421554123],
                layers: ["pointer"],
                dataLocation: "391KKb1oAHJafWOV46CUqhvzaLmCJDO-qoZKviv9ijLsUU1NSUoDFhZfUFVcShdMShdaS1ZITFxNF1BWFkwWQ2xNTml2Q39MdmoIclBedGNQDAoAQX99fgEJCxZQVhdaS1ZITFxNF1RQWktWT1xLSlwXVVZaWFVdXE9dXF9YTFVNFkxbTAtmCnx8DVx8AXQLfGxOT1BpXm1DUA9yelBTUQlaY3VTfg9jWF1_VUoWXVhNWBZ-C29hW1Bfal5eaF0UAGZ4Wgx6AWtzV0AKVG5qf31UC2BoUkBoTmBdfQwB",
                dataScale: [0.060606242759278235, 0.060606242759278235, 0.060606242759278235],
                modelType: "obj",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [-13.06531287675375, -0.04048560650728472, -3.446571785341873],
                scale: [4, 4, 4],
                rotation: [0, 0.4338837391175581, 0, 0.9009688679024191],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "Gallery Card",
                color: 16777215,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 13421772,
                fullBright: true,
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=default",
                shadow: true,
                textureLocation: "./assets/datacenter.png",
                textureType: "image",
                type: "2d",
            }
        },
        {
            card: {
                translation: [-13.06531287675375, -0.04048560650728472, 2.822497077817051],
                scale: [4, 4, 4],
                rotation: [0, 0.4338837391175581, 0, 0.9009688679024191],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "Gallery Card",
                color: 16777215,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 13421772,
                fullBright: true,
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=genset",
                shadow: true,
                textureLocation: "./assets/Genset.png",
                textureType: "image",
                type: "2d",
            }
        },
        // {
        //     card: {
        //         name: "ambient sound",
        //         // translation: [0, 0, -2],
        //         // layers: ["pointer"],
        //         type: "object",
        //         behaviorModules: ["AmbientSound"],
        //         dataType: "aac",
        //         dataLocation: "./assets/sound/assets_sounds_AmbientMeadow.aac",
        //         // textureLocation: "./assets/images/mythos.png",
        //         loop: true,
        //         volume: 0.2,
        //         maxVolume: 0.3
        //     },
        //     id: "ambientSound"
        // },
    ];
}
