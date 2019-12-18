---
title: MedicBagEntityData (Frostbite Container)
---
### Base Classes

[ExplosionPackEntityData](ExplosionPackEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                  |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| MedicBagEntityData()                                                           | Create a new instance of this container type.                                                                                |
| MedicBagEntityData(MedicBagEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                     |
| MedicBagEntityData([ExplosionPackEntityData](ExplosionPackEntityData) other)   | Upcast an instance of type [ExplosionPackEntityData](ExplosionPackEntityData) to [MedicBagEntityData](MedicBagEntityData).   |
| MedicBagEntityData([MeshProjectileEntityData](MeshProjectileEntityData) other) | Upcast an instance of type [MeshProjectileEntityData](MeshProjectileEntityData) to [MedicBagEntityData](MedicBagEntityData). |
| MedicBagEntityData([ProjectileEntityData](ProjectileEntityData) other)         | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [MedicBagEntityData](MedicBagEntityData).         |
| MedicBagEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)       | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [MedicBagEntityData](MedicBagEntityData).       |
| MedicBagEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [MedicBagEntityData](MedicBagEntityData).                     |
| MedicBagEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MedicBagEntityData](MedicBagEntityData).               |
| MedicBagEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [MedicBagEntityData](MedicBagEntityData).                             |
| MedicBagEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [MedicBagEntityData](MedicBagEntityData).                     |
| MedicBagEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MedicBagEntityData](MedicBagEntityData).               |
| MedicBagEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MedicBagEntityData](MedicBagEntityData).  |

## Properties

| Name   | Type                     | Description |
| ------ | ------------------------ | ----------- |
| healer | [HealerData](HealerData) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MedicBagEntityData](MedicBagEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MedicBagEntityData](MedicBagEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
