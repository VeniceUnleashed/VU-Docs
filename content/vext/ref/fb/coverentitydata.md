---
title: CoverEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| CoverEntityData()                                                          | Create a new instance of this container type.                                                                         |
| CoverEntityData(CoverEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| CoverEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CoverEntityData](/vext/ref/fb/coverentitydata/).              |
| CoverEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CoverEntityData](/vext/ref/fb/coverentitydata/).                            |
| CoverEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CoverEntityData](/vext/ref/fb/coverentitydata/).                    |
| CoverEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CoverEntityData](/vext/ref/fb/coverentitydata/).              |
| CoverEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CoverEntityData](/vext/ref/fb/coverentitydata/). |

## Properties

| Name             | Type                       | Description |
| ---------------- | -------------------------- | ----------- |
| width            | number                     |             |
| coverType        | [CoverType](/vext/ref/fb/covertype/)     |             |
| slots            | [CoverSlot](/vext/ref/fb/coverslot/)\[\] |             |
| rightEdgeBlocked | bool                       |             |
| topBlocked       | bool                       |             |
| leftEdgeBlocked  | bool                       |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [CoverEntityData](/vext/ref/fb/coverentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CoverEntityData](/vext/ref/fb/coverentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
