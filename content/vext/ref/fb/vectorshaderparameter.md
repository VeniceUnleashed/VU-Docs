---
title: VectorShaderParameter
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| VectorShaderParameter()                            | Create a new instance of this structure type.            |
| VectorShaderParameter(VectorShaderParameter other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                       | Description |
| ------------- | ------------------------------------------ | ----------- |
| value         | [Vec4](/vext/ref/shared/class/Vec4)          |             |
| parameterType | [ShaderParameterType](ShaderParameterType) |             |
| parameterName | string                                     |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [VectorShaderParameter](VectorShaderParameter) | [Clone](#clone) |            |

### Clone

> [VectorShaderParameter](VectorShaderParameter) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
