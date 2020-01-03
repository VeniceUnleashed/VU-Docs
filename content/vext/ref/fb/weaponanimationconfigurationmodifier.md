---
title: WeaponAnimationConfigurationModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponAnimationConfigurationModifier()                                                          | Create a new instance of this container type.                                                                                                                   |
| WeaponAnimationConfigurationModifier(WeaponAnimationConfigurationModifier other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| WeaponAnimationConfigurationModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier/).            |
| WeaponAnimationConfigurationModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier/). |

## Properties

| Name                           | Type                                                     | Description |
| ------------------------------ | -------------------------------------------------------- | ----------- |
| zoomInOutMeshTransitionFactors | number\[\]                                               |             |
| animationConfiguration         | [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata/) |             |
| animatedFireType               | [AnimatedFireEnum](/vext/ref/fb/animatedfireenum/)                     |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
