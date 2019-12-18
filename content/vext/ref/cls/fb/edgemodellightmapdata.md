---
title: EdgeModelLightMapData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EdgeModelLightMapData()                                                          | Create a new instance of this container type.                                                                                     |
| EdgeModelLightMapData(EdgeModelLightMapData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EdgeModelLightMapData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EdgeModelLightMapData](EdgeModelLightMapData). |

## Properties

| Name        | Type                                  | Description |
| ----------- | ------------------------------------- | ----------- |
| lightMapUvs | [Vec4](/vext/ref/cls/shr/Vec4)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EdgeModelLightMapData](EdgeModelLightMapData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EdgeModelLightMapData](EdgeModelLightMapData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
