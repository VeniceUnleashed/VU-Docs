---
title: WeaponAnimationConfigurationModifier
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponAnimationConfigurationModifier()                                                          | Create a new instance of this container type.                                                                                                                   |
| WeaponAnimationConfigurationModifier(WeaponAnimationConfigurationModifier other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| WeaponAnimationConfigurationModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponAnimationConfigurationModifier](WeaponAnimationConfigurationModifier).            |
| WeaponAnimationConfigurationModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponAnimationConfigurationModifier](WeaponAnimationConfigurationModifier). |

## Properties

| Name                           | Type                                                     | Description |
| ------------------------------ | -------------------------------------------------------- | ----------- |
| zoomInOutMeshTransitionFactors | number\[\]                                               |             |
| animationConfiguration         | [AnimationConfigurationData](AnimationConfigurationData) |             |
| animatedFireType               | [AnimatedFireEnum](AnimatedFireEnum)                     |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponAnimationConfigurationModifier](WeaponAnimationConfigurationModifier) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponAnimationConfigurationModifier](WeaponAnimationConfigurationModifier) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
