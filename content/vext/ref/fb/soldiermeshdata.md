---
title: SoldierMeshData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| SoldierMeshData()                      | Create a new instance of this structure type.            |
| SoldierMeshData(SoldierMeshData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| mesh          | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/) |             |
| meshBlueprint | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)   |             |
| randomGroup   | number                               |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [SoldierMeshData](/vext/ref/fb/soldiermeshdata/) | [Clone](#clone) |            |

### Clone

> [SoldierMeshData](/vext/ref/fb/soldiermeshdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
