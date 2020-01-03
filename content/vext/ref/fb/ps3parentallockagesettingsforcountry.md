---
title: Ps3ParentalLockAgeSettingsForCountry
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                                      | Description                                              |
| -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Ps3ParentalLockAgeSettingsForCountry()                                           | Create a new instance of this structure type.            |
| Ps3ParentalLockAgeSettingsForCountry(Ps3ParentalLockAgeSettingsForCountry other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                         | Description |
| ----------- | ---------------------------- | ----------- |
| countryCode | string                       |             |
| ageLevels   | [Ps3AgeLevels](Ps3AgeLevels) |             |

## Methods

| Type                                                                         | Name            | Parameters |
| ---------------------------------------------------------------------------- | --------------- | ---------- |
| [Ps3ParentalLockAgeSettingsForCountry](Ps3ParentalLockAgeSettingsForCountry) | [Clone](#clone) |            |

### Clone

> [Ps3ParentalLockAgeSettingsForCountry](Ps3ParentalLockAgeSettingsForCountry) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
