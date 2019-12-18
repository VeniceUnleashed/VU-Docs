---
title: WeaponFiringEffectsModifier (Frostbite Container)
---
### Base Classes

[WeaponModifierBase](WeaponModifierBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| WeaponFiringEffectsModifier()                                                          | Create a new instance of this container type.                                                                                                 |
| WeaponFiringEffectsModifier(WeaponFiringEffectsModifier other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| WeaponFiringEffectsModifier([WeaponModifierBase](WeaponModifierBase) other)            | Upcast an instance of type [WeaponModifierBase](WeaponModifierBase) to [WeaponFiringEffectsModifier](WeaponFiringEffectsModifier).            |
| WeaponFiringEffectsModifier([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WeaponFiringEffectsModifier](WeaponFiringEffectsModifier). |

## Properties

| Name          | Type                                 | Description |
| ------------- | ------------------------------------ | ----------- |
| fireEffects1p | [FireEffectData](FireEffectData)\[\] |             |
| fireEffects3p | [FireEffectData](FireEffectData)\[\] |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WeaponFiringEffectsModifier](WeaponFiringEffectsModifier) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WeaponFiringEffectsModifier](WeaponFiringEffectsModifier) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
