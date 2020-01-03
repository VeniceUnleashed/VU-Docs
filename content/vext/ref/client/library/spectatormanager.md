---
title: SpectatorManager
---
## Description

## Methods

| Type                                                            | Name                                              | Parameters                                                               |
| --------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| void                                                            | [SpectatePlayer](#spectateplayer)                 | [Player](/vext/ref/client/class/player) **player**, bool **firstPerson**   |
| [Player](/vext/ref/client/class/player)                           | [GetSpectatedPlayer](#getspectatedplayer)         |                                                                          |
| [SpectatorCameraMode](/vext/ref/shared/class/spectatorcameramode) | [GetCameraMode](#getcameramode)                   |                                                                          |
| void                                                            | [SetCameraMode](#setcameramode)                   | [SpectatorCameraMode](/vext/ref/shared/class/spectatorcameramode) **mode** |
| [LinearTransform](/vext/ref/shared/class/lineartransform)         | [GetFreecameraTransform](#getfreecameratransform) |                                                                          |
| void                                                            | [SetFreecameraTransform](#setfreecameratransform) | [LinearTransform](/vext/ref/shared/class/lineartransform) **transform**    |

### SpectatePlayer

> void **SpectatePlayer**([Player](/vext/ref/client/class/player) **player**, bool **firstPerson**)

#### Parameters

| Name        | Type                                  | Description |
| ----------- | ------------------------------------- | ----------- |
| player      | [Player](/vext/ref/client/class/player) |             |
| firstPerson | bool                                  |             |

### GetSpectatedPlayer

> [Player](/vext/ref/client/class/player) **GetSpectatedPlayer**()

### GetCameraMode

> [SpectatorCameraMode](/vext/ref/shared/class/spectatorcameramode) **GetCameraMode**()

### SetCameraMode

> void **SetCameraMode**([SpectatorCameraMode](/vext/ref/shared/class/spectatorcameramode) **mode**)

#### Parameters

| Name | Type                                                            | Description |
| ---- | --------------------------------------------------------------- | ----------- |
| mode | [SpectatorCameraMode](/vext/ref/shared/class/spectatorcameramode) |             |

### GetFreecameraTransform

> [LinearTransform](/vext/ref/shared/class/lineartransform) **GetFreecameraTransform**()

### SetFreecameraTransform

> void **SetFreecameraTransform**([LinearTransform](/vext/ref/shared/class/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| transform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
