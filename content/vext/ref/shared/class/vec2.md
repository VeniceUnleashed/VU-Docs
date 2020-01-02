---
title: Vec2
---
## Description

## Constructors

| Constructor                                                                  | Description |
| ---------------------------------------------------------------------------- | ----------- |
| [Vec2](/vext/ref/shared/class/vec2)()                                          |             |
| [Vec2](/vext/ref/shared/class/vec2)([Vec2](/vext/ref/shared/class/vec2) **ref**) |             |
| [Vec2](/vext/ref/shared/class/vec2)(float **x**, float **y**)                  |             |

## Static Members

| Type                                                    | Name                  | Description |
| ------------------------------------------------------- | --------------------- | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | Vec2.typeInfo         |             |
| [Vec2](/vext/ref/shared/class/vec2)                       | Vec2.down             |             |
| [Vec2](/vext/ref/shared/class/vec2)                       | Vec2.left             |             |
| [Vec2](/vext/ref/shared/class/vec2)                       | Vec2.negativeInfinity |             |
| [Vec2](/vext/ref/shared/class/vec2)                       | Vec2.one              |             |
| [Vec2](/vext/ref/shared/class/vec2)                       | Vec2.positiveInfinity |             |
| [Vec2](/vext/ref/shared/class/vec2)                       | Vec2.right            |             |
| [Vec2](/vext/ref/shared/class/vec2)                       | Vec2.up               |             |
| [Vec2](/vext/ref/shared/class/vec2)                       | Vec2.zero             |             |

## Properties

| Name      | Type                                                    | Writable | Description |
| --------- | ------------------------------------------------------- | -------- | ----------- |
| x         | float                                                   |          |             |
| y         | float                                                   |          |             |
| typeInfo  | [TypeInformation](/vext/ref/shared/class/typeinformation) |          |             |
| magnitude | float                                                   |          |             |

## Operators

| Operator | Parameters                                  |
| -------- | ------------------------------------------- |
| \+       | [Vec2](/vext/ref/shared/class/vec2) **other** |
| \-       | [Vec2](/vext/ref/shared/class/vec2) **other** |
| \*       | [Vec2](/vext/ref/shared/class/vec2) **other** |
| /        | [Vec2](/vext/ref/shared/class/vec2) **other** |
| \==      | [Vec2](/vext/ref/shared/class/vec2) **other** |
| string   |                                             |
| \*       | float **other**                             |
| /        | float **other**                             |
| \<       | [Vec2](/vext/ref/shared/class/vec2) **other** |

## Methods

| Type                              | Name                  | Parameters                                  |
| --------------------------------- | --------------------- | ------------------------------------------- |
| [Vec2](/vext/ref/shared/class/vec2) | [Clone](#clone)       |                                             |
| float                             | [Distance](#distance) | [Vec2](/vext/ref/shared/class/vec2) **other** |

### Clone

> [Vec2](/vext/ref/shared/class/vec2) **Clone**()

### Distance

> float **Distance**([Vec2](/vext/ref/shared/class/vec2) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Vec2](/vext/ref/shared/class/vec2) |             |
