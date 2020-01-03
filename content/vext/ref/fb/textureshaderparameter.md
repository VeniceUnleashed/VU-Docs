---
title: TextureShaderParameter
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| TextureShaderParameter()                             | Create a new instance of this structure type.            |
| TextureShaderParameter(TextureShaderParameter other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| parameterName | string                               |             |
| value         | [TextureBaseAsset](/vext/ref/fb/texturebaseasset/) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [TextureShaderParameter](/vext/ref/fb/textureshaderparameter/) | [Clone](#clone) |            |

### Clone

> [TextureShaderParameter](/vext/ref/fb/textureshaderparameter/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
