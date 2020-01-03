---
title: MeshVariationInfo
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
| meshAsset      | [MeshAsset](/vext/ref/fb/meshasset/)             |             |
| origMeshAsset  | [MeshAsset](/vext/ref/fb/meshasset/)             |             |
| variationAsset | [ObjectVariation](/vext/ref/fb/objectvariation/) |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [MeshVariationInfo](/vext/ref/fb/meshvariationinfo/) | [Clone](#clone) |            |

### Clone

> [MeshVariationInfo](/vext/ref/fb/meshvariationinfo/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
