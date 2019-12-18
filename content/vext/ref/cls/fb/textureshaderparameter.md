---
title: TextureShaderParameter (Frostbite Structure)
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
| value         | [TextureBaseAsset](TextureBaseAsset) |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [TextureShaderParameter](TextureShaderParameter) | [Clone](#clone) |            |

### Clone

> [TextureShaderParameter](TextureShaderParameter) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
