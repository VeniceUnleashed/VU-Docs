---
title: ChunkStreamerCell (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| ChunkStreamerCell()                        | Create a new instance of this structure type.            |
| ChunkStreamerCell(ChunkStreamerCell other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                                  | Description |
| ---------- | ------------------------------------- | ----------- |
| shape      | [Vec2](/vext/ref/cls/shr/Vec2)\[\] |             |
| bundleName | string                                |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [ChunkStreamerCell](ChunkStreamerCell) | [Clone](#clone) |            |

### Clone

> [ChunkStreamerCell](ChunkStreamerCell) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
