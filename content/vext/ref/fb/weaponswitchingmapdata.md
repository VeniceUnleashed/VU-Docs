---
title: WeaponSwitchingMapData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                          | Description                                              |
| ---------------------------------------------------- | -------------------------------------------------------- |
| WeaponSwitchingMapData()                             | Create a new instance of this structure type.            |
| WeaponSwitchingMapData(WeaponSwitchingMapData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type                                           | Description |
| ----------------------- | ---------------------------------------------- | ----------- |
| fromWeapon              | [WeaponSwitchingEnum](WeaponSwitchingEnum)     |             |
| action                  | [EntryInputActionEnum](EntryInputActionEnum)   |             |
| toWeapon                | [WeaponSwitchingEnum](WeaponSwitchingEnum)\[\] |             |
| fireAndSwitchBackToPrev | bool                                           |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [WeaponSwitchingMapData](WeaponSwitchingMapData) | [Clone](#clone) |            |

### Clone

> [WeaponSwitchingMapData](WeaponSwitchingMapData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
