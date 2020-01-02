---
title: Quat
---
## Description

## Constructors

| Constructor                                                                                                                | Description                                              |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [Quat](/vext/ref/shared/class/quat)()                                                                                        |                                                          |
| [Quat](/vext/ref/shared/class/quat)([Quat](/vext/ref/shared/class/quat) **ref**)                                               | Create a reference copy of an instance of the same type. |
| [Quat](/vext/ref/shared/class/quat)(float **x**, float **y**, float **z**, float **w**)                                      |                                                          |
| [Quat](/vext/ref/shared/class/quat)([Vec3](/vext/ref/shared/class/vec3) **eulerVec**)                                          |                                                          |
| [Quat](/vext/ref/shared/class/quat)([Vec3](/vext/ref/shared/class/vec3) **forward**, [Vec3](/vext/ref/shared/class/vec3) **up**) |                                                          |

## Properties

| Name          | Type  | Writable | Description |
| ------------- | ----- | -------- | ----------- |
| x             | float |          |             |
| y             | float |          |             |
| z             | float |          |             |
| w             | float |          |             |
| length        | float |          |             |
| lengthSquared | float |          |             |

## Operators

| Operator | Parameters                                  |
| -------- | ------------------------------------------- |
| \*       | [Quat](/vext/ref/shared/class/quat) **other** |
| \==      | [Quat](/vext/ref/shared/class/quat) **other** |
| string   |                                             |

## Methods

| Type                              | Name                              | Parameters                                                          |
| --------------------------------- | --------------------------------- | ------------------------------------------------------------------- |
| [Vec3](/vext/ref/shared/class/vec3) | [ToEuler](#toeuler)               |                                                                     |
| [Quat](/vext/ref/shared/class/quat) | [Normalize](#normalize)           |                                                                     |
| [Quat](/vext/ref/shared/class/quat) | [Clone](#clone)                   |                                                                     |
| float                             | [Dot](#dot)                       | [Quat](/vext/ref/shared/class/quat) **other**                         |
| float                             | [Angle](#angle)                   | [Quat](/vext/ref/shared/class/quat) **other**                         |
| [Quat](/vext/ref/shared/class/quat) | [RotateTowards](#rotatetowards)   | [Quat](/vext/ref/shared/class/quat) **to**, float **maxDegreesDelta** |
| [Quat](/vext/ref/shared/class/quat) | [Slerp](#slerp)                   | [Quat](/vext/ref/shared/class/quat) **to**, float **t**               |
| [Quat](/vext/ref/shared/class/quat) | [SlerpUnclamped](#slerpunclamped) | [Quat](/vext/ref/shared/class/quat) **to**, float **t**               |

### ToEuler

> [Vec3](/vext/ref/shared/class/vec3) **ToEuler**()

### Normalize

> [Quat](/vext/ref/shared/class/quat) **Normalize**()

### Clone

> [Quat](/vext/ref/shared/class/quat) **Clone**()

### Dot

> float **Dot**([Quat](/vext/ref/shared/class/quat) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Quat](/vext/ref/shared/class/quat) |             |

### Angle

> float **Angle**([Quat](/vext/ref/shared/class/quat) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Quat](/vext/ref/shared/class/quat) |             |

### RotateTowards

> [Quat](/vext/ref/shared/class/quat) **RotateTowards**([Quat](/vext/ref/shared/class/quat) **to**, float **maxDegreesDelta**)

#### Parameters

| Name            | Type                              | Description |
| --------------- | --------------------------------- | ----------- |
| to              | [Quat](/vext/ref/shared/class/quat) |             |
| maxDegreesDelta | float                             |             |

### Slerp

> [Quat](/vext/ref/shared/class/quat) **Slerp**([Quat](/vext/ref/shared/class/quat) **to**, float **t**)

#### Parameters

| Name | Type                              | Description |
| ---- | --------------------------------- | ----------- |
| to   | [Quat](/vext/ref/shared/class/quat) |             |
| t    | float                             |             |

### SlerpUnclamped

> [Quat](/vext/ref/shared/class/quat) **SlerpUnclamped**([Quat](/vext/ref/shared/class/quat) **to**, float **t**)

#### Parameters

| Name | Type                              | Description |
| ---- | --------------------------------- | ----------- |
| to   | [Quat](/vext/ref/shared/class/quat) |             |
| t    | float                             |             |
