---
title: WeaponAnimTypeModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WeaponAnimTypeModifier()                                                          | Create a new instance of this container type.                                                                                       |
| WeaponAnimTypeModifier(WeaponAnimTypeModifier other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WeaponAnimTypeModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponAnimTypeModifier](/vext/ref/fb/weaponanimtypemodifier/).            |
| WeaponAnimTypeModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponAnimTypeModifier](/vext/ref/fb/weaponanimtypemodifier/). |

## Properties

| Name           | Type                             | Description |
| -------------- | -------------------------------- | ----------- |
| weaponAnimType | [WeaponAnimType](/vext/ref/fb/weaponanimtype/) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponAnimTypeModifier](/vext/ref/fb/weaponanimtypemodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponAnimTypeModifier](/vext/ref/fb/weaponanimtypemodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
