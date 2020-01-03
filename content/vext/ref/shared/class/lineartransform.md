---
title: LinearTransform
---
## Description

## Constructors

| Constructor                                                                                                                                                                                                                               | Description                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [LinearTransform](/vext/ref/shared/class/lineartransform)()                                                                                                                                                                                 |                                                          |
| [LinearTransform](/vext/ref/shared/class/lineartransform)(float **undefined**)                                                                                                                                                              |                                                          |
| [LinearTransform](/vext/ref/shared/class/lineartransform)([LinearTransform](/vext/ref/shared/class/lineartransform) **ref**)                                                                                                                  | Create a reference copy of an instance of the same type. |
| [LinearTransform](/vext/ref/shared/class/lineartransform)([Vec3](/vext/ref/shared/class/vec3) **left**, [Vec3](/vext/ref/shared/class/vec3) **up**, [Vec3](/vext/ref/shared/class/vec3) **forward**, [Vec3](/vext/ref/shared/class/vec3) **trans**) |                                                          |

## Static Members

| Type                                                    | Name                     | Description |
| ------------------------------------------------------- | ------------------------ | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | LinearTransform.typeInfo |             |

## Properties

| Name     | Type                                                    | Writable | Description |
| -------- | ------------------------------------------------------- | -------- | ----------- |
| left     | [Vec3](/vext/ref/shared/class/vec3)                       |          |             |
| up       | [Vec3](/vext/ref/shared/class/vec3)                       |          |             |
| forward  | [Vec3](/vext/ref/shared/class/vec3)                       |          |             |
| trans    | [Vec3](/vext/ref/shared/class/vec3)                       |          |             |
| typeInfo | [TypeInformation](/vext/ref/shared/class/typeinformation) |          |             |

## Operators

| Operator | Parameters                                                        |
| -------- | ----------------------------------------------------------------- |
| \+       | [LinearTransform](/vext/ref/shared/class/lineartransform) **other** |
| \-       | [LinearTransform](/vext/ref/shared/class/lineartransform) **other** |
| \*       | [LinearTransform](/vext/ref/shared/class/lineartransform) **other** |
| \==      | [LinearTransform](/vext/ref/shared/class/lineartransform) **other** |
| string   |                                                                   |
| \*       | [Vec3](/vext/ref/shared/class/vec3) **other**                       |
| \*       | [Vec4](/vext/ref/shared/class/vec4) **other**                       |
| \*       | float **other**                                                   |

## Methods

| Type                                                    | Name                                | Parameters                                                                                |
| ------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------- |
| [LinearTransform](/vext/ref/shared/class/lineartransform) | [Clone](#clone)                     |                                                                                           |
| void                                                    | [LookAtTransform](#lookattransform) | [Vec3](/vext/ref/shared/class/vec3) **camera**, [Vec3](/vext/ref/shared/class/vec3) **world** |
| [QuatTransform](/vext/ref/shared/class/quattransform)     | [ToQuatTransform](#toquattransform) | bool **hasScale**                                                                         |
| void                                                    | [Translate](#translate)             | [Vec3](/vext/ref/shared/class/vec3) **trans**                                               |

### Clone

> [LinearTransform](/vext/ref/shared/class/lineartransform) **Clone**()

### LookAtTransform

> void **LookAtTransform**([Vec3](/vext/ref/shared/class/vec3) **camera**, [Vec3](/vext/ref/shared/class/vec3) **world**)

#### Parameters

| Name   | Type                              | Description |
| ------ | --------------------------------- | ----------- |
| camera | [Vec3](/vext/ref/shared/class/vec3) |             |
| world  | [Vec3](/vext/ref/shared/class/vec3) |             |

### ToQuatTransform

> [QuatTransform](/vext/ref/shared/class/quattransform) **ToQuatTransform**(bool **hasScale**)

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| hasScale | bool |             |

### Translate

> void **Translate**([Vec3](/vext/ref/shared/class/vec3) **trans**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| trans | [Vec3](/vext/ref/shared/class/vec3) |             |
