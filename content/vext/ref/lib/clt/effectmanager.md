---
title: EffectManager (Client Library)
---
## Description

## Methods

| Type | Name                                                | Parameters                                                                                                                                                                                                                     |
| ---- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| int  | [PlayEffect](#playeffect)                           | [DataContainer](/vext/ref/cls/shr/datacontainer) **asset**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, [EffectParams](/vext/ref/cls/clt/effectparams) **params**, bool **firstPersonEffect** |
| void | [StopEffect](#stopeffect)                           | int **handle**                                                                                                                                                                                                                 |
| void | [ResetEffect](#reseteffect)                         | int **handle**                                                                                                                                                                                                                 |
| void | [SetEffectParameterBool](#seteffectparameterbool)   | int **handle**, string **name**, bool **value**                                                                                                                                                                                |
| void | [SetEffectParameterInt](#seteffectparameterint)     | int **handle**, string **name**, int **value**                                                                                                                                                                                 |
| void | [SetEffectParameterFloat](#seteffectparameterfloat) | int **handle**, string **name**, float **value**                                                                                                                                                                               |
| void | [SetEffectTransform](#seteffecttransform)           | int **handle**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**                                                                                                                                          |
| bool | [IsEffectPlaying](#iseffectplaying)                 | int **handle**                                                                                                                                                                                                                 |
| bool | [IsEffectDead](#iseffectdead)                       | int **handle**                                                                                                                                                                                                                 |
| void | [DisableEffects](#disableeffects)                   | float **disableTimer**                                                                                                                                                                                                         |
| void | [Clear](#clear)                                     |                                                                                                                                                                                                                                |

### PlayEffect

> int **PlayEffect**([DataContainer](/vext/ref/cls/shr/datacontainer) **asset**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**, [EffectParams](/vext/ref/cls/clt/effectparams) **params**, bool **firstPersonEffect**)

#### Parameters

| Name              | Type                                                    | Description |
| ----------------- | ------------------------------------------------------- | ----------- |
| asset             | [DataContainer](/vext/ref/cls/shr/datacontainer)     |             |
| transform         | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |
| params            | [EffectParams](/vext/ref/cls/clt/effectparams)       |             |
| firstPersonEffect | bool                                                    |             |

### StopEffect

> void **StopEffect**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### ResetEffect

> void **ResetEffect**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### SetEffectParameterBool

> void **SetEffectParameterBool**(int **handle**, string **name**, bool **value**)

#### Parameters

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| handle | int    |             |
| name   | string |             |
| value  | bool   |             |

### SetEffectParameterInt

> void **SetEffectParameterInt**(int **handle**, string **name**, int **value**)

#### Parameters

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| handle | int    |             |
| name   | string |             |
| value  | int    |             |

### SetEffectParameterFloat

> void **SetEffectParameterFloat**(int **handle**, string **name**, float **value**)

#### Parameters

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| handle | int    |             |
| name   | string |             |
| value  | float  |             |

### SetEffectTransform

> void **SetEffectTransform**(int **handle**, [LinearTransform](/vext/ref/cls/shr/lineartransform) **transform**)

#### Parameters

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| handle    | int                                                     |             |
| transform | [LinearTransform](/vext/ref/cls/shr/lineartransform) |             |

### IsEffectPlaying

> bool **IsEffectPlaying**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### IsEffectDead

> bool **IsEffectDead**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### DisableEffects

> void **DisableEffects**(float **disableTimer**)

#### Parameters

| Name         | Type  | Description |
| ------------ | ----- | ----------- |
| disableTimer | float |             |

### Clear

> void **Clear**()
