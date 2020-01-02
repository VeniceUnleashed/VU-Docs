---
title: WeaponShotModifier
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| WeaponShotModifier()                                                          | Create a new instance of this container type.                                                                               |
| WeaponShotModifier(WeaponShotModifier other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| WeaponShotModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponShotModifier](WeaponShotModifier).            |
| WeaponShotModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponShotModifier](WeaponShotModifier). |

## Properties

| Name                    | Type                              | Description |
| ----------------------- | --------------------------------- | ----------- |
| initialSpeed            | [Vec3](/vext/ref/shared/class/Vec3) |             |
| numberOfBulletsPerShell | number                            |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponShotModifier](WeaponShotModifier) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponShotModifier](WeaponShotModifier) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
