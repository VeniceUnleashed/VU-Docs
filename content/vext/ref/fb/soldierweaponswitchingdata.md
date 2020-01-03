---
title: SoldierWeaponSwitchingData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierWeaponSwitchingData()                                                          | Create a new instance of this container type.                                                                                               |
| SoldierWeaponSwitchingData(SoldierWeaponSwitchingData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| SoldierWeaponSwitchingData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata/).                                      |
| SoldierWeaponSwitchingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata/). |

## Properties

| Name                       | Type                                                             | Description |
| -------------------------- | ---------------------------------------------------------------- | ----------- |
| switchMap                  | [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata/)\[\]             |             |
| directSwitchMap            | [DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata/)\[\] |             |
| switchToGadgetCooldownTime | number                                                           |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierWeaponSwitchingData](/vext/ref/fb/soldierweaponswitchingdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
