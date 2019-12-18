---
title: LadderEntityData (Frostbite Container)
---
### Base Classes

[StaticModelEntityData](StaticModelEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| LadderEntityData()                                                          | Create a new instance of this container type.                                                                           |
| LadderEntityData(LadderEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| LadderEntityData([StaticModelEntityData](StaticModelEntityData) other)      | Upcast an instance of type [StaticModelEntityData](StaticModelEntityData) to [LadderEntityData](LadderEntityData).      |
| LadderEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [LadderEntityData](LadderEntityData).      |
| LadderEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [LadderEntityData](LadderEntityData).                    |
| LadderEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LadderEntityData](LadderEntityData).              |
| LadderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LadderEntityData](LadderEntityData).                            |
| LadderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LadderEntityData](LadderEntityData).                    |
| LadderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LadderEntityData](LadderEntityData).              |
| LadderEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LadderEntityData](LadderEntityData). |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [LadderEntityData](LadderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LadderEntityData](LadderEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
