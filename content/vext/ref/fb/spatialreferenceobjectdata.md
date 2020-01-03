---
title: SpatialReferenceObjectData
---
### Base Classes

[ReferenceObjectData](/vext/ref/fb/referenceobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SpatialReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                               |
| SpatialReferenceObjectData(SpatialReferenceObjectData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| SpatialReferenceObjectData([ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) other)          | Upcast an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) to [SpatialReferenceObjectData](/vext/ref/fb/spatialreferenceobjectdata/).          |
| SpatialReferenceObjectData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpatialReferenceObjectData](/vext/ref/fb/spatialreferenceobjectdata/).                    |
| SpatialReferenceObjectData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpatialReferenceObjectData](/vext/ref/fb/spatialreferenceobjectdata/).              |
| SpatialReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpatialReferenceObjectData](/vext/ref/fb/spatialreferenceobjectdata/). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpatialReferenceObjectData](/vext/ref/fb/spatialreferenceobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpatialReferenceObjectData](/vext/ref/fb/spatialreferenceobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
