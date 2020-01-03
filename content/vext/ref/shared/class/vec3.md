---
title: Vec3
---
## Description

## Constructors

| Constructor                                                                  | Description                                              |
| ---------------------------------------------------------------------------- | -------------------------------------------------------- |
| [Vec3](/vext/ref/shared/class/vec3)()                                          |                                                          |
| [Vec3](/vext/ref/shared/class/vec3)([Vec3](/vext/ref/shared/class/vec3) **ref**) | Create a reference copy of an instance of the same type. |
| [Vec3](/vext/ref/shared/class/vec3)(float **x**, float **y**, float **z**)     |                                                          |

## Static Members

| Type                                                    | Name                  | Description |
| ------------------------------------------------------- | --------------------- | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | Vec3.typeInfo         |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.back             |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.down             |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.forward          |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.left             |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.negativeInfinity |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.one              |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.positiveInfinity |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.right            |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.up               |             |
| [Vec3](/vext/ref/shared/class/vec3)                       | Vec3.zero             |             |

## Properties

| Name      | Type                                                    | Writable | Description |
| --------- | ------------------------------------------------------- | -------- | ----------- |
| x         | float                                                   |          |             |
| y         | float                                                   |          |             |
| z         | float                                                   |          |             |
| typeInfo  | [TypeInformation](/vext/ref/shared/class/typeinformation) |          |             |
| magnitude | float                                                   |          |             |

## Operators

| Operator | Parameters                                  |
| -------- | ------------------------------------------- |
| \+       | [Vec3](/vext/ref/shared/class/vec3) **other** |
| \-       | [Vec3](/vext/ref/shared/class/vec3) **other** |
| \*       | [Vec3](/vext/ref/shared/class/vec3) **other** |
| /        | [Vec3](/vext/ref/shared/class/vec3) **other** |
| \==      | [Vec3](/vext/ref/shared/class/vec3) **other** |
| string   |                                             |
| \*       | float **other**                             |
| /        | float **other**                             |
| \<       | [Vec3](/vext/ref/shared/class/vec3) **other** |

## Methods

| Type                              | Name                        | Parameters                                                           |
| --------------------------------- | --------------------------- | -------------------------------------------------------------------- |
| float                             | [Dot](#dot)                 | [Vec3](/vext/ref/shared/class/vec3) **other**                          |
| [Vec3](/vext/ref/shared/class/vec3) | [Cross](#cross)             | [Vec3](/vext/ref/shared/class/vec3) **other**                          |
| [Vec3](/vext/ref/shared/class/vec3) | [Normalize](#normalize)     |                                                                      |
| float                             | [Distance](#distance)       | [Vec3](/vext/ref/shared/class/vec3) **other**                          |
| [Vec3](/vext/ref/shared/class/vec3) | [Clone](#clone)             |                                                                      |
| [Vec3](/vext/ref/shared/class/vec3) | [MoveTowards](#movetowards) | [Vec3](/vext/ref/shared/class/vec3) **to**, float **maxDistanceDelta** |

### Dot

> float **Dot**([Vec3](/vext/ref/shared/class/vec3) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Vec3](/vext/ref/shared/class/vec3) |             |

### Cross

> [Vec3](/vext/ref/shared/class/vec3) **Cross**([Vec3](/vext/ref/shared/class/vec3) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Vec3](/vext/ref/shared/class/vec3) |             |

### Normalize

> [Vec3](/vext/ref/shared/class/vec3) **Normalize**()

### Distance

> float **Distance**([Vec3](/vext/ref/shared/class/vec3) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Vec3](/vext/ref/shared/class/vec3) |             |

### Clone

> [Vec3](/vext/ref/shared/class/vec3) **Clone**()

### MoveTowards

> [Vec3](/vext/ref/shared/class/vec3) **MoveTowards**([Vec3](/vext/ref/shared/class/vec3) **to**, float **maxDistanceDelta**)

#### Parameters

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| to               | [Vec3](/vext/ref/shared/class/vec3) |             |
| maxDistanceDelta | float                             |             |
