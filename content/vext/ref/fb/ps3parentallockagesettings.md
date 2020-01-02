---
title: Ps3ParentalLockAgeSettings
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                  | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| Ps3ParentalLockAgeSettings()                                 | Create a new instance of this structure type.            |
| Ps3ParentalLockAgeSettings(Ps3ParentalLockAgeSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name             | Type                                                                       | Description |
| ---------------- | -------------------------------------------------------------------------- | ----------- |
| region           | string                                                                     |             |
| ageLevels        | [Ps3AgeLevels](Ps3AgeLevels)                                               |             |
| countryOverrides | [Ps3ParentalLockAgeSettingsOverrides](Ps3ParentalLockAgeSettingsOverrides) |             |

## Methods

| Type                                                     | Name            | Parameters |
| -------------------------------------------------------- | --------------- | ---------- |
| [Ps3ParentalLockAgeSettings](Ps3ParentalLockAgeSettings) | [Clone](#clone) |            |

### Clone

> [Ps3ParentalLockAgeSettings](Ps3ParentalLockAgeSettings) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
