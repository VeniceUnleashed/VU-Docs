---
title: PowerToolWeaponData
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PowerToolWeaponData()                                                          | Create a new instance of this container type.                                                                                 |
| PowerToolWeaponData(PowerToolWeaponData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PowerToolWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [PowerToolWeaponData](PowerToolWeaponData).                            |
| PowerToolWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [PowerToolWeaponData](PowerToolWeaponData).                                |
| PowerToolWeaponData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PowerToolWeaponData](PowerToolWeaponData). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| repairSound                | [SoundAsset](SoundAsset)                       |             |
| repairCompletedSound       | [SoundAsset](SoundAsset)                       |             |
| damageSound                | [SoundAsset](SoundAsset)                       |             |
| repairMaterialPair         | [MaterialContainerPair](MaterialContainerPair) |             |
| playFireEffectOnRepairOnly | bool                                           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PowerToolWeaponData](PowerToolWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PowerToolWeaponData](PowerToolWeaponData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
