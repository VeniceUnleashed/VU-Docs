---
title: VectorArrayShaderParameter
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| VectorArrayShaderParameter()                                 | Create a new instance of this structure type.            |
| VectorArrayShaderParameter(VectorArrayShaderParameter other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                       | Description |
| ------------- | ------------------------------------------ | ----------- |
| parameterName | string                                     |             |
| parameterType | [ShaderParameterType](/vext/ref/fb/shaderparametertype/) |             |
| values        | [Vec4](/vext/ref/shared/class/vec4)\[\]      |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter/) | [Clone](#clone) |            |

### Clone

> [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
