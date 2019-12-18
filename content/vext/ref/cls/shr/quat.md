---
title: Quat (Shared Class)
---
## Description

## Constructors

| Constructor                                                                                                                | Description                                              |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [Quat](/vext/ref/cls/shr/quat)()                                                                                        |                                                          |
| [Quat](/vext/ref/cls/shr/quat)([Quat](/vext/ref/cls/shr/quat) **ref**)                                               | Create a reference copy of an instance of the same type. |
| [Quat](/vext/ref/cls/shr/quat)(float **x**, float **y**, float **z**, float **w**)                                      |                                                          |
| [Quat](/vext/ref/cls/shr/quat)([Vec3](/vext/ref/cls/shr/vec3) **eulerVec**)                                          |                                                          |
| [Quat](/vext/ref/cls/shr/quat)([Vec3](/vext/ref/cls/shr/vec3) **forward**, [Vec3](/vext/ref/cls/shr/vec3) **up**) |                                                          |

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
| \*       | [Quat](/vext/ref/cls/shr/quat) **other** |
| \==      | [Quat](/vext/ref/cls/shr/quat) **other** |
| string   |                                             |

## Methods

| Type                              | Name                              | Parameters                                                          |
| --------------------------------- | --------------------------------- | ------------------------------------------------------------------- |
| [Vec3](/vext/ref/cls/shr/vec3) | [ToEuler](#toeuler)               |                                                                     |
| [Quat](/vext/ref/cls/shr/quat) | [Normalize](#normalize)           |                                                                     |
| [Quat](/vext/ref/cls/shr/quat) | [Clone](#clone)                   |                                                                     |
| float                             | [Dot](#dot)                       | [Quat](/vext/ref/cls/shr/quat) **other**                         |
| float                             | [Angle](#angle)                   | [Quat](/vext/ref/cls/shr/quat) **other**                         |
| [Quat](/vext/ref/cls/shr/quat) | [RotateTowards](#rotatetowards)   | [Quat](/vext/ref/cls/shr/quat) **to**, float **maxDegreesDelta** |
| [Quat](/vext/ref/cls/shr/quat) | [Slerp](#slerp)                   | [Quat](/vext/ref/cls/shr/quat) **to**, float **t**               |
| [Quat](/vext/ref/cls/shr/quat) | [SlerpUnclamped](#slerpunclamped) | [Quat](/vext/ref/cls/shr/quat) **to**, float **t**               |

### ToEuler

> [Vec3](/vext/ref/cls/shr/vec3) **ToEuler**()

### Normalize

> [Quat](/vext/ref/cls/shr/quat) **Normalize**()

### Clone

> [Quat](/vext/ref/cls/shr/quat) **Clone**()

### Dot

> float **Dot**([Quat](/vext/ref/cls/shr/quat) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Quat](/vext/ref/cls/shr/quat) |             |

### Angle

> float **Angle**([Quat](/vext/ref/cls/shr/quat) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Quat](/vext/ref/cls/shr/quat) |             |

### RotateTowards

> [Quat](/vext/ref/cls/shr/quat) **RotateTowards**([Quat](/vext/ref/cls/shr/quat) **to**, float **maxDegreesDelta**)

#### Parameters

| Name            | Type                              | Description |
| --------------- | --------------------------------- | ----------- |
| to              | [Quat](/vext/ref/cls/shr/quat) |             |
| maxDegreesDelta | float                             |             |

### Slerp

> [Quat](/vext/ref/cls/shr/quat) **Slerp**([Quat](/vext/ref/cls/shr/quat) **to**, float **t**)

#### Parameters

| Name | Type                              | Description |
| ---- | --------------------------------- | ----------- |
| to   | [Quat](/vext/ref/cls/shr/quat) |             |
| t    | float                             |             |

### SlerpUnclamped

> [Quat](/vext/ref/cls/shr/quat) **SlerpUnclamped**([Quat](/vext/ref/cls/shr/quat) **to**, float **t**)

#### Parameters

| Name | Type                              | Description |
| ---- | --------------------------------- | ----------- |
| to   | [Quat](/vext/ref/cls/shr/quat) |             |
| t    | float                             |             |
