---
title: WeaponFiringData (Frostbite Container)
---
### Base Classes

[GameDataContainer](GameDataContainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| WeaponFiringData()                                                          | Create a new instance of this container type.                                                                           |
| WeaponFiringData(WeaponFiringData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| WeaponFiringData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [WeaponFiringData](WeaponFiringData).              |
| WeaponFiringData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponFiringData](WeaponFiringData). |

## Properties

| Name                        | Type                                     | Description |
| --------------------------- | ---------------------------------------- | ----------- |
| primaryFire                 | [FiringFunctionData](FiringFunctionData) |             |
| deployTime                  | number                                   |             |
| reactivateCooldownTime      | number                                   |             |
| disableZoomOnDeployTime     | number                                   |             |
| altDeployTime               | number                                   |             |
| altDeployId                 | number                                   |             |
| weaponSway                  | [WeaponSwayData](WeaponSwayData)         |             |
| supportDelayProne           | number                                   |             |
| supportDelayStand           | number                                   |             |
| rumble                      | [RumbleFiringData](RumbleFiringData)     |             |
| inflictSelfDamage           | bool                                     |             |
| useAutoAiming               | bool                                     |             |
| showEnemyNametagOnAim       | bool                                     |             |
| reloadWholeMags             | bool                                     |             |
| disableReloadWhileSprinting | bool                                     |             |
| abortReloadOnSprint         | bool                                     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponFiringData](WeaponFiringData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponFiringData](WeaponFiringData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
