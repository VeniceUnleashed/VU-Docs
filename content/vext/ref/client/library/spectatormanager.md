---
title: SpectatorManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetSpectating](#getspectating)**() | bool |
| **[SetSpectating](#setspectating)**(spectating: bool) | void |
| **[SpectatePlayer](#spectateplayer)**(player: [Player](/vext/ref/client/type/player), firstPerson: bool) | void |
| **[GetSpectatedPlayer](#getspectatedplayer)**() | [Player](/vext/ref/client/type/player) \| nil |
| **[GetCameraMode](#getcameramode)**() | [SpectatorCameraMode](/vext/ref/shared/type/spectatorcameramode) |
| **[SetCameraMode](#setcameramode)**(mode: [SpectatorCameraMode](/vext/ref/shared/type/spectatorcameramode)) | void |
| **[GetFreecameraTransform](#getfreecameratransform)**() | [LinearTransform](/vext/ref/shared/type/lineartransform) \| nil |
| **[SetFreecameraTransform](#setfreecameratransform)**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform)) | void |

## Methods

### GetSpectating {#getspectating}

> **GetSpectating**(): bool

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### SetSpectating {#setspectating}

> **SetSpectating**(spectating: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **spectating** | bool |  |

### SpectatePlayer {#spectateplayer}

> **SpectatePlayer**(player: [Player](/vext/ref/client/type/player), firstPerson: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/client/type/player) |  |
| **firstPerson** | bool |  |

### GetSpectatedPlayer {#getspectatedplayer}

> **GetSpectatedPlayer**(): [Player](/vext/ref/client/type/player) \| nil

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)** \| **nil** |  |

### GetCameraMode {#getcameramode}

> **GetCameraMode**(): [SpectatorCameraMode](/vext/ref/shared/type/spectatorcameramode)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SpectatorCameraMode](/vext/ref/shared/type/spectatorcameramode)** |  |

### SetCameraMode {#setcameramode}

> **SetCameraMode**(mode: [SpectatorCameraMode](/vext/ref/shared/type/spectatorcameramode))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **mode** | [SpectatorCameraMode](/vext/ref/shared/type/spectatorcameramode) |  |

### GetFreecameraTransform {#getfreecameratransform}

> **GetFreecameraTransform**(): [LinearTransform](/vext/ref/shared/type/lineartransform) \| nil

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** \| **nil** |  |

### SetFreecameraTransform {#setfreecameratransform}

> **SetFreecameraTransform**(transform: [LinearTransform](/vext/ref/shared/type/lineartransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |

