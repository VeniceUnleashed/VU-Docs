---
title: ShaderParameterVector
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| ShaderParameterVector()                            | Create a new instance of this structure type.            |
| ShaderParameterVector(ShaderParameterVector other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| value         | [Vec4](/vext/ref/shared/class/vec4) |             |
| parameterName | string                            |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [ShaderParameterVector](ShaderParameterVector) | [Clone](#clone) |            |

### Clone

> [ShaderParameterVector](ShaderParameterVector) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
