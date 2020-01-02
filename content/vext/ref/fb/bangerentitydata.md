---
title: BangerEntityData
---
### Base Classes

[DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                      |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| BangerEntityData()                                                                   | Create a new instance of this container type.                                                                                    |
| BangerEntityData(BangerEntityData other)                                             | Create a reference copy of an instance of the same type.                                                                         |
| BangerEntityData([DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData) other) | Upcast an instance of type [DynamicGamePhysicsEntityData](DynamicGamePhysicsEntityData) to [BangerEntityData](BangerEntityData). |
| BangerEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)               | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [BangerEntityData](BangerEntityData).               |
| BangerEntityData([GameEntityData](GameEntityData) other)                             | Upcast an instance of type [GameEntityData](GameEntityData) to [BangerEntityData](BangerEntityData).                             |
| BangerEntityData([SpatialEntityData](SpatialEntityData) other)                       | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [BangerEntityData](BangerEntityData).                       |
| BangerEntityData([EntityData](EntityData) other)                                     | Upcast an instance of type [EntityData](EntityData) to [BangerEntityData](BangerEntityData).                                     |
| BangerEntityData([GameObjectData](GameObjectData) other)                             | Upcast an instance of type [GameObjectData](GameObjectData) to [BangerEntityData](BangerEntityData).                             |
| BangerEntityData([GameDataContainer](GameDataContainer) other)                       | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BangerEntityData](BangerEntityData).                       |
| BangerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BangerEntityData](BangerEntityData).          |

## Properties

| Name                        | Type                                       | Description |
| --------------------------- | ------------------------------------------ | ----------- |
| scales                      | number\[\]                                 |             |
| mesh                        | [MeshAsset](MeshAsset)                     |             |
| explosion                   | [ExplosionEntityData](ExplosionEntityData) |             |
| timeToLive                  | number                                     |             |
| destructiblePartCount       | number                                     |             |
| useVariableNetworkFrequency | bool                                       |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [BangerEntityData](BangerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BangerEntityData](BangerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
