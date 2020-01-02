---
title: EmitterTextureInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| EmitterTextureInfo()                         | Create a new instance of this structure type.            |
| EmitterTextureInfo(EmitterTextureInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                      | Type   | Description |
| ------------------------- | ------ | ----------- |
| textureName               | string |             |
| normalmapName             | string |             |
| animationFrameCount       | number |             |
| animationFrameColumnCount | number |             |
| enableAnimation           | bool   |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [EmitterTextureInfo](EmitterTextureInfo) | [Clone](#clone) |            |

### Clone

> [EmitterTextureInfo](EmitterTextureInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
