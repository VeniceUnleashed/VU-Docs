---
title: EnlightenInputInstance
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| EnlightenInputInstance()                             | Create a new instance of this structure type.            |
| EnlightenInputInstance(EnlightenInputInstance other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type                                                    | Description |
| --------------- | ------------------------------------------------------- | ----------- |
| transform       | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| asset           | string                                                  |             |
| objectVariation | string                                                  |             |
| systemId        | number                                                  |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance/) | [Clone](#clone) |            |

### Clone

> [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
