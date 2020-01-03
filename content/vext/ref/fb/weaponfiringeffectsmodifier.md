---
title: WeaponFiringEffectsModifier
---
### Base Classes

[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponFiringEffectsModifier()                                                          | Create a new instance of this container type.                                                                                                 |
| WeaponFiringEffectsModifier(WeaponFiringEffectsModifier other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| WeaponFiringEffectsModifier([WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) other)            | Upcast an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase/) to [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier/).            |
| WeaponFiringEffectsModifier([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier/). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| fireEffects1p | [FireEffectData](/vext/ref/fb/fireeffectdata/)\[\] |             |
| fireEffects3p | [FireEffectData](/vext/ref/fb/fireeffectdata/)\[\] |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
