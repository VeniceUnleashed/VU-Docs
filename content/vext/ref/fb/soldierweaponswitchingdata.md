---
title: SoldierWeaponSwitchingData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponSwitchingData()                                                          | Create a new instance of this container type.                                                                                               |
| SoldierWeaponSwitchingData(SoldierWeaponSwitchingData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| SoldierWeaponSwitchingData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierWeaponSwitchingData](SoldierWeaponSwitchingData).                                      |
| SoldierWeaponSwitchingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponSwitchingData](SoldierWeaponSwitchingData). |

## Properties

| Name                       | Type                                                             | Description |
| -------------------------- | ---------------------------------------------------------------- | ----------- |
| switchMap                  | [WeaponSwitchingMapData](WeaponSwitchingMapData)\[\]             |             |
| directSwitchMap            | [DirectWeaponSwitchingMapData](DirectWeaponSwitchingMapData)\[\] |             |
| switchToGadgetCooldownTime | number                                                           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponSwitchingData](SoldierWeaponSwitchingData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponSwitchingData](SoldierWeaponSwitchingData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
