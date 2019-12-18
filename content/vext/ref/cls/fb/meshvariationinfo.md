---
title: MeshVariationInfo (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| MeshVariationInfo()                        | Create a new instance of this structure type.            |
| MeshVariationInfo(MeshVariationInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name           | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| meshAsset      | [MeshAsset](MeshAsset)             |             |
| origMeshAsset  | [MeshAsset](MeshAsset)             |             |
| variationAsset | [ObjectVariation](ObjectVariation) |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [MeshVariationInfo](MeshVariationInfo) | [Clone](#clone) |            |

### Clone

> [MeshVariationInfo](MeshVariationInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
