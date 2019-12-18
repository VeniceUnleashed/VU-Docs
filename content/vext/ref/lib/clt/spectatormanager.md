---
title: SpectatorManager (Client Library)
---
## Description

## Methods

| Type                                                            | Name                                              | Parameters                                                               |
| --------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| void                                                            | [SpectatePlayer](#spectateplayer)                 | [Player](/vext/ref/cls/clt/player) **player**, bool **firstPerson**   |
| [Player](/vext/ref/cls/clt/player)                           | [GetSpectatedPlayer](#getspectatedplayer)         |                                                                          |
| [SpectatorCameraMode](/vext/ref/cls/shr/spectatorcameramode) | [GetCameraMode](#getcameramode)                   |                                                                          |
| void                                                            | [SetCameraMode](#setcameramode)                   | [SpectatorCameraMode](/vext/ref/cls/shr/spectatorcameramode) **mode** |
| [LinearTransform](/vext/ref/cls/shr/lineartransform)         | [GetFreecameraTransform](#getfreecameratransform) |                                                                          |
| void                                                            | [SetFreecameraTransform](#setfreecameratransform) | [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**    |

### SpectatePlayer

> void **SpectatePlayer**([Player](/vext/ref/cls/clt/player) **player**, bool **firstPerson**)

#### Parameters

| Name        | Type                                  | Description |
| ----------- | ------------------------------------- | ----------- |
| player      | [Player](/vext/ref/cls/clt/player) |             |
| firstPerson | bool                                  |             |

### GetSpectatedPlayer

> [Player](/vext/ref/cls/clt/player) **GetSpectatedPlayer**()

### GetCameraMode

> [SpectatorCameraMode](/vext/ref/cls/shr/spectatorcameramode) **GetCameraMode**()

### SetCameraMode

> void **SetCameraMode**([SpectatorCameraMode](/vext/ref/cls/shr/spectatorcameramode) **mode**)

#### Parameters

| Name | Type                                                            | Description |
| ---- | --------------------------------------------------------------- | ----------- |
| mode | [SpectatorCameraMode](/vext/ref/cls/shr/spectatorcameramode) |             |

### GetFreecameraTransform

> [LinearTransform](/vext/ref/cls/shr/lineartransform) **GetFreecameraTransform**()

### SetFreecameraTransform

> void **SetFreecameraTransform**([LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| transform | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |
