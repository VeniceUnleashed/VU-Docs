---
title: Ps3ParentalLockAgeSettingsOverrides (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                    | Description                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ps3ParentalLockAgeSettingsOverrides()                                                          | Create a new instance of this container type.                                                                                                                 |
| Ps3ParentalLockAgeSettingsOverrides(Ps3ParentalLockAgeSettingsOverrides other)                 | Create a reference copy of an instance of the same type.                                                                                                      |
| Ps3ParentalLockAgeSettingsOverrides([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Ps3ParentalLockAgeSettingsOverrides](Ps3ParentalLockAgeSettingsOverrides). |

## Properties

| Name      | Type                                                                             | Description |
| --------- | -------------------------------------------------------------------------------- | ----------- |
| overrides | [Ps3ParentalLockAgeSettingsForCountry](Ps3ParentalLockAgeSettingsForCountry)\[\] |             |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [Ps3ParentalLockAgeSettingsOverrides](Ps3ParentalLockAgeSettingsOverrides) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Ps3ParentalLockAgeSettingsOverrides](Ps3ParentalLockAgeSettingsOverrides) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
