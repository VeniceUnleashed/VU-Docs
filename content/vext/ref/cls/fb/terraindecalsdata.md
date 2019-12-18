---
title: TerrainDecalsData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| TerrainDecalsData()                                                          | Create a new instance of this container type.                                                                             |
| TerrainDecalsData(TerrainDecalsData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| TerrainDecalsData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [TerrainDecalsData](TerrainDecalsData).                                      |
| TerrainDecalsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [TerrainDecalsData](TerrainDecalsData). |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [TerrainDecalsData](TerrainDecalsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [TerrainDecalsData](TerrainDecalsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
