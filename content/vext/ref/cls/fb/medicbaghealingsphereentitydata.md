---
title: MedicBagHealingSphereEntityData (Frostbite Container)
---
### Base Classes

[ExplosionPackEntityData](ExplosionPackEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MedicBagHealingSphereEntityData()                                                           | Create a new instance of this container type.                                                                                                          |
| MedicBagHealingSphereEntityData(MedicBagHealingSphereEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                               |
| MedicBagHealingSphereEntityData([ExplosionPackEntityData](ExplosionPackEntityData) other)   | Upcast an instance of type [ExplosionPackEntityData](ExplosionPackEntityData) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).   |
| MedicBagHealingSphereEntityData([MeshProjectileEntityData](MeshProjectileEntityData) other) | Upcast an instance of type [MeshProjectileEntityData](MeshProjectileEntityData) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData). |
| MedicBagHealingSphereEntityData([ProjectileEntityData](ProjectileEntityData) other)         | Upcast an instance of type [ProjectileEntityData](ProjectileEntityData) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).         |
| MedicBagHealingSphereEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)       | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).       |
| MedicBagHealingSphereEntityData([GameEntityData](GameEntityData) other)                     | Upcast an instance of type [GameEntityData](GameEntityData) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).                     |
| MedicBagHealingSphereEntityData([SpatialEntityData](SpatialEntityData) other)               | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).               |
| MedicBagHealingSphereEntityData([EntityData](EntityData) other)                             | Upcast an instance of type [EntityData](EntityData) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).                             |
| MedicBagHealingSphereEntityData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).                     |
| MedicBagHealingSphereEntityData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).               |
| MedicBagHealingSphereEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData).  |

## Properties

| Name   | Type                                   | Description |
| ------ | -------------------------------------- | ----------- |
| healer | [HealingSphereData](HealingSphereData) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MedicBagHealingSphereEntityData](MedicBagHealingSphereEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
