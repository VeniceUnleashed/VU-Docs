---
title: DebugTestEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| DebugTestEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| DebugTestEntityData(DebugTestEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| DebugTestEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DebugTestEntityData](DebugTestEntityData).                    |
| DebugTestEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DebugTestEntityData](DebugTestEntityData).              |
| DebugTestEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DebugTestEntityData](DebugTestEntityData).                            |
| DebugTestEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DebugTestEntityData](DebugTestEntityData).                    |
| DebugTestEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DebugTestEntityData](DebugTestEntityData).              |
| DebugTestEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DebugTestEntityData](DebugTestEntityData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [DebugTestEntityData](DebugTestEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DebugTestEntityData](DebugTestEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
