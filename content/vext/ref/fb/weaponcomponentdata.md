---
title: WeaponComponentData
---
### Base Classes

[PartComponentData](/vext/ref/fb/partcomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WeaponComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| WeaponComponentData(WeaponComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| WeaponComponentData([PartComponentData](/vext/ref/fb/partcomponentdata/) other)              | Upcast an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata/) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata/).              |
| WeaponComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata/).                      |
| WeaponComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata/).                    |
| WeaponComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata/).              |
| WeaponComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponComponentData](/vext/ref/fb/weaponcomponentdata/). |

## Properties

| Name                             | Type                                         | Description |
| -------------------------------- | -------------------------------------------- | ----------- |
| projectileSpawnOffset            | [Vec3](/vext/ref/shared/class/vec3)            |             |
| impulseStrength                  | number                                       |             |
| weaponMesh                       | [MeshAsset](/vext/ref/fb/meshasset/)                       |             |
| weaponFiring                     | [WeaponFiringData](/vext/ref/fb/weaponfiringdata/)         |             |
| damageGiverName                  | string                                       |             |
| aiData                           | [GameAIWeaponData](/vext/ref/fb/gameaiweapondata/)         |             |
| customWeaponType                 | [WeaponData](/vext/ref/fb/weapondata/)                     |             |
| classification                   | [WeaponClassification](/vext/ref/fb/weaponclassification/) |             |
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
| [WeaponComponentData](/vext/ref/fb/weaponcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponComponentData](/vext/ref/fb/weaponcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
