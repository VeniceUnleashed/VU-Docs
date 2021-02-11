---
title: ClientUtils
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetCameraTransform](#getcameratransform)**() | [LinearTransform](/vext/ref/shared/type/lineartransform) \| nil |
| **[WorldToScreen](#worldtoscreen)**(worldPos: [Vec3](/vext/ref/shared/type/vec3)) | [Vec2](/vext/ref/shared/type/vec2) \| nil |
| **[ScreenToWorld](#screentoworld)**(mousePos: [Vec2](/vext/ref/shared/type/vec2)) | [Vec3](/vext/ref/shared/type/vec3) \| nil |
| **[GetWindowSize](#getwindowsize)**() | [Vec2](/vext/ref/shared/type/vec2) \| nil |
| **[PopScreen](#popscreen)**(graphAsset: [DataContainer](/vext/ref/shared/type/datacontainer), screensToPop: int) | bool |

## Methods

### GetCameraTransform {#getcameratransform}

> **GetCameraTransform**(): [LinearTransform](/vext/ref/shared/type/lineartransform) \| nil

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** \| **nil** |  |

### WorldToScreen {#worldtoscreen}

> **WorldToScreen**(worldPos: [Vec3](/vext/ref/shared/type/vec3)): [Vec2](/vext/ref/shared/type/vec2) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **worldPos** | [Vec3](/vext/ref/shared/type/vec3) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** \| **nil** |  |

### ScreenToWorld {#screentoworld}

> **ScreenToWorld**(mousePos: [Vec2](/vext/ref/shared/type/vec2)): [Vec3](/vext/ref/shared/type/vec3) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **mousePos** | [Vec2](/vext/ref/shared/type/vec2) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** \| **nil** |  |

### GetWindowSize {#getwindowsize}

> **GetWindowSize**(): [Vec2](/vext/ref/shared/type/vec2) \| nil

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** \| **nil** |  |

### PopScreen {#popscreen}

> **PopScreen**(graphAsset: [DataContainer](/vext/ref/shared/type/datacontainer), screensToPop: int): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **graphAsset** | [DataContainer](/vext/ref/shared/type/datacontainer) | The [UIGraphAsset](/vext/ref/fb/uigraphasset) of the screen to pop. |
| **screensToPop** | int | The number of screens to pop. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

