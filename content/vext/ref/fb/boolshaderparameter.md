---
title: BoolShaderParameter
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| BoolShaderParameter()                          | Create a new instance of this structure type.            |
| BoolShaderParameter(BoolShaderParameter other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| parameterName | string |             |
| value         | bool   |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [BoolShaderParameter](/vext/ref/fb/boolshaderparameter/) | [Clone](#clone) |            |

### Clone

> [BoolShaderParameter](/vext/ref/fb/boolshaderparameter/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
