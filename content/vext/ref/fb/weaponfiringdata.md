---
title: WeaponFiringData
---
### Base Classes

[GameDataContainer](/vext/ref/fb/gamedatacontainer/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| WeaponFiringData()                                                          | Create a new instance of this container type.                                                                           |
| WeaponFiringData(WeaponFiringData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| WeaponFiringData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [WeaponFiringData](/vext/ref/fb/weaponfiringdata/).              |
| WeaponFiringData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponFiringData](/vext/ref/fb/weaponfiringdata/). |

## Properties

| Name                        | Type                                     | Description |
| --------------------------- | ---------------------------------------- | ----------- |
| primaryFire                 | [FiringFunctionData](/vext/ref/fb/firingfunctiondata/) |             |
| deployTime                  | number                                   |             |
| reactivateCooldownTime      | number                                   |             |
| disableZoomOnDeployTime     | number                                   |             |
| altDeployTime               | number                                   |             |
| altDeployId                 | number                                   |             |
| weaponSway                  | [WeaponSwayData](/vext/ref/fb/weaponswaydata/)         |             |
| supportDelayProne           | number                                   |             |
| supportDelayStand           | number                                   |             |
| rumble                      | [RumbleFiringData](/vext/ref/fb/rumblefiringdata/)     |             |
| inflictSelfDamage           | bool                                     |             |
| useAutoAiming               | bool                                     |             |
| showEnemyNametagOnAim       | bool                                     |             |
| reloadWholeMags             | bool                                     |             |
| disableReloadWhileSprinting | bool                                     |             |
| abortReloadOnSprint         | bool                                     |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponFiringData](/vext/ref/fb/weaponfiringdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponFiringData](/vext/ref/fb/weaponfiringdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
