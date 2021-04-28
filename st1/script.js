TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "bleaching": 0.7,
      "bleachingDistance": 0.34,
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_1B6E12C6_1783_3BF6_41B2_7D557CCC179D",
      "pitch": 3.33,
      "yaw": -14.95
     },
     {
      "id": "overlay_1A060681_178D_1A6A_41A0_E3DD313BF003",
      "data": {
       "label": "3"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "pitch": -32.6,
        "yaw": -141.48,
        "hfov": 22.58,
        "image": {
         "colCount": 5,
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2_0_HS_0_0.png",
           "width": 925,
           "height": 540
          }
         ],
         "rowCount": 6,
         "frameCount": 30,
         "class": "AnimatedImageResource",
         "frameDuration": 41
        },
        "class": "HotspotPanoramaOverlayImage",
        "distance": 100
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555, this.camera_180AA0CD_1785_77FA_41B5_3F26B7A0ABD3); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "maps": []
     }
    ],
    "thumbnailUrl": "media/panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2_t.jpg",
    "sphere": {
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2_hq.jpeg",
       "width": 6080,
       "height": 3040
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2_lq.jpeg",
       "width": 2048,
       "tags": "preload",
       "height": 1024
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2.jpeg",
       "width": 4002,
       "height": 2001
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 133,
  "adjacentPanoramas": [
   {
    "yaw": -141.48,
    "class": "AdjacentPanorama",
    "distance": 1,
    "panorama": {
     "class": "Panorama",
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "yaw": -105.55,
       "class": "AdjacentPanorama",
       "distance": 1,
       "panorama": {
        "class": "Panorama",
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "yaw": 87.26,
          "class": "AdjacentPanorama",
          "distance": 1,
          "panorama": "this.panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555",
          "backwardYaw": -105.55
         }
        ],
        "id": "panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF",
        "hfovMin": 120,
        "pitch": 0,
        "vfov": 180,
        "hfov": 360,
        "thumbnailUrl": "media/panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF_t.jpg",
        "label": "st1_IMG_20210410_050903_00_merged",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "id": "overlay_18A59A08_178D_0A79_41B5_8A41AFE75384",
            "data": {
             "label": "3"
            },
            "rollOverDisplay": false,
            "items": [
             {
              "pitch": -49.18,
              "yaw": 87.26,
              "hfov": 26.22,
              "image": {
               "colCount": 5,
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF_0_HS_0_0.png",
                 "width": 925,
                 "height": 540
                }
               ],
               "rowCount": 6,
               "frameCount": 30,
               "class": "AnimatedImageResource",
               "frameDuration": 41
              },
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555, this.camera_18E0509E_1785_7796_41A8_7E4958A6F0F6); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "useHandCursor": true,
            "maps": []
           }
          ],
          "thumbnailUrl": "media/panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF_t.jpg",
          "sphere": {
           "levels": [
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF_hq.jpeg",
             "width": 6080,
             "height": 3040
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF_lq.jpeg",
             "width": 2048,
             "tags": "preload",
             "height": 1024
            },
            {
             "class": "ImageResourceLevel",
             "url": "media/panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF.jpeg",
             "width": 4002,
             "height": 2001
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "partial": false
       },
       "backwardYaw": 87.26
      },
      {
       "yaw": -39.36,
       "class": "AdjacentPanorama",
       "distance": 1,
       "panorama": "this.panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2",
       "backwardYaw": -141.48
      }
     ],
     "id": "panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555",
     "hfovMin": 120,
     "pitch": 0,
     "vfov": 180,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555_t.jpg",
     "label": "st11_IMG_20210410_050542_00_merged",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "id": "overlay_195B80AA_178F_77BE_4188_6F722B5E2930",
         "data": {
          "label": "3"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "pitch": -54.7,
           "yaw": -105.55,
           "hfov": 19.26,
           "image": {
            "colCount": 5,
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555_0_HS_0_0.png",
              "width": 925,
              "height": 540
             }
            ],
            "rowCount": 6,
            "frameCount": 30,
            "class": "AnimatedImageResource",
            "frameDuration": 41
           },
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF, this.camera_18BEF024_1785_76AA_41B7_033749B8EDD5); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "useHandCursor": true,
         "maps": []
        },
        {
         "id": "overlay_1893FED9_178D_0B9A_41B0_42DCC3061368",
         "data": {
          "label": "3"
         },
         "rollOverDisplay": false,
         "items": [
          {
           "pitch": -39.5,
           "yaw": -39.36,
           "hfov": 20.48,
           "image": {
            "colCount": 5,
            "levels": [
             {
              "class": "ImageResourceLevel",
              "url": "media/panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555_0_HS_1_0.png",
              "width": 925,
              "height": 540
             }
            ],
            "rowCount": 6,
            "frameCount": 30,
            "class": "AnimatedImageResource",
            "frameDuration": 41
           },
           "class": "HotspotPanoramaOverlayImage",
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2, this.camera_18D8D059_1785_769A_419A_E630BB6B2A34); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "useHandCursor": true,
         "maps": []
        }
       ],
       "thumbnailUrl": "media/panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555_t.jpg",
       "sphere": {
        "levels": [
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555_hq.jpeg",
          "width": 6080,
          "height": 3040
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555_lq.jpeg",
          "width": 2048,
          "tags": "preload",
          "height": 1024
         },
         {
          "class": "ImageResourceLevel",
          "url": "media/panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555.jpeg",
          "width": 4002,
          "height": 2001
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "partial": false
    },
    "backwardYaw": -39.36
   }
  ],
  "id": "panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2",
  "hfovMin": 120,
  "pitch": 0,
  "vfov": 180,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2_t.jpg",
  "label": "st10_1_IMG_20210410_050411_00_merged",
  "class": "Panorama",
  "partial": false
 },
 {
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration"
 },
 {
  "id": "panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2_camera",
  "idleSequence": {
   "movements": [
    {
     "targetPitch": -12.75,
     "easing": "cubic_in_out",
     "targetYaw": -19.47,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "targetPitch": -8.73,
     "easing": "cubic_in_out",
     "targetYaw": 154.12,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "id": "sequence_1BF45D09_1785_0E7A_41AE_9CB884A15C8F",
   "restartMovementDelay": 3000,
   "restartMovementOnUserInteraction": true,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 3000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 133,
   "pitch": -9.58,
   "yaw": -163.59
  },
  "initialSequence": "this.sequence_1BF45D09_1785_0E7A_41AE_9CB884A15C8F",
  "manualZoomSpeed": 2
 },
 "this.panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555",
 {
  "id": "panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555_camera",
  "idleSequence": {
   "movements": [
    {
     "targetPitch": -8.98,
     "easing": "cubic_in_out",
     "targetYaw": 96.09,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "targetPitch": -10.74,
     "easing": "cubic_in_out",
     "targetYaw": -105.89,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "id": "sequence_1B5F1399_1787_199A_4140_7213A1B37708",
   "restartMovementDelay": 3000,
   "restartMovementOnUserInteraction": true,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 3000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.41,
   "pitch": -12.67
  },
  "initialSequence": "this.sequence_1B5F1399_1787_199A_4140_7213A1B37708"
 },
 "this.panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF",
 {
  "id": "panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF_camera",
  "idleSequence": {
   "movements": [
    {
     "targetPitch": -10.74,
     "easing": "cubic_in_out",
     "targetYaw": -108.15,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "targetPitch": -15.26,
     "easing": "cubic_in_out",
     "targetYaw": 162.16,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "id": "sequence_1985B02E_1782_F6B9_4199_BEC0847CB90F",
   "restartMovementDelay": 3000,
   "restartMovementOnUserInteraction": true,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 3000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 51.65,
   "pitch": -13.42
  },
  "initialSequence": "this.sequence_1985B02E_1782_F6B9_4199_BEC0847CB90F"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_1C7D0CC9_177D_0FFA_41A3_555E141DD8B2",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_1D8BD4BA_177F_7F9E_41B3_13D970190555",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF",
    "camera": "this.panorama_1DDFF715_177F_1A6A_4152_30C305DDEEFF_camera"
   }
  ]
 },
 {
  "id": "camera_18BEF024_1785_76AA_41B7_033749B8EDD5",
  "idleSequence": {
   "movements": [
    {
     "targetPitch": -13.42,
     "easing": "cubic_in_out",
     "targetYaw": 51.65,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 30.26,
     "pitchSpeed": 15.56,
     "path": "shortest"
    },
    {
     "targetPitch": -10.74,
     "easing": "cubic_in_out",
     "targetYaw": -108.15,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "targetPitch": -15.26,
     "easing": "cubic_in_out",
     "targetYaw": 162.16,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "id": "sequence_18BE8024_1785_76AA_41AE_3DB359C94F1B",
   "restartMovementDelay": 3000,
   "restartMovementOnUserInteraction": true,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 3000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.74,
   "pitch": 0
  },
  "initialSequence": "this.sequence_18BE8024_1785_76AA_41AE_3DB359C94F1B"
 },
 {
  "id": "camera_18D8D059_1785_769A_419A_E630BB6B2A34",
  "idleSequence": {
   "movements": [
    {
     "targetPitch": -9.58,
     "easing": "cubic_in_out",
     "targetYaw": -163.59,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 46.27,
     "pitchSpeed": 23.53,
     "path": "shortest"
    },
    {
     "targetPitch": -12.75,
     "easing": "cubic_in_out",
     "targetYaw": -19.47,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "targetPitch": -8.73,
     "easing": "cubic_in_out",
     "targetYaw": 154.12,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "id": "sequence_18D8E059_1785_769A_4198_92D7D5B4064D",
   "restartMovementDelay": 3000,
   "restartMovementOnUserInteraction": true,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 3000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 133,
   "pitch": 0,
   "yaw": 38.52
  },
  "initialSequence": "this.sequence_18D8E059_1785_769A_4198_92D7D5B4064D",
  "manualZoomSpeed": 2
 },
 {
  "id": "camera_18E0509E_1785_7796_41A8_7E4958A6F0F6",
  "idleSequence": {
   "movements": [
    {
     "targetPitch": -12.67,
     "easing": "cubic_in_out",
     "targetYaw": -24.41,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 27.66,
     "pitchSpeed": 14.27,
     "path": "shortest"
    },
    {
     "targetPitch": -8.98,
     "easing": "cubic_in_out",
     "targetYaw": 96.09,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "targetPitch": -10.74,
     "easing": "cubic_in_out",
     "targetYaw": -105.89,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "id": "sequence_18E0609E_1785_7796_41A0_4F878CD9339B",
   "restartMovementDelay": 3000,
   "restartMovementOnUserInteraction": true,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 3000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 74.45,
   "pitch": 0
  },
  "initialSequence": "this.sequence_18E0609E_1785_7796_41A0_4F878CD9339B"
 },
 {
  "id": "camera_180AA0CD_1785_77FA_41B5_3F26B7A0ABD3",
  "idleSequence": {
   "movements": [
    {
     "targetPitch": -12.67,
     "easing": "cubic_in_out",
     "targetYaw": -24.41,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 45.28,
     "pitchSpeed": 23.04,
     "path": "shortest"
    },
    {
     "targetPitch": -8.98,
     "easing": "cubic_in_out",
     "targetYaw": 96.09,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    },
    {
     "targetPitch": -10.74,
     "easing": "cubic_in_out",
     "targetYaw": -105.89,
     "class": "TargetPanoramaCameraMovement",
     "yawSpeed": 33.25,
     "pitchSpeed": 17.05,
     "path": "shortest"
    }
   ],
   "id": "sequence_180D40CD_1785_778A_41B0_855556238CF4",
   "restartMovementDelay": 3000,
   "restartMovementOnUserInteraction": true,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 3000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 140.64,
   "pitch": 0
  },
  "initialSequence": "this.sequence_180D40CD_1785_778A_41B0_855556238CF4"
 }
], "children": [
 {
  "minHeight": 50,
  "toolTipFontWeight": "normal",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontSize": "1.11vh",
  "progressBorderColor": "#000000",
  "toolTipOpacity": 1,
  "toolTipShadowOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "progressHeight": 10,
  "progressBottom": 0,
  "toolTipPaddingBottom": 4,
  "progressLeft": 0,
  "paddingRight": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "progressBarOpacity": 1,
  "toolTipShadowSpread": 0,
  "progressOpacity": 1,
  "progressBarBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "progressBarBorderSize": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBorderSize": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowVerticalLength": 0,
  "transitionDuration": 500,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "paddingLeft": 0,
  "playbackBarHeadShadow": true,
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "class": "ViewerArea",
  "paddingTop": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "height": "100%",
  "playbackBarHeadHeight": 15,
  "width": "100%",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBorderRadius": 0,
  "toolTipPaddingTop": 4,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "minWidth": 100,
  "toolTipBorderRadius": 3,
  "toolTipFontColor": "#606060",
  "borderRadius": 0,
  "progressBackgroundOpacity": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "propagateClick": false,
  "playbackBarHeadShadowOpacity": 0.7,
  "id": "MainViewer",
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "toolTipDisplayTime": 600,
  "playbackBarRight": 0,
  "toolTipPaddingLeft": 6,
  "transitionMode": "blending",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarBottom": 5,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBorderSize": 0,
  "borderSize": 0,
  "toolTipTextShadowColor": "#000000"
 }
], 
 "mouseWheelEnabled": true,
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player546"
 },
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "gap": 10,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "creationPolicy": "delayed",
 "paddingRight": 0,
 "minWidth": 20,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "propagateClick": false,
 "shadow": false,
 "id": "rootPlayer",
 "overflow": "visible",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minHeight": 20,
 "scripts": {
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "existsKey": function(key){  return key in window; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = self.getPixels(w.get('titleFontSize')) + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = result[1]; var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); }
 },
 "class": "Player",
 "borderSize": 0
})