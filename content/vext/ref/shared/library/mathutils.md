---
title: MathUtils
---
## Description

## Methods

| Type                                                    | Name                                        | Parameters                                                                                                                        |
| ------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| float                                                   | [GetRandom](#getrandom)                     | float **from**, float **to**                                                                                                      |
| int                                                     | [GetRandomInt](#getrandomint)               | int **from**, int **to**                                                                                                          |
| [Vec3](/vext/ref/shared/class/vec3)                       | [GetYPRFromULF](#getyprfromulf)             | [Vec3](/vext/ref/shared/class/vec3) **up**, [Vec3](/vext/ref/shared/class/vec3) **left**, [Vec3](/vext/ref/shared/class/vec3) **right** |
| [LinearTransform](/vext/ref/shared/class/lineartransform) | [GetTransformFromYPR](#gettransformfromypr) | float **yaw**, float **pitch**, float **roll**                                                                                    |
| bool                                                    | [Approximately](#approximately)             | float **a**, float **b**                                                                                                          |
| float                                                   | [Clamp](#clamp)                             | float **value**, float **min**, float **max**                                                                                     |
| float                                                   | [Round](#round)                             | float **value**                                                                                                                   |
| int                                                     | [FNVHash](#fnvhash)                         | string **value**                                                                                                                  |
| float                                                   | [Lerp](#lerp)                               | float **a**, float **b**, float **t**                                                                                             |

### GetRandom

> float **GetRandom**(float **from**, float **to**)

#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| from | float |             |
| to   | float |             |

### GetRandomInt

> int **GetRandomInt**(int **from**, int **to**)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | int  |             |
| to   | int  |             |

### GetYPRFromULF

> [Vec3](/vext/ref/shared/class/vec3) **GetYPRFromULF**([Vec3](/vext/ref/shared/class/vec3) **up**, [Vec3](/vext/ref/shared/class/vec3) **left**, [Vec3](/vext/ref/shared/class/vec3) **right**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| up    | [Vec3](/vext/ref/shared/class/vec3) |             |
| left  | [Vec3](/vext/ref/shared/class/vec3) |             |
| right | [Vec3](/vext/ref/shared/class/vec3) |             |

### GetTransformFromYPR

> [LinearTransform](/vext/ref/shared/class/lineartransform) **GetTransformFromYPR**(float **yaw**, float **pitch**, float **roll**)

#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| yaw   | float |             |
| pitch | float |             |
| roll  | float |             |

### Approximately

> bool **Approximately**(float **a**, float **b**)

#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| a    | float |             |
| b    | float |             |

### Clamp

> float **Clamp**(float **value**, float **min**, float **max**)

#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float |             |
| min   | float |             |
| max   | float |             |

### Round

> float **Round**(float **value**)

#### Parameters

| Name  | Type  | Description |
| ----- | ----- | ----------- |
| value | float |             |

### FNVHash

> int **FNVHash**(string **value**)

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| value | string |             |

### Lerp

> float **Lerp**(float **a**, float **b**, float **t**)

#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| a    | float |             |
| b    | float |             |
| t    | float |             |
