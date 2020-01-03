---
title: MaterialPropertyTerrainData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialPropertyTerrainData()                                                                                 | Create a new instance of this container type.                                                                                                                        |
| MaterialPropertyTerrainData(MaterialPropertyTerrainData other)                                                | Create a reference copy of an instance of the same type.                                                                                                             |
| MaterialPropertyTerrainData([PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata/). |
| MaterialPropertyTerrainData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata/).               |
| MaterialPropertyTerrainData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata/).                        |

## Properties

| Name              | Type                               | Description |
| ----------------- | ---------------------------------- | ----------- |
| dirtTriggerColor  | [Vec3](/vext/ref/shared/class/vec3)  |             |
| destructionEffect | [EffectBlueprint](/vext/ref/fb/effectblueprint/) |             |
| dirtTriggerFactor | number                             |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyTerrainData](/vext/ref/fb/materialpropertyterraindata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
