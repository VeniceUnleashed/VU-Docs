---
title: WeaponAnimatedFireTypeModifier
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponAnimatedFireTypeModifier()                                                          | Create a new instance of this container type.                                                                                                       |
| WeaponAnimatedFireTypeModifier(WeaponAnimatedFireTypeModifier other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| WeaponAnimatedFireTypeModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponAnimatedFireTypeModifier](WeaponAnimatedFireTypeModifier).            |
| WeaponAnimatedFireTypeModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponAnimatedFireTypeModifier](WeaponAnimatedFireTypeModifier). |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| animatedFireType | [AnimatedFireEnum](AnimatedFireEnum) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponAnimatedFireTypeModifier](WeaponAnimatedFireTypeModifier) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponAnimatedFireTypeModifier](WeaponAnimatedFireTypeModifier) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
