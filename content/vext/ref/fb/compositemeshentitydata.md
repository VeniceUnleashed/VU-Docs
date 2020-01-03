---
title: CompositeMeshEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| CompositeMeshEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| CompositeMeshEntityData(CompositeMeshEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| CompositeMeshEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CompositeMeshEntityData](/vext/ref/fb/compositemeshentitydata/).              |
| CompositeMeshEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CompositeMeshEntityData](/vext/ref/fb/compositemeshentitydata/).                            |
| CompositeMeshEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CompositeMeshEntityData](/vext/ref/fb/compositemeshentitydata/).                    |
| CompositeMeshEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CompositeMeshEntityData](/vext/ref/fb/compositemeshentitydata/).              |
| CompositeMeshEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompositeMeshEntityData](/vext/ref/fb/compositemeshentitydata/). |

## Properties

| Name | Type                                     | Description |
| ---- | ---------------------------------------- | ----------- |
| mesh | [CompositeMeshAsset](/vext/ref/fb/compositemeshasset/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CompositeMeshEntityData](/vext/ref/fb/compositemeshentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CompositeMeshEntityData](/vext/ref/fb/compositemeshentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
