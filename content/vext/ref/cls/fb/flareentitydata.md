---
title: FlareEntityData (Frostbite Container)
---
### Base Classes

[GrenadeEntityData](GrenadeEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                            |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| FlareEntityData()                                                           | Create a new instance of this container type.                                                                          |
| FlareEntityData(FlareEntityData other)                                      | Create a reference copy of an instance of the same type.                                                               |
| FlareEntityData([GrenadeEntityData](GrenadeEntityData) other)               | Upcast an instance of type [GrenadeEntityData](GrenadeEntityData) to [FlareEntityData](FlareEntityData).               |
| FlareEntityData([MeshProjectileEntityData](MeshProjectileEntityData) other) | Upcast an instance of type [MeshProjectileEntityData](MeshProjectileEntityData) to [FlareEntityData](FlareEntityData). |
| FlareEntityData([ProjectileEntityData](ProjectileEntityData) other)         | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [FlareEntityData](FlareEntityData).         |
| FlareEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)       | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [FlareEntityData](FlareEntityData).       |
| FlareEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [FlareEntityData](FlareEntityData).                     |
| FlareEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [FlareEntityData](FlareEntityData).               |
| FlareEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [FlareEntityData](FlareEntityData).                             |
| FlareEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [FlareEntityData](FlareEntityData).                     |
| FlareEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FlareEntityData](FlareEntityData).               |
| FlareEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FlareEntityData](FlareEntityData).  |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| flareRange | number |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [FlareEntityData](FlareEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FlareEntityData](FlareEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
