---
title: Vec4
---
## Description

## Constructors

| Constructor                                                                           | Description |
| ------------------------------------------------------------------------------------- | ----------- |
| [Vec4](/vext/ref/shared/class/vec4)()                                                   |             |
| [Vec4](/vext/ref/shared/class/vec4)([Vec4](/vext/ref/shared/class/vec4) **ref**)          |             |
| [Vec4](/vext/ref/shared/class/vec4)(float **x**, float **y**, float **z**, float **w**) |             |

## Static Members

| Type                                                    | Name                  | Description |
| ------------------------------------------------------- | --------------------- | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | Vec4.typeInfo         |             |
| [Vec4](/vext/ref/shared/class/vec4)                       | Vec4.negativeInfinity |             |
| [Vec4](/vext/ref/shared/class/vec4)                       | Vec4.one              |             |
| [Vec4](/vext/ref/shared/class/vec4)                       | Vec4.positiveInfinity |             |
| [Vec4](/vext/ref/shared/class/vec4)                       | Vec4.zero             |             |

## Properties

| Name      | Type                                                    | Writable | Description |
| --------- | ------------------------------------------------------- | -------- | ----------- |
| x         | float                                                   |          |             |
| y         | float                                                   |          |             |
| z         | float                                                   |          |             |
| w         | float                                                   |          |             |
| typeInfo  | [TypeInformation](/vext/ref/shared/class/typeinformation) |          |             |
| magnitude | float                                                   |          |             |

## Operators

| Operator | Parameters                                  |
| -------- | ------------------------------------------- |
| \+       | [Vec4](/vext/ref/shared/class/vec4) **other** |
| \-       | [Vec4](/vext/ref/shared/class/vec4) **other** |
| \*       | [Vec4](/vext/ref/shared/class/vec4) **other** |
| /        | [Vec4](/vext/ref/shared/class/vec4) **other** |
| \==      | [Vec4](/vext/ref/shared/class/vec4) **other** |
| string   |                                             |
| \*       | float **other**                             |
| /        | float **other**                             |
| \<       | [Vec4](/vext/ref/shared/class/vec4) **other** |

## Methods

| Type                              | Name                  | Parameters                                  |
| --------------------------------- | --------------------- | ------------------------------------------- |
| [Vec4](/vext/ref/shared/class/vec4) | [Clone](#clone)       |                                             |
| float                             | [Distance](#distance) | [Vec4](/vext/ref/shared/class/vec4) **other** |

### Clone

> [Vec4](/vext/ref/shared/class/vec4) **Clone**()

### Distance

> float **Distance**([Vec4](/vext/ref/shared/class/vec4) **other**)

#### Parameters

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| other | [Vec4](/vext/ref/shared/class/vec4) |             |
