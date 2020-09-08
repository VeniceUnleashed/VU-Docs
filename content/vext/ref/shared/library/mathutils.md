---
title: MathUtils
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetRandom](#getrandom)**(from: float, to: float) | float |
| **[GetRandomInt](#getrandomint)**(from: int, to: int) | int |
| **[GetYPRFromULF](#getyprfromulf)**(up: [Vec3](/vext/ref/shared/type/vec3), left: [Vec3](/vext/ref/shared/type/vec3), forward: [Vec3](/vext/ref/shared/type/vec3)) | [Vec3](/vext/ref/shared/type/vec3) \| nil |
| **[GetTransformFromYPR](#gettransformfromypr)**(yaw: float, pitch: float, roll: float) | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| **[Approximately](#approximately)**(a: float, b: float) | bool |
| **[Clamp](#clamp)**(value: float, min: float, max: float) | float |
| **[Round](#round)**(value: float) | float |
| **[FNVHash](#fnvhash)**(text: string) | int |
| **[Lerp](#lerp)**(from: float, to: float, t: float) | float |
| **[RandomGuid](#randomguid)**() | [Guid](/vext/ref/shared/type/guid) |

## Methods

### GetRandom {#getrandom}

> **GetRandom**(from: float, to: float): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **from** | float |  |
| **to** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### GetRandomInt {#getrandomint}

> **GetRandomInt**(from: int, to: int): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **from** | int |  |
| **to** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### GetYPRFromULF {#getyprfromulf}

> **GetYPRFromULF**(up: [Vec3](/vext/ref/shared/type/vec3), left: [Vec3](/vext/ref/shared/type/vec3), forward: [Vec3](/vext/ref/shared/type/vec3)): [Vec3](/vext/ref/shared/type/vec3) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **up** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **left** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **forward** | [Vec3](/vext/ref/shared/type/vec3) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec3](/vext/ref/shared/type/vec3)** \| **nil** |  |

### GetTransformFromYPR {#gettransformfromypr}

> **GetTransformFromYPR**(yaw: float, pitch: float, roll: float): [LinearTransform](/vext/ref/shared/type/lineartransform)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **yaw** | float |  |
| **pitch** | float |  |
| **roll** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinearTransform](/vext/ref/shared/type/lineartransform)** |  |

### Approximately {#approximately}

> **Approximately**(a: float, b: float): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **a** | float |  |
| **b** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Clamp {#clamp}

> **Clamp**(value: float, min: float, max: float): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **value** | float |  |
| **min** | float |  |
| **max** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### Round {#round}

> **Round**(value: float): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **value** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### FNVHash {#fnvhash}

> **FNVHash**(text: string): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **text** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### Lerp {#lerp}

> **Lerp**(from: float, to: float, t: float): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **from** | float |  |
| **to** | float |  |
| **t** | float |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### RandomGuid {#randomguid}

> **RandomGuid**(): [Guid](/vext/ref/shared/type/guid)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Guid](/vext/ref/shared/type/guid)** |  |

