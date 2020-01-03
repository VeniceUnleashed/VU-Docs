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
| fromWeapon              | [WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum/)     |             |
| action                  | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)   |             |
| toWeapon                | [WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum/)\[\] |             |
| fireAndSwitchBackToPrev | bool                                           |             |

## Methods

| Type                                             | Name            | Parameters |
| ------------------------------------------------ | --------------- | ---------- |
| [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata/) | [Clone](#clone) |            |

### Clone

> [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
