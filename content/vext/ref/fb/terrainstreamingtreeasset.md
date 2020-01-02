---
title: TerrainStreamingTreeAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainStreamingTreeAsset()                                                          | Create a new instance of this container type.                                                                                             |
| TerrainStreamingTreeAsset(TerrainStreamingTreeAsset other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| TerrainStreamingTreeAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TerrainStreamingTreeAsset](TerrainStreamingTreeAsset).                                      |
| TerrainStreamingTreeAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainStreamingTreeAsset](TerrainStreamingTreeAsset). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TerrainStreamingTreeAsset](TerrainStreamingTreeAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainStreamingTreeAsset](TerrainStreamingTreeAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
