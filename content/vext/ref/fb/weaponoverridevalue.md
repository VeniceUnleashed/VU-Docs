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
| valueType | [WeaponOverrideValueType](WeaponOverrideValueType) |             |
| value     | number                                             |             |

## Methods

| Type                                       | Name            | Parameters |
| ------------------------------------------ | --------------- | ---------- |
| [WeaponOverrideValue](WeaponOverrideValue) | [Clone](#clone) |            |

### Clone

> [WeaponOverrideValue](WeaponOverrideValue) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
