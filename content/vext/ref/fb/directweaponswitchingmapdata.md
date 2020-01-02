---
title: DirectWeaponSwitchingMapData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| DirectWeaponSwitchingMapData()                                   | Create a new instance of this structure type.            |
| DirectWeaponSwitchingMapData(DirectWeaponSwitchingMapData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                           | Type                                         | Description |
| ------------------------------ | -------------------------------------------- | ----------- |
| action                         | [EntryInputActionEnum](EntryInputActionEnum) |             |
| toWeapon                       | [WeaponSwitchingEnum](WeaponSwitchingEnum)   |             |
| preventMeleeRepeatTime         | number                                       |             |
| switchBackToPrevMaxTimePressed | number                                       |             |
| useQuickSwitch                 | bool                                         |             |
| fireAndSwitchBackToPrev        | bool                                         |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [DirectWeaponSwitchingMapData](DirectWeaponSwitchingMapData) | [Clone](#clone) |            |

### Clone

> [DirectWeaponSwitchingMapData](DirectWeaponSwitchingMapData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
