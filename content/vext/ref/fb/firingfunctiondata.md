---
title: FiringFunctionData
---
### Base Classes

[GameDataContainer](GameDataContainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| FiringFunctionData()                                                          | Create a new instance of this container type.                                                                               |
| FiringFunctionData(FiringFunctionData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| FiringFunctionData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FiringFunctionData](FiringFunctionData).              |
| FiringFunctionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FiringFunctionData](FiringFunctionData). |

## Properties

| Name                     | Type                                               | Description |
| ------------------------ | -------------------------------------------------- | ----------- |
| dispersion               | [FiringDispersionData](FiringDispersionData)\[\]   |             |
| weaponDispersion         | [SoldierWeaponDispersion](SoldierWeaponDispersion) |             |
| fireEffects1p            | [FireEffectData](FireEffectData)\[\]               |             |
| fireEffects3p            | [FireEffectData](FireEffectData)\[\]               |             |
| sound                    | [SoundAsset](SoundAsset)                           |             |
| shot                     | [ShotConfigData](ShotConfigData)                   |             |
| fireLogic                | [FireLogicData](FireLogicData)                     |             |
| ammo                     | [AmmoConfigData](AmmoConfigData)                   |             |
| overHeat                 | [OverHeatData](OverHeatData)                       |             |
| selfHealTimeWhenDeployed | number                                             |             |
| ammoCrateReloadDelay     | number                                             |             |
| unlimitedAmmoForAI       | bool                                               |             |
| usePrimaryAmmo           | bool                                               |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [FiringFunctionData](FiringFunctionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FiringFunctionData](FiringFunctionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
