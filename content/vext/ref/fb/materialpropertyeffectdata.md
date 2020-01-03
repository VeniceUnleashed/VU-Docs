---
title: MaterialPropertyEffectData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                  | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialPropertyEffectData()                                                                                 | Create a new instance of this container type.                                                                                                                      |
| MaterialPropertyEffectData(MaterialPropertyEffectData other)                                                 | Create a reference copy of an instance of the same type.                                                                                                           |
| MaterialPropertyEffectData([PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) to [MaterialPropertyEffectData](MaterialPropertyEffectData). |
| MaterialPropertyEffectData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialPropertyEffectData](MaterialPropertyEffectData).               |
| MaterialPropertyEffectData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyEffectData](MaterialPropertyEffectData).                        |

## Properties

| Name          | Type                                   | Description |
| ------------- | -------------------------------------- | ----------- |
| impactEffects | [EffectBlueprint](EffectBlueprint)\[\] |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyEffectData](MaterialPropertyEffectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyEffectData](MaterialPropertyEffectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
