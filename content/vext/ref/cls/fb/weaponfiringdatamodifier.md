---
title: WeaponFiringDataModifier (Frostbite Container)
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponFiringDataModifier()                                                          | Create a new instance of this container type.                                                                                           |
| WeaponFiringDataModifier(WeaponFiringDataModifier other)                            | Create a reference copy of an instance of the same type.                                                                                |
| WeaponFiringDataModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponFiringDataModifier](WeaponFiringDataModifier).            |
| WeaponFiringDataModifier([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponFiringDataModifier](WeaponFiringDataModifier). |

## Properties

| Name         | Type                                 | Description |
| ------------ | ------------------------------------ | ----------- |
| weaponFiring | [WeaponFiringData](WeaponFiringData) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponFiringDataModifier](WeaponFiringDataModifier) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponFiringDataModifier](WeaponFiringDataModifier) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
