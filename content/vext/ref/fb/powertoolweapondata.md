---
title: PowerToolWeaponData
---
### Base Classes

[WeaponData](/vext/ref/fb/weapondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PowerToolWeaponData()                                                          | Create a new instance of this container type.                                                                                 |
| PowerToolWeaponData(PowerToolWeaponData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PowerToolWeaponData([WeaponData](/vext/ref/fb/weapondata/) other)                            | Upcast an instance of type [WeaponData](/vext/ref/fb/weapondata/) to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata/).                            |
| PowerToolWeaponData([ToolData](/vext/ref/fb/tooldata/) other)                                | Upcast an instance of type [ToolData](/vext/ref/fb/tooldata/) to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata/).                                |
| PowerToolWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata/). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| repairSound                | [SoundAsset](/vext/ref/fb/soundasset/)                       |             |
| repairCompletedSound       | [SoundAsset](/vext/ref/fb/soundasset/)                       |             |
| damageSound                | [SoundAsset](/vext/ref/fb/soundasset/)                       |             |
| repairMaterialPair         | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/) |             |
| playFireEffectOnRepairOnly | bool                                           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
