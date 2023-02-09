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
        /*  {
             card: {
                 translation: [-0.7150365493620092, -1.691351588596781, -10.00716946406379],
                 scale: [22.764227968494644, 22.764227968494644, 22.764227968494644],
                 rotation: [0, 0.18952463890259078, 0, 0.9818759653076568],
                 layers: ["pointer"],
                 name: "/ground floor.glb",
                 dataLocation: "34rrTMqdRMFYEhahp_j-J2X9Mo_IOpv8n3GE5beqN4a4XEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbTmFAQ2R7TnJBe2cFf11TeW5dAQcNTHJwcwwEBhtdWxpXRltFQVFAGlldV0ZbQlFGR1EaWFtXVVhQUUJQUVJVQVhAG1xwQ0wAc3AZQnlna3sBXn5mZHtCTG5cYHBiXm1uW1N9UndfBGtuR0B4Z1sbUFVAVRtSe1F7AnJiblFieXBWYHpkY3lgflZ6ZUx-a3drRUVSfUNEX1VmbllxQ0xf",
                 dataScale: [12.558032602217754, 12.558032602217754, 12.558032602217754],
                 fileName: "/ground floor.glb",
                 modelType: "glb",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
 
             }
         },
         {
             card: {
                 translation: [-75.76277538619055, -1.079466964418657, -40.36459972261274],
                 scale: [1.4938622599730336, 1.4938622599730336, 1.4938622599730336],
                 rotation: [-0.01071856011687785, -0.2157513572952766, 0.005973234473161986, -0.9763712330687526],
                 layers: ["pointer"],
                 name: "/rack.glb",
                 dataLocation: "39s7Sc77n7jBJwIc2nA6b1DReRgQ8xuXNMG-Tjar5AlYUU1NSUoDFhZfUFVcShdMShdaS1ZITFxNF1BWFkwWQ2xNTml2Q39MdmoIclBedGNQDAoAQX99fgEJCxZQVhdaS1ZITFxNF1RQWktWT1xLSlwXVVZaWFVdXE9dXF9YTFVNFngOT30UYw9OUUoLWGhdaGhvbG5paQtpdghcVgtjU2lJCgoOb2FcdFVSaFYWXVhNWBYIdFVWYHdzAGptcWlRSFVKDkNIawxwVXhzT0EOX1QOC156dUEPa29jdUFg",
                 dataScale: [101.8858142364767, 101.8858142364767, 101.8858142364767],
                 fileName: "/rack.glb",
                 modelType: "glb",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
 
             }
         },
         
         {
             card : {
                 translation: [-16.223844177390564, -0.9296556607665776, -13.799895776080328],
                 rotation: [0, 0.9793615098700499, 0, -0.20211638475159865],
                 layers: ["pointer"],
                 name: "/UPS (1).glb",
                 dataLocation: "3TEmusvZIYpMv4kIlsULb0SsVhiXBW9ODkOiSC9_B5KwPCAgJCdue3syPTgxJ3ohJ3o3JjslITEgej07eyF7LgEgIwQbLhIhGwdlHz0zGQ49YWdtLBIQE2xkZns9O3o3JjslITEgejk9NyY7IjEmJzF6ODs3NTgwMSIwMTI1ITgge3kzZWciFzcRNxsDEgMtDTszDhAFJzU7NiE_HWU7HgUkEAJmGmATDRlnAR17MDUgNXsnLAY7OCYTPXkAFmE-ADh5Dh0mJhE4EB8wNgA5NQUhH3kCNgERZwQEHydg",
                 dataScale: [64.01230341899992, 64.01230341899992, 64.01230341899992],
                 fileName: "/UPS (1).glb",
                 modelType: "glb",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
             
             
             }
         },
         {
             card: {
                 translation: [-19.946612637503303, -0.7877346480805101, -12.619655274585337],
                 rotation: [0, 0.9793615098700499, 0, -0.20211638475159865],
                 layers: ["pointer"],
                 name: "/UPS (1).glb",
                 dataLocation: "3TEmusvZIYpMv4kIlsULb0SsVhiXBW9ODkOiSC9_B5KwPCAgJCdue3syPTgxJ3ohJ3o3JjslITEgej07eyF7LgEgIwQbLhIhGwdlHz0zGQ49YWdtLBIQE2xkZns9O3o3JjslITEgejk9NyY7IjEmJzF6ODs3NTgwMSIwMTI1ITgge3kzZWciFzcRNxsDEgMtDTszDhAFJzU7NiE_HWU7HgUkEAJmGmATDRlnAR17MDUgNXsnLAY7OCYTPXkAFmE-ADh5Dh0mJhE4EB8wNgA5NQUhH3kCNgERZwQEHydg",
                 dataScale: [64.01230341899992, 64.01230341899992, 64.01230341899992],
                 fileName: "/UPS (1).glb",
                 modelType: "glb",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
             
             }
         },
         {
             card: {
                 translation: [-18.02234913108743, -0.9029991949038924, -24.75614140144284],
                 scale: [1.6215843876903206, 1.6215843876903206, 1.6215843876903206],
                 rotation: [0, 0.8484318224366694, 0, 0.5293046784950912],
                 layers: ["pointer"],
                 name: "/electrical panel.glb",
                 dataLocation: "3No_d9e0wUK6reHSz52Nwp61D46nVitXd_4tWDU4R5AoJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthNBs6OR4BNAg7AR1_BScpAxQne313NggKCXZ-fGEnIWAtPCE_Oys6YCMnLTwhOCs8PStgIiEtLyIqKzgqKygvOyI6YRkMY3sWLA8fPxkfYyUGFxgfDx8lFCctBTgpFhk_Fy86CQQ-GHklDwkJJ3phKi86L2EUCAQ2Bx8rHDwMIiY6HX14CA0FBnYmGBwmHzQ0HSwWJAYcdhkeAxoZehwH",
                 dataScale: [1.358306317637537, 1.358306317637537, 1.358306317637537],
                 fileName: "/electrical panel.glb",
                 modelType: "glb",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
             
             
             }
         },
         {
             card: {
                 translation: [-24.746713212737223, -0.9029991949038924, -22.74447771705776],
                 scale: [1.6215843876903206, 1.6215843876903206, 1.6215843876903206],
                 rotation: [0, 0.8484318224366694, 0, 0.5293046784950912],
                 layers: ["pointer"],
                 name: "/electrical panel.glb",
                 dataLocation: "3No_d9e0wUK6reHSz52Nwp61D46nVitXd_4tWDU4R5AoJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthNBs6OR4BNAg7AR1_BScpAxQne313NggKCXZ-fGEnIWAtPCE_Oys6YCMnLTwhOCs8PStgIiEtLyIqKzgqKygvOyI6YRkMY3sWLA8fPxkfYyUGFxgfDx8lFCctBTgpFhk_Fy86CQQ-GHklDwkJJ3phKi86L2EUCAQ2Bx8rHDwMIiY6HX14CA0FBnYmGBwmHzQ0HSwWJAYcdhkeAxoZehwH",
                 dataScale: [1.358306317637537, 1.358306317637537, 1.358306317637537],
                 fileName: "/electrical panel.glb",
                 modelType: "glb",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
             
             }
         } */
        /*  {
             card: {
                 translation: [3.5999808431090865, -0.011999999254941773, -9.044451670164078],
                 rotation: [0, 0.035151380558554, 0, -0.9993819992599566],
                 layers: ["pointer"],
                 name: "/untitled.glb",
                 dataLocation: "3JhpUj3dPznGe93xeJw_P65j-iGldcSPMf28XbFWFccYIj4-OjlwZWUsIyYvOWQ_OWQpOCU7Py8-ZCMlZT9lMB8-PRoFMAw_BRl7ASMtBxAjf3lzMgwODXJ6eGUjJWQpOCU7Py8-ZCcjKTglPC84OS9kJiUpKyYuLzwuLywrPyY-ZX0FGwEpLXkEOyMeEHouPjgMejh7ex54KDg7Mz47e3h-HjIDJ38JAnkSIXplLis-K2UDIR0ZIxouBwF_c34beRA5Og45FSICBw4tDyByLgADDR99cgwgOTgaCTgh",
                 dataScale: [4.079472851936938, 4.079472851936938, 4.079472851936938],
                 fileName: "/untitled.glb",
                 modelType: "glb",
                 shadow: true,
                 singleSided: true,
                 type: "3d",
 
             }
         }, */

        {
            card: {
                translation: [-5.776266954105247, -1.8532531796099123, -9.124643566260417],
                scale: [1.5828037436247224, 1.5828037436247224, 1.5828037436247224],
                rotation: [0, -0.9964810215880073, 0, 0.08381869490109062],
                layers: ["pointer", "walk"],
                name: "/1.glb",
                dataLocation: "3Kn36FHuyZqIIcUcRtSz4ixCjAAVIA_Ki_6oLVxI0LSUIz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kMR4_PBsEMQ0-BBh6ACIsBhEifnhyMw0PDHN7eWQiJGUoOSQ6Pi4_ZSYiKDkkPS45OC5lJyQoKicvLj0vLi0qPic_ZBp6GykUcxw-HCx7BxobPno7HXkEPBIPei8zHRQ8Hjg-CBQ8AiYxETk7fQZkLyo_KmR-LQ4tByAGBAY8fBssCiIxMgc6Enk_H3wEGggmHwwxAHJ6IxMNDiAYOH8g",
                dataScale: [5.326770640946734, 5.326770640946734, 5.326770640946734],
                fileName: "/1.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [-6.072225145349244, -2.0408024354533243, -9.077581250121543],
                scale: [0.8442049071738823, 0.8442049071738823, 0.8442049071738823],
                rotation: [0, -0.9981104151764626, 0, 0.06144590398285009],
                layers: ["pointer", "walk"],
                name: "/2.glb",
                dataLocation: "3cWwBR9I6iS9arxKy_DIsuTk3P7dzQXG-mIE3j9LVvtsCxcXExBZTEwFCg8GEE0WEE0AEQwSFgYXTQoMTBZMGTYXFDMsGSUWLDBSKAoELjkKVlBaGyUnJFtTUUwKDE0AEQwSFgYXTQ4KABEMFQYREAZNDwwAAg8HBhUHBgUCFg8XTDtUGSwkEyUrNQwFDg4mEyI0WwoqKAs6NAwCBzArGSsrATULAig3CQAPWzpMBwIXAkw7BwAvAQ0IFE4OLiksLC5UKwVXCCwzG1I5MyQQByYVBgEOMTYiLhsOOhIm",
                dataScale: [10.7205202992503, 10.7205202992503, 10.7205202992503],
                fileName: "/2.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [-6.090533746005272, -0.8470962549125511, -10.824870130296064],
                scale: [0.5087953080952097, 0.5087953080952097, 0.5087953080952097],
                rotation: [0, 0.998708371448261, 0, -0.05080933771623372],
                layers: ["pointer", "walk"],
                name: "/3.glb",
                dataLocation: "3tQz833OWkVvxUacL8CDPS8tifsGGZuyoYt4vXGySAs4HAAABAdOW1sSHRgRB1oBB1oXBhsFAREAWh0bWwFbDiEAAyQ7DjIBOydFPx0TOS4dQUdNDDIwM0xERlsdG1oXBhsFAREAWhkdFwYbAhEGBxFaGBsXFRgQEQIQERIVARgAWz4uIy4HExcwQxpFRjocA0YeHzEuAiEVMkU3Ji0iIEQSHUwHKwIWRAAwTQNbEBUAFVshBh8fGkBDBhcQPEc3IUMgHSAwOBMxGicGEhU_BCYVQkwNI0AVPjhEEzUt",
                dataScale: [10.457580224097061, 10.457580224097061, 10.457580224097061],
                fileName: "/3.glb",
                modelType: "glb",
                ranslation: [-5.4591476689473595, -0.860176642470907, -11.263741549835393],
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },

        {
            card: {
                translation: [-12.627742557393162, -0.008830421087125284, -8.791482812205492],
                scale: [4, 4, 4],
                rotation: [0, 0.5331035888206901, 0, 0.8460499770028367],
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
        
        {
            card: {
                translation: [-11.317763941446788, 0.03233242976709971, -1.7390777804941608],
                scale: [3.558589955200652, 3.558589955200652, 3.558589955200652],
                rotation: [0, 0.6005898677394383, 0, -0.7995572592183273],
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
    ];
}
