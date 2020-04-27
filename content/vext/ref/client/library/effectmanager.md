---
title: EffectManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[PlayEffect](#playeffect)**(asset: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform), params: [EffectParams](/vext/ref/client/type/effectparams), firstPersonEffect: bool) | int |
| **[StopEffect](#stopeffect)**(handle: int) | void |
| **[ResetEffect](#reseteffect)**(handle: int) | void |
| **[SetEffectParameterBool](#seteffectparameterbool)**(handle: int, name: string, value: bool) | void |
| **[SetEffectParameterInt](#seteffectparameterint)**(handle: int, name: string, value: int) | void |
| **[SetEffectParameterFloat](#seteffectparameterfloat)**(handle: int, name: string, value: float) | void |
| **[SetEffectTransform](#seteffecttransform)**(handle: int, transform: [LinearTransform](/vext/ref/shared/type/lineartransform)) | void |
| **[IsEffectPlaying](#iseffectplaying)**(handle: int) | bool |
| **[IsEffectDead](#iseffectdead)**(handle: int) | bool |
| **[DisableEffects](#disableeffects)**(disableTimer: float) | void |
| **[Clear](#clear)**() | void |

## Methods

### PlayEffect {#playeffect}

> **PlayEffect**(asset: [DataContainer](/vext/ref/shared/type/datacontainer), transform: [LinearTransform](/vext/ref/shared/type/lineartransform), params: [EffectParams](/vext/ref/client/type/effectparams), firstPersonEffect: bool): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **asset** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |
| **params** | [EffectParams](/vext/ref/client/type/effectparams) |  |
| **firstPersonEffect** | bool |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### StopEffect {#stopeffect}

> **StopEffect**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### ResetEffect {#reseteffect}

> **ResetEffect**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

### SetEffectParameterBool {#seteffectparameterbool}

> **SetEffectParameterBool**(handle: int, name: string, value: bool)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |
| **name** | string |  |
| **value** | bool |  |

### SetEffectParameterInt {#seteffectparameterint}

> **SetEffectParameterInt**(handle: int, name: string, value: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |
| **name** | string |  |
| **value** | int |  |

### SetEffectParameterFloat {#seteffectparameterfloat}

> **SetEffectParameterFloat**(handle: int, name: string, value: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |
| **name** | string |  |
| **value** | float |  |

### SetEffectTransform {#seteffecttransform}

> **SetEffectTransform**(handle: int, transform: [LinearTransform](/vext/ref/shared/type/lineartransform))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |
| **transform** | [LinearTransform](/vext/ref/shared/type/lineartransform) |  |

### IsEffectPlaying {#iseffectplaying}

> **IsEffectPlaying**(handle: int): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### IsEffectDead {#iseffectdead}

> **IsEffectDead**(handle: int): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### DisableEffects {#disableeffects}

> **DisableEffects**(disableTimer: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **disableTimer** | float |  |

### Clear {#clear}

> **Clear**()

