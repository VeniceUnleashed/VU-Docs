---
title: WeaponOverrideValue
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                    | Description                                              |
| ---------------------------------------------- | -------------------------------------------------------- |
| WeaponOverrideValue()                          | Create a new instance of this structure type.            |
| WeaponOverrideValue(WeaponOverrideValue other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type                                               | Description |
| --------- | -------------------------------------------------- | ----------- |
| valueType | [WeaponOverrideValueType](/vext/ref/fb/weaponoverridevaluetype/) |             |
| value     | number                                             |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue/) | [Clone](#clone) |            |

### Clone

> [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
