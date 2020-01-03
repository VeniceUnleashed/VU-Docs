---
title: WeaponClassModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WeaponClassModifier()                                                          | Create a new instance of this container type.                                                                                 |
| WeaponClassModifier(WeaponClassModifier other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| WeaponClassModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier/).            |
| WeaponClassModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier/). |

## Properties

| Name        | Type                               | Description |
| ----------- | ---------------------------------- | ----------- |
| weaponClass | [WeaponClassEnum](/vext/ref/fb/weaponclassenum/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
