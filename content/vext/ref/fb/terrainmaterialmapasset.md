---
title: TerrainMaterialMapAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainMaterialMapAsset()                                                          | Create a new instance of this container type.                                                                                         |
| TerrainMaterialMapAsset(TerrainMaterialMapAsset other)                             | Create a reference copy of an instance of the same type.                                                                              |
| TerrainMaterialMapAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TerrainMaterialMapAsset](TerrainMaterialMapAsset).                                      |
| TerrainMaterialMapAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainMaterialMapAsset](TerrainMaterialMapAsset). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainMaterialMapAsset](TerrainMaterialMapAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainMaterialMapAsset](TerrainMaterialMapAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
