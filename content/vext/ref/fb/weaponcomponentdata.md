---
title: WeaponComponentData
---
### Base Classes

[PartComponentData](PartComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WeaponComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| WeaponComponentData(WeaponComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| WeaponComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [WeaponComponentData](WeaponComponentData).              |
| WeaponComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [WeaponComponentData](WeaponComponentData).                      |
| WeaponComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [WeaponComponentData](WeaponComponentData).                    |
| WeaponComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WeaponComponentData](WeaponComponentData).              |
| WeaponComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponComponentData](WeaponComponentData). |

## Properties

| Name                             | Type                                         | Description |
| -------------------------------- | -------------------------------------------- | ----------- |
| projectileSpawnOffset            | [Vec3](/vext/ref/shared/class/vec3)            |             |
| impulseStrength                  | number                                       |             |
| weaponMesh                       | [MeshAsset](MeshAsset)                       |             |
| weaponFiring                     | [WeaponFiringData](WeaponFiringData)         |             |
| damageGiverName                  | string                                       |             |
| aiData                           | [GameAIWeaponData](GameAIWeaponData)         |             |
| customWeaponType                 | [WeaponData](WeaponData)                     |             |
| classification                   | [WeaponClassification](WeaponClassification) |             |
| explosionDamageMultiplier        | number                                       |             |
| reloadTimeMultiplier             | number                                       |             |
| damageMultiplier                 | number                                       |             |
| weaponItemHash                   | number                                       |             |
| overheatDropPerSecondMultiplier  | number                                       |             |
| lockTimeMultiplier               | number                                       |             |
| lockingAcceptanceAngleMultiplier | number                                       |             |
| sequentialFiring                 | bool                                         |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponComponentData](WeaponComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponComponentData](WeaponComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
