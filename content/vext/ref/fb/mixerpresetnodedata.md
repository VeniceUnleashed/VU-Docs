---
title: MixerPresetNodeData
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
| node  | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) |             |
| value | number                                   |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata/) | [Clone](#clone) |            |

### Clone

> [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
