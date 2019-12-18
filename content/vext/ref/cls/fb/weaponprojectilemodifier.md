---
title: WeaponProjectileModifier (Frostbite Container)
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponProjectileModifier()                                                          | Create a new instance of this container type.                                                                                           |
| WeaponProjectileModifier(WeaponProjectileModifier other)                            | Create a reference copy of an instance of the same type.                                                                                |
| WeaponProjectileModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponProjectileModifier](WeaponProjectileModifier).            |
| WeaponProjectileModifier([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponProjectileModifier](WeaponProjectileModifier). |

## Properties

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| projectileData | [ProjectileEntityData](ProjectileEntityData) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponProjectileModifier](WeaponProjectileModifier) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponProjectileModifier](WeaponProjectileModifier) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
