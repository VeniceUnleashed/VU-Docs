---
title: WeaponSoundModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WeaponSoundModifier()                                                          | Create a new instance of this container type.                                                                                 |
| WeaponSoundModifier(WeaponSoundModifier other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| WeaponSoundModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier/).            |
| WeaponSoundModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier/). |

## Properties

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| sound | [SoundAsset](/vext/ref/fb/soundasset/) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
