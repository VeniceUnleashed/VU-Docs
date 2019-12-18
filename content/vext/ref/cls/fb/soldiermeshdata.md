---
title: SoldierMeshData (Frostbite Structure)
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
| mesh          | [SkinnedMeshAsset](SkinnedMeshAsset) |             |
| meshBlueprint | [ObjectBlueprint](ObjectBlueprint)   |             |
| randomGroup   | number                               |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [SoldierMeshData](SoldierMeshData) | [Clone](#clone) |            |

### Clone

> [SoldierMeshData](SoldierMeshData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
