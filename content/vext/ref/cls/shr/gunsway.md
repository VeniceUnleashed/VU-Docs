---
title: GunSway (Shared Class)
---
## Description

## Constructors

| Constructor                                                                              | Description |
| ---------------------------------------------------------------------------------------- | ----------- |
| [GunSway](/vext/ref/cls/shr/gunsway)([GunSway](/vext/ref/cls/shr/gunsway) **ref**) |             |

## Properties

| Name                                | Type                                                      | Writable | Description |
| ----------------------------------- | --------------------------------------------------------- | -------- | ----------- |
| data                                | [DataContainer](/vext/ref/cls/shr/datacontainer)       |          |             |
| cameraRecoilTransform               | [LinearTransform](/vext/ref/cls/shr/lineartransform)   |          |             |
| currentRecoilDeviation              | [GunSwayDeviation](/vext/ref/cls/shr/gunswaydeviation) |          |             |
| currentLagDeviation                 | [GunSwayDeviation](/vext/ref/cls/shr/gunswaydeviation) |          |             |
| currentDispersionDeviation          | [GunSwayDeviation](/vext/ref/cls/shr/gunswaydeviation) |          |             |
| timeSinceLastShot                   | float                                                     |          |             |
| dispersionAngle                     | float                                                     |          |             |
| minDispersionAngle                  | float                                                     |          |             |
| crossHairDispersionFactor           | float                                                     |          |             |
| currentGameplayDeviationScaleFactor | float                                                     |          |             |
| currentVisualDeviationScaleFactor   | float                                                     |          |             |
| suppressionMinDispersionAngleFactor | float                                                     |          |             |
| randomAngle                         | float                                                     |          |             |
| randomRadius                        | float                                                     |          |             |
| jumpingTimer                        | float                                                     |          |             |
| seed                                | int                                                       |          |             |
| initialFireShot                     | int                                                       |          |             |
| fireShot                            | bool                                                      |          |             |
| isFiring                            | bool                                                      |          |             |
| isJumping                           | bool                                                      |          |             |
| isMoving                            | bool                                                      |          |             |
