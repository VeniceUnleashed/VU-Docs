---
title: TerrainMeshScatteringType
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| TerrainMeshScatteringType()                                                          | Create a new instance of this container type.                                                                                             |
| TerrainMeshScatteringType(TerrainMeshScatteringType other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| TerrainMeshScatteringType([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TerrainMeshScatteringType](/vext/ref/fb/terrainmeshscatteringtype/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TerrainMeshScatteringType](/vext/ref/fb/terrainmeshscatteringtype/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TerrainMeshScatteringType](/vext/ref/fb/terrainmeshscatteringtype/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
