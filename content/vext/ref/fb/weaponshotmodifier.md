---
title: WeaponShotModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WeaponShotModifier()                                                          | Create a new instance of this container type.                                                                               |
| WeaponShotModifier(WeaponShotModifier other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WeaponShotModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier/).            |
| WeaponShotModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier/). |

## Properties

| Name                    | Type                              | Description |
| ----------------------- | --------------------------------- | ----------- |
| initialSpeed            | [Vec3](/vext/ref/shared/class/vec3) |             |
| numberOfBulletsPerShell | number                            |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
