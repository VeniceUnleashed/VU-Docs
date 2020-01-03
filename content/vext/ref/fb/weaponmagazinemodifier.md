---
title: WeaponMagazineModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| WeaponMagazineModifier()                                                          | Create a new instance of this container type.                                                                                       |
| WeaponMagazineModifier(WeaponMagazineModifier other)                              | Create a reference copy of an instance of the same type.                                                                            |
| WeaponMagazineModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponMagazineModifier](/vext/ref/fb/weaponmagazinemodifier/).            |
| WeaponMagazineModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponMagazineModifier](/vext/ref/fb/weaponmagazinemodifier/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| magazineCapacity  | number |             |
| numberOfMagazines | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponMagazineModifier](/vext/ref/fb/weaponmagazinemodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponMagazineModifier](/vext/ref/fb/weaponmagazinemodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
