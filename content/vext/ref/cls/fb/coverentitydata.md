---
title: CoverEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| CoverEntityData()                                                          | Create a new instance of this container type.                                                                         |
| CoverEntityData(CoverEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| CoverEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [CoverEntityData](CoverEntityData).              |
| CoverEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CoverEntityData](CoverEntityData).                            |
| CoverEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CoverEntityData](CoverEntityData).                    |
| CoverEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CoverEntityData](CoverEntityData).              |
| CoverEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CoverEntityData](CoverEntityData). |

## Properties

| Name             | Type                       | Description |
| ---------------- | -------------------------- | ----------- |
| width            | number                     |             |
| coverType        | [CoverType](CoverType)     |             |
| slots            | [CoverSlot](CoverSlot)\[\] |             |
| rightEdgeBlocked | bool                       |             |
| topBlocked       | bool                       |             |
| leftEdgeBlocked  | bool                       |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [CoverEntityData](CoverEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CoverEntityData](CoverEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
