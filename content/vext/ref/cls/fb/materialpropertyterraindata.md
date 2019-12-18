---
title: MaterialPropertyTerrainData (Frostbite Container)
---
### Base Classes

[PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialPropertyTerrainData()                                                                                 | Create a new instance of this container type.                                                                                                                        |
| MaterialPropertyTerrainData(MaterialPropertyTerrainData other)                                                | Create a reference copy of an instance of the same type.                                                                                                             |
| MaterialPropertyTerrainData([PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) to [MaterialPropertyTerrainData](MaterialPropertyTerrainData). |
| MaterialPropertyTerrainData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialPropertyTerrainData](MaterialPropertyTerrainData).               |
| MaterialPropertyTerrainData([DataContainer](/vext/ref/cls/shr/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MaterialPropertyTerrainData](MaterialPropertyTerrainData).                        |

## Properties

| Name              | Type                               | Description |
| ----------------- | ---------------------------------- | ----------- |
| dirtTriggerColor  | [Vec3](/vext/ref/cls/shr/Vec3)  |             |
| destructionEffect | [EffectBlueprint](EffectBlueprint) |             |
| dirtTriggerFactor | number                             |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyTerrainData](MaterialPropertyTerrainData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MaterialPropertyTerrainData](MaterialPropertyTerrainData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
