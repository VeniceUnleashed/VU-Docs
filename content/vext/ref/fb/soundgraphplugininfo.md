---
title: SoundGraphPluginInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| SoundGraphPluginInfo()                           | Create a new instance of this structure type.            |
| SoundGraphPluginInfo(SoundGraphPluginInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| id                      | number |             |
| enableAttributeReadMask | number |             |
| connectionIndex         | number |             |
| outputChannelCount      | number |             |
| constructParamsIndex    | number |             |
| constructParamCount     | number |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [SoundGraphPluginInfo](SoundGraphPluginInfo) | [Clone](#clone) |            |

### Clone

> [SoundGraphPluginInfo](SoundGraphPluginInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
