---
title: SoundPatchPublicNode (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                      | Description                                              |
| ------------------------------------------------ | -------------------------------------------------------- |
| SoundPatchPublicNode()                           | Create a new instance of this structure type.            |
| SoundPatchPublicNode(SoundPatchPublicNode other) | Create a reference copy of a structure of the same type. |

## Properties

| Name | Type                                     | Description |
| ---- | ---------------------------------------- | ----------- |
| node | [AudioGraphNodeData](AudioGraphNodeData) |             |
| id   | number                                   |             |

## Methods

| Type                                         | Name            | Parameters |
| -------------------------------------------- | --------------- | ---------- |
| [SoundPatchPublicNode](SoundPatchPublicNode) | [Clone](#clone) |            |

### Clone

> [SoundPatchPublicNode](SoundPatchPublicNode) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
