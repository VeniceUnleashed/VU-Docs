---
title: EffectParams
---
## Description

## Constructors

| Constructor                                         | Description |
| --------------------------------------------------- | ----------- |
| [EffectParams](/vext/ref/cls/clt/effectparams)() |             |

## Properties

| Name | Type | Writable | Description |
| ---- | ---- | -------- | ----------- |
| size | int  |          |             |

## Methods

| Type                              | Name                  | Parameters                                                   |
| --------------------------------- | --------------------- | ------------------------------------------------------------ |
| bool                              | [SetBool](#setbool)   | sting **name**, bool **value**                               |
| bool                              | [SetInt](#setint)     | string **name**, int **value**                               |
| bool                              | [SetFloat](#setfloat) | string **name**, float **value**                             |
| bool                              | [SetVec4](#setvec4)   | string **name**, [Vec4](/vext/ref/shared/class/vec4) **value** |
| bool                              | [GetBool](#getbool)   | string **name**                                              |
| int                               | [GetInt](#getint)     | string **name**                                              |
| float                             | [GetFloat](#getfloat) | string **name**                                              |
| [Vec4](/vext/ref/shared/class/vec4) | [GetVec4](#getvec4)   | string **name**                                              |
| bool                              | [HasBool](#hasbool)   | string **name**                                              |
| bool                              | [HasInt](#hasint)     | string **name**                                              |
| bool                              | [HasFloat](#hasfloat) | string **name**                                              |
| bool                              | [HasVec4](#hasvec4)   | string **name**                                              |

### SetBool

> bool **SetBool**(sting **name**, bool **value**)

#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| name  | sting |             |
| value | bool  |             |

### SetInt

> bool **SetInt**(string **name**, int **value**)

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| name  | string |             |
| value | int    |             |

### SetFloat

> bool **SetFloat**(string **name**, float **value**)

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| name  | string |             |
| value | float  |             |

### SetVec4

> bool **SetVec4**(string **name**, [Vec4](/vext/ref/shared/class/vec4) **value**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| name  | string                            |             |
| value | [Vec4](/vext/ref/shared/class/vec4) |             |

### GetBool

> bool **GetBool**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### GetInt

> int **GetInt**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### GetFloat

> float **GetFloat**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### GetVec4

> [Vec4](/vext/ref/shared/class/vec4) **GetVec4**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### HasBool

> bool **HasBool**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### HasInt

> bool **HasInt**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### HasFloat

> bool **HasFloat**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

### HasVec4

> bool **HasVec4**(string **name**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |
