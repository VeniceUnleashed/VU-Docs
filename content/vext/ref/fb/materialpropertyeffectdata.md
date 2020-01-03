---
title: MaterialPropertyEffectData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                  | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialPropertyEffectData()                                                                                 | Create a new instance of this container type.                                                                                                                      |
| MaterialPropertyEffectData(MaterialPropertyEffectData other)                                                 | Create a reference copy of an instance of the same type.                                                                                                           |
| MaterialPropertyEffectData([PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) to [MaterialPropertyEffectData](/vext/ref/fb/materialpropertyeffectdata/). |
| MaterialPropertyEffectData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialPropertyEffectData](/vext/ref/fb/materialpropertyeffectdata/).               |
| MaterialPropertyEffectData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyEffectData](/vext/ref/fb/materialpropertyeffectdata/).                        |

## Properties

| Name          | Type                                   | Description |
| ------------- | -------------------------------------- | ----------- |
| impactEffects | [EffectBlueprint](/vext/ref/fb/effectblueprint/)\[\] |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyEffectData](/vext/ref/fb/materialpropertyeffectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyEffectData](/vext/ref/fb/materialpropertyeffectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
