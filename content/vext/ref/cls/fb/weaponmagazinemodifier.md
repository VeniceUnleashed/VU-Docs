---
title: WeaponMagazineModifier (Frostbite Container)
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WeaponMagazineModifier()                                                          | Create a new instance of this container type.                                                                                       |
| WeaponMagazineModifier(WeaponMagazineModifier other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WeaponMagazineModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponMagazineModifier](WeaponMagazineModifier).            |
| WeaponMagazineModifier([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponMagazineModifier](WeaponMagazineModifier). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| magazineCapacity  | number |             |
| numberOfMagazines | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponMagazineModifier](WeaponMagazineModifier) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponMagazineModifier](WeaponMagazineModifier) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
