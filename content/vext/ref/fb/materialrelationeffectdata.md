---
title: MaterialRelationEffectData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                  | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialRelationEffectData()                                                                                 | Create a new instance of this container type.                                                                                                                      |
| MaterialRelationEffectData(MaterialRelationEffectData other)                                                 | Create a reference copy of an instance of the same type.                                                                                                           |
| MaterialRelationEffectData([PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) to [MaterialRelationEffectData](MaterialRelationEffectData). |
| MaterialRelationEffectData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialRelationEffectData](MaterialRelationEffectData).               |
| MaterialRelationEffectData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationEffectData](MaterialRelationEffectData).                        |

## Properties

| Name                       | Type                                   | Description |
| -------------------------- | -------------------------------------- | ----------- |
| impactEffects              | [EffectBlueprint](EffectBlueprint)\[\] |             |
| impactDebris               | [ObjectBlueprint](ObjectBlueprint)\[\] |             |
| impactEffectMaxSpreadAngle | number                                 |             |
| mirrorImpactDirection      | bool                                   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialRelationEffectData](MaterialRelationEffectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationEffectData](MaterialRelationEffectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
