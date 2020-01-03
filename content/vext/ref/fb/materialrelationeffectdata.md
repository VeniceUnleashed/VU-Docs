---
title: MaterialRelationEffectData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                  | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialRelationEffectData()                                                                                 | Create a new instance of this container type.                                                                                                                      |
| MaterialRelationEffectData(MaterialRelationEffectData other)                                                 | Create a reference copy of an instance of the same type.                                                                                                           |
| MaterialRelationEffectData([PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata/). |
| MaterialRelationEffectData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata/).               |
| MaterialRelationEffectData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata/).                        |

## Properties

| Name                       | Type                                   | Description |
| -------------------------- | -------------------------------------- | ----------- |
| impactEffects              | [EffectBlueprint](/vext/ref/fb/effectblueprint/)\[\] |             |
| impactDebris               | [ObjectBlueprint](/vext/ref/fb/objectblueprint/)\[\] |             |
| impactEffectMaxSpreadAngle | number                                 |             |
| mirrorImpactDirection      | bool                                   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationEffectData](/vext/ref/fb/materialrelationeffectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
