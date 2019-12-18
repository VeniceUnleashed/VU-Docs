---
title: HidableSoldierMeshWeaponPart (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| HidableSoldierMeshWeaponPart()                                   | Create a new instance of this structure type.            |
| HidableSoldierMeshWeaponPart(HidableSoldierMeshWeaponPart other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| weaponMesh           | [SkinnedMeshAsset](SkinnedMeshAsset) |             |
| weaponMeshBlueprint  | [ObjectBlueprint](ObjectBlueprint)   |             |
| boneName             | string                               |             |
| hideAlways           | bool                                 |             |
| hideInVehicleEntries | bool                                 |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [HidableSoldierMeshWeaponPart](HidableSoldierMeshWeaponPart) | [Clone](#clone) |            |

### Clone

> [HidableSoldierMeshWeaponPart](HidableSoldierMeshWeaponPart) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
