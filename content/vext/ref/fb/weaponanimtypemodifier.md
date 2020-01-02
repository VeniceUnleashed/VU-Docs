---
title: WeaponAnimTypeModifier
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WeaponAnimTypeModifier()                                                          | Create a new instance of this container type.                                                                                       |
| WeaponAnimTypeModifier(WeaponAnimTypeModifier other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WeaponAnimTypeModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponAnimTypeModifier](WeaponAnimTypeModifier).            |
| WeaponAnimTypeModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponAnimTypeModifier](WeaponAnimTypeModifier). |

## Properties

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| weaponAnimType | [WeaponAnimType](WeaponAnimType) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponAnimTypeModifier](WeaponAnimTypeModifier) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponAnimTypeModifier](WeaponAnimTypeModifier) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
