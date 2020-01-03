---
title: WeaponSoundModifier
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WeaponSoundModifier()                                                          | Create a new instance of this container type.                                                                                 |
| WeaponSoundModifier(WeaponSoundModifier other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| WeaponSoundModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponSoundModifier](WeaponSoundModifier).            |
| WeaponSoundModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponSoundModifier](WeaponSoundModifier). |

## Properties

| Name  | Type                     | Description |
| ----- | ------------------------ | ----------- |
| sound | [SoundAsset](SoundAsset) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [WeaponSoundModifier](WeaponSoundModifier) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponSoundModifier](WeaponSoundModifier) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
