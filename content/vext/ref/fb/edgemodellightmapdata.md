---
title: EdgeModelLightMapData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EdgeModelLightMapData()                                                          | Create a new instance of this container type.                                                                                     |
| EdgeModelLightMapData(EdgeModelLightMapData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EdgeModelLightMapData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata/). |

## Properties

| Name        | Type                                  | Description |
| ----------- | ------------------------------------- | ----------- |
| lightMapUvs | [Vec4](/vext/ref/shared/class/vec4)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
