---
title: FiringFunctionData
---
### Base Classes

[GameDataContainer](/vext/ref/fb/gamedatacontainer/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| FiringFunctionData()                                                          | Create a new instance of this container type.                                                                               |
| FiringFunctionData(FiringFunctionData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| FiringFunctionData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FiringFunctionData](/vext/ref/fb/firingfunctiondata/).              |
| FiringFunctionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FiringFunctionData](/vext/ref/fb/firingfunctiondata/). |

## Properties

| Name                     | Type                                               | Description |
| ------------------------ | -------------------------------------------------- | ----------- |
| dispersion               | [FiringDispersionData](/vext/ref/fb/firingdispersiondata/)\[\]   |             |
| weaponDispersion         | [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion/) |             |
| fireEffects1p            | [FireEffectData](/vext/ref/fb/fireeffectdata/)\[\]               |             |
| fireEffects3p            | [FireEffectData](/vext/ref/fb/fireeffectdata/)\[\]               |             |
| sound                    | [SoundAsset](/vext/ref/fb/soundasset/)                           |             |
| shot                     | [ShotConfigData](/vext/ref/fb/shotconfigdata/)                   |             |
| fireLogic                | [FireLogicData](/vext/ref/fb/firelogicdata/)                     |             |
| ammo                     | [AmmoConfigData](/vext/ref/fb/ammoconfigdata/)                   |             |
| overHeat                 | [OverHeatData](/vext/ref/fb/overheatdata/)                       |             |
| selfHealTimeWhenDeployed | number                                             |             |
| ammoCrateReloadDelay     | number                                             |             |
| unlimitedAmmoForAI       | bool                                               |             |
| usePrimaryAmmo           | bool                                               |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [FiringFunctionData](/vext/ref/fb/firingfunctiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FiringFunctionData](/vext/ref/fb/firingfunctiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
