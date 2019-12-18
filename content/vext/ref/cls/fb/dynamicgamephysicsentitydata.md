---
title: DynamicGamePhysicsEntityData (Frostbite Container)
---
### Base Classes

[GamePhysicsEntityData](GamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicGamePhysicsEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| DynamicGamePhysicsEntityData(DynamicGamePhysicsEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| DynamicGamePhysicsEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData).      |
| DynamicGamePhysicsEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData).                    |
| DynamicGamePhysicsEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData).              |
| DynamicGamePhysicsEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData).                            |
| DynamicGamePhysicsEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData).                    |
| DynamicGamePhysicsEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData).              |
| DynamicGamePhysicsEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData). |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
