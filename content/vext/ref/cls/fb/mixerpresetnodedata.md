---
title: MixerPresetNodeData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| MixerPresetNodeData()                          | Create a new instance of this structure type.            |
| MixerPresetNodeData(MixerPresetNodeData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name  | Type                                     | Description |
| ----- | ---------------------------------------- | ----------- |
| node  | [AudioGraphNodeData](AudioGraphNodeData) |             |
| value | number                                   |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [MixerPresetNodeData](MixerPresetNodeData) | [Clone](#clone) |            |

### Clone

> [MixerPresetNodeData](MixerPresetNodeData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
