---
title: SpawnScreenWeaponData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| SpawnScreenWeaponData()                            | Create a new instance of this structure type.            |
| SpawnScreenWeaponData(SpawnScreenWeaponData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                         | Description |
| ---------- | ---------------------------- | ----------- |
| weaponName | string                       |             |
| texture    | [TextureAsset](/vext/ref/fb/textureasset/) |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata/) | [Clone](#clone) |            |

### Clone

> [SpawnScreenWeaponData](/vext/ref/fb/spawnscreenweapondata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
