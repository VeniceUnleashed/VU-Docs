---
title: GrenadeEntityData
---
### Base Classes

[MeshProjectileEntityData](MeshProjectileEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| GrenadeEntityData()                                                           | Create a new instance of this container type.                                                                              |
| GrenadeEntityData(GrenadeEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                   |
| GrenadeEntityData([MeshProjectileEntityData](MeshProjectileEntityData) other) | Upcast an instance of type [MeshProjectileEntityData](MeshProjectileEntityData) to [GrenadeEntityData](GrenadeEntityData). |
| GrenadeEntityData([ProjectileEntityData](ProjectileEntityData) other)         | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [GrenadeEntityData](GrenadeEntityData).         |
| GrenadeEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)       | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [GrenadeEntityData](GrenadeEntityData).       |
| GrenadeEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [GrenadeEntityData](GrenadeEntityData).                     |
| GrenadeEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [GrenadeEntityData](GrenadeEntityData).               |
| GrenadeEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [GrenadeEntityData](GrenadeEntityData).                             |
| GrenadeEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [GrenadeEntityData](GrenadeEntityData).                     |
| GrenadeEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GrenadeEntityData](GrenadeEntityData).               |
| GrenadeEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GrenadeEntityData](GrenadeEntityData).  |

## Properties

| Name                     | Type                       | Description |
| ------------------------ | -------------------------- | ----------- |
| collisionSpeedMultiplier | number                     |             |
| gravity                  | number                     |             |
| grenadeType              | [GrenadeType](GrenadeType) |             |
| minBounceSpeed           | number                     |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [GrenadeEntityData](GrenadeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GrenadeEntityData](GrenadeEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
