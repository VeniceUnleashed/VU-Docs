---
title: HidableSoldierMeshWeaponPart
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
| weaponMesh           | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset/) |             |
| weaponMeshBlueprint  | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)   |             |
| boneName             | string                               |             |
| hideAlways           | bool                                 |             |
| hideInVehicleEntries | bool                                 |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart/) | [Clone](#clone) |            |

### Clone

> [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
