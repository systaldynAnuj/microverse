// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io
// import cors from 'cors'
// cors()

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
        "walker.js",
        "pendulum.js",
        "bouncingBall.js",
        "popup1.js",
        "popup.js",
        "addresses.js",
        "hinge.js",
        "cabinet.js",
        "replaceWorld.js"
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
                translation: [-23.065732644977682, 1.5, 4.403846500875137],
                scale: [7.2161079104362145, 7.2161079104362145, 7.2161079104362145],
                rotation: [0, 0.6943442042731282, 0, 0.7196430545710258],
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
        {
            card: {
                translation: [-23.065732644977682, 1.5, 16.295673295962665],
                scale: [7.2161079104362145, 7.2161079104362145, 7.2161079104362145],
                rotation: [0, 0.6943442042731282, 0, 0.7196430545710258],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "Gallery Card",
                color: 16777215,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 13421772,
                fullBright: true,
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=mutipleFloorBuilding",
                shadow: true,
                textureLocation: "./assets/MultipleFloorBuilding.png",
                textureType: "image",
                type: "2d",
            }
        },
        /* {
            card: {
                translation: [-10.357428402892292, -0.011999999254941773, 4.73407846009502],
                scale: [1.9487034643571386, 1.9487034643571386, 1.9487034643571386],
                rotation: [0, 0.9987967159732136, 0, -0.0490420244394946],
                layers: ["pointer"],
                dataLocation: "3f9pxr8WsMf6buxzva4Nj3paj2hQJQajo4aA3l97L37cDhISFhVcSUkADwoDFUgTFUgFFAkXEwMSSA8JSRNJHDMSETYpHCATKTVXLQ8BKzwPU1VfHiAiIV5WVEkPCUgFFAkXEwMSSAsPBRQJEAMUFQNICgkFBwoCAxACAwAHEwoSSTQiXzccFF4MESgVN1AWNl8HIz4MMBRfVQ4ONVECF1cnECsIEB8qPjYgA15JAgcSB0kPKD4fDl4-FlFTCxA-PxcWUCMMUjAXECsAJQUgKgxUIwUzLxNLHksMKjAz",
                dataScale: [0.004210526315789474, 0.004210526315789474, 0.004210526315789474],
                modelType: "obj",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["BirdsEye"]
            }
        }, 

        {
            card: {
                name: "pendulum",
                type: "object",
                translation: [-0.03701975732147922, 3.2368919013826734, 8.444841625884546],
                behaviorModules: ["Rapier", "Pendulum"],
                layers: ["pointer"],
                scale: [0.2, 0.2, 0.2],
                color: 0xaa6666,
            }
        }, 
        {
             card: {
                 translation: [0.6268722157475437, -0.5754735745204244, -12.46130656207122],
                 scale: [0.6781586159671087, 0.6781586159671087, 0.6781586159671087],
                 rotation: [-0.018779161463904976, 0.14412995084604677, 0.0001877284118336496, 0.9893805461610169],
                 layers: ["pointer"],
                 behaviorModules: ["VideoPlayer"],
                 fullBright: true,
                 height: 1,
                 pauseTime: 0.282029,
                 ranslation: [0.6869556955891094, -0.6425672886613045, -12.11102208165136],
                 textureHeight: 1024,
                 textureLocation: "./assets/nature.mp4",
                 textureType: "video",
                 textureWidth: 1024,
                 type: "2d",
                 width: 1,
             }
        },
        {
            card: {
                translation: [-15.340123919079822, 0.026000000745057816, -15.148374481199184],
                scale: [4, 4, 4],
                rotation: [0, 0.36909705876196064, 0, 0.9293908549223355],
                layers: ["pointer"],
                name: "/insta.png",
                cornerRadius: 0.02,
                fileName: "/insta.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3dWoyBSj-aQG1dgoav0NQYdjKEdsgUzlGLZdjitAetpEDBAQFBdeS0sCDQgBF0oRF0oHFgsVEQEQSg0LSxFLHjEQEzQrHiIRKzdVLw0DKT4NUVddHCIgI1xUVksNC0oHFgsVEQEQSgkNBxYLEgEWFwFKCAsHBQgAARIAAQIFEQgQSygsCgw2NRAyIjUFEgkhKwJQISgLEycxKiYrSQVJNQcAJx0XAC4jN0kuUFRLAAUQBUsRHUkyNhcXKA4rLlcrChIdAQ8NHlUKJhEdChZJF10FFSMKXS8mUhFRMgxQ",
                textureType: "image",
                type: "2d",
                behaviorModules: ["GridFloor"]
            }
        },
         {
             card: {
                 translation: [-0.5263805183765, -1.561177473928344, -12.934745476429901],
                 rotation: [0, -0.12604278039742367, 0, -0.9920248069023712],
                 layers: ["pointer"],
                 name: "/rack.zip",
                 dataLocation: "3JRPuN7kazF1mvX4hXm-O7KqQrfkSCKf1UcsxiXQLXvsIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lMB8-PRoFMAw_BRl7ASMtBxAjf3lzMgwODXJ6eGUjJWQpOCU7Py8-ZCcjKTglPC84OS9kJiUpKyYuLzwuLywrPyY-ZX4_LC1zMxsABXt8Agx7GzIVDAt5cgJ6DgQyLWcZJjkzZ30rJC5yczl8GnplLis-K2ULMiEiHhh6Gh8jHxI8fCAuAX0NMDgNfnwLLwMsfT4-HQAZGBsmPTsPPnMf",
                 dataScale: [0.058046587964667384, 0.058046587964667384, 0.058046587964667384],
                 scale: [4, 4, 4],
                 fileName: "/rack.zip",
                 modelType: "zip",
                 shadow: true,
                 singleSided: true,
                 type: "3d",

             }
         },
         {
             card: {
                 translation: [-0.44667715925424556, -1.2250368105037017, -18.447304243382284],
                 scale: [0.2, 0.2, 0.2],
                 rotation: [0, -0.5665678226988718, 0, 0.8240151104696198],
                 layers: ["pointer"],
                 dataLocation: "3kV5UVtW1DjT7zSaUhkEIA7PZ1RGLMjyTKEIslLjCvxUAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5EET4fHDskES0eJDhaIAIMJjECXlhSEy0vLFNbWUQCBEUIGQQaHg4fRQYCCBkEHQ4ZGA5FBwQICgcPDh0PDg0KHgcfRFIyWDgpMwwZHCUKODEfChw8Hi44I0YsAlwHO0YsRgonWDEHEyIhExggDz5EDwofCkQIOS1SJjsRAlMcOV08Rl8xAgkTWxo5JAEkPTkIBB8AOVkpPCInEgAsHTEA",
                 dataScale: [0.02087765502208797, 0.02087765502208797, 0.02087765502208797],
                 modelType: "obj",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
                 behaviorModules: ["Popup1"]
             }
         },
         {
             card: {
                 translation: [-5.9142739629234, -1.6364968001549172, -6.198983382296922],
                 rotation: [0, 0.024758894323029447, 0, 0.9996934515899868],
                 scale: [1, 1, 1],
                 layers: ["pointer"],
                 dataLocation: "38lugc9UtGOU78Mu1_5mizq1L9Wv2WtYITRFoUV2C8HEUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XQm1MT2h3Qn5Nd2sJc1FfdWJRDQsBQH58fwAIChdRVxZbSldJTV1MFlVRW0pXTl1KS10WVFdbWVRcXU5cXV5ZTVRMFwFPfQBfb1t7SA1WCFcMfkBPXWIJSFN8Dgx8D2wOSXZfAEt7S1xtckwKU2kXXFlMWRcICwBRWlNBT2kVdwxBbW1UWnNWCm1Wa3FKXl9RW3J7aXVOFV1Rc15wcV9x",
                 dataScale: [0.0008888888888888889, 0.0008888888888888889, 0.0008888888888888889],
                 modelType: "obj",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
                 behaviorModules: ["Popup"],
                 behaviorModules: ["BirdsEye"]
             }
},*/
        {
            card: {
                translation: [-0.31738367907205767, 0.5570427576256959, -12.85702407857197],
                scale: [1.6677496332753772, 1.6677496332753772, 1.6677496332753772],
                rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                behaviorModules: ["Elected", "BitcoinTracker"],
                name: "bitcointracker",
                cornerRadius: 0.1,
                depth: 0.05,
                frameColor: 16777215,
                height: 0.75,
                textureHeight: 768,
                textureType: "canvas",
                textureWidth: 1024,
                type: "2d",
                width: 1,
            },
            id: "main",
        },
        {
            card: {
                name: "bar graph",
                translation: [0, -0.3, 0.1],
                color: 0xEEEEEE,
                frameColor: 0xEEEEEE,
                type: "object",
                height: 0.4,
                parent: "main",
                behaviorModules: ["BarGraph"],
            }
        },
        {
            card: {
                translation: [12, 0.7, -10.24],
                scale: [3, 3, 3],
                rotation: [-0.9999712864804526, 4.640191999542268e-19, -0.007578008618930487, 6.123058176137736e-17],
                layers: ["pointer"],
                behaviorModules: ["BouncingBall"],
                name: "bouncinglogo",
                color: 16777215,
                dataLocation: "./assets/SVG/full-circle.svg",
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                height: 1,
                textureHeight: 1024,
                textureType: "dynamic",
                textureWidth: 1024,
                type: "2d",
                width: 1,
            }
        },
        {
            card: {
                translation: [0, -1.4662436025633672, -6],
                scale: [4.4113310161079085, 4.4113310161079085, 4.4113310161079085],
                rotation: [0, 0, 0, -1],
                layers: ["pointer"],
                name: "/data centre.glb",
                dataLocation: "388DqI6YVfffsS0OB-iltm-7TDOh9H_tfhVKouiQYBkYUExMSEsCFxdeUVRdSxZNSxZbSldJTV1MFlFXF00XQm1MT2h3Qn5Nd2sJc1FfdWJRDQsBQH58fwAIChdRVxZbSldJTV1MFlVRW0pXTl1KS10WVFdbWVRcXU5cXV5ZTVRMF0p8XUtgVmxXe1VgXVV_SnpZcklxVQtBFXBJCFVxDghPSgh1eXIJTVYBVWkXXFlMWRdBclZNe3N1dlxwVFpwTwx3c0JxcHoKYmtzWm4JdABxCQoNW2t1T3sMS091",
                dataScale: [12.813889491659097, 12.813889491659097, 12.813889491659097],
                fileName: "/data centre.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
    ];
}