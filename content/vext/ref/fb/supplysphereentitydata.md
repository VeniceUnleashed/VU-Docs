---
title: SupplySphereEntityData
---
### Base Classes

[ExplosionPackEntityData](ExplosionPackEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                          |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| SupplySphereEntityData()                                                           | Create a new instance of this container type.                                                                                        |
| SupplySphereEntityData(SupplySphereEntityData other)                               | Create a reference copy of an instance of the same type.                                                                             |
| SupplySphereEntityData([ExplosionPackEntityData](ExplosionPackEntityData) other)   | Upcast an instance of type [ExplosionPackEntityData](ExplosionPackEntityData) to [SupplySphereEntityData](SupplySphereEntityData).   |
| SupplySphereEntityData([MeshProjectileEntityData](MeshProjectileEntityData) other) | Upcast an instance of type [MeshProjectileEntityData](MeshProjectileEntityData) to [SupplySphereEntityData](SupplySphereEntityData). |
| SupplySphereEntityData([ProjectileEntityData](ProjectileEntityData) other)         | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [SupplySphereEntityData](SupplySphereEntityData).         |
| SupplySphereEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)       | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [SupplySphereEntityData](SupplySphereEntityData).       |
| SupplySphereEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [SupplySphereEntityData](SupplySphereEntityData).                     |
| SupplySphereEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [SupplySphereEntityData](SupplySphereEntityData).               |
| SupplySphereEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [SupplySphereEntityData](SupplySphereEntityData).                             |
| SupplySphereEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [SupplySphereEntityData](SupplySphereEntityData).                     |
| SupplySphereEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SupplySphereEntityData](SupplySphereEntityData).               |
| SupplySphereEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupplySphereEntityData](SupplySphereEntityData).  |

## Properties

| Name       | Type                     | Description |
| ---------- | ------------------------ | ----------- |
| supplyData | [SupplyData](SupplyData) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SupplySphereEntityData](SupplySphereEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupplySphereEntityData](SupplySphereEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
