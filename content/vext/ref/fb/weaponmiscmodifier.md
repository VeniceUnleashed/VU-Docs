---
title: WeaponMiscModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WeaponMiscModifier()                                                          | Create a new instance of this container type.                                                                               |
| WeaponMiscModifier(WeaponMiscModifier other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WeaponMiscModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier/).            |
| WeaponMiscModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier/). |

## Properties

| Name                           | Type | Description |
| ------------------------------ | ---- | ----------- |
| enableBreathControl            | bool |             |
| canBeInSupportedShooting       | bool |             |
| unZoomOnBoltAction             | bool |             |
| holdBoltActionUntilZoomRelease | bool |             |
| isSilenced                     | bool |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponMiscModifier](/vext/ref/fb/weaponmiscmodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
