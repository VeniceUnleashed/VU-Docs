---
title: WeaponAnimatedFireTypeModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponAnimatedFireTypeModifier()                                                          | Create a new instance of this container type.                                                                                                       |
| WeaponAnimatedFireTypeModifier(WeaponAnimatedFireTypeModifier other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| WeaponAnimatedFireTypeModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponAnimatedFireTypeModifier](/vext/ref/fb/weaponanimatedfiretypemodifier/).            |
| WeaponAnimatedFireTypeModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponAnimatedFireTypeModifier](/vext/ref/fb/weaponanimatedfiretypemodifier/). |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| animatedFireType | [AnimatedFireEnum](/vext/ref/fb/animatedfireenum/) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponAnimatedFireTypeModifier](/vext/ref/fb/weaponanimatedfiretypemodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponAnimatedFireTypeModifier](/vext/ref/fb/weaponanimatedfiretypemodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
