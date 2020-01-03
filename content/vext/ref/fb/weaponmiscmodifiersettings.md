---
title: WeaponMiscModifierSettings
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| WeaponMiscModifierSettings()                                 | Create a new instance of this structure type.            |
| WeaponMiscModifierSettings(WeaponMiscModifierSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                           | Type | Description |
| ------------------------------ | ---- | ----------- |
| enableBreathControl            | bool |             |
| canBeInSupportedShooting       | bool |             |
| unZoomOnBoltAction             | bool |             |
| holdBoltActionUntilZoomRelease | bool |             |
| isSilenced                     | bool |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [WeaponMiscModifierSettings](WeaponMiscModifierSettings) | [Clone](#clone) |            |

### Clone

> [WeaponMiscModifierSettings](WeaponMiscModifierSettings) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
