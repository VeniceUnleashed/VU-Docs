---
title: MaterialPropertyImpulseData
---
### Base Classes

[PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialPropertyImpulseData()                                                                                 | Create a new instance of this container type.                                                                                                                        |
| MaterialPropertyImpulseData(MaterialPropertyImpulseData other)                                                | Create a reference copy of an instance of the same type.                                                                                                             |
| MaterialPropertyImpulseData([PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) to [MaterialPropertyImpulseData](/vext/ref/fb/materialpropertyimpulsedata/). |
| MaterialPropertyImpulseData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialPropertyImpulseData](/vext/ref/fb/materialpropertyimpulsedata/).               |
| MaterialPropertyImpulseData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyImpulseData](/vext/ref/fb/materialpropertyimpulsedata/).                        |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| impulseAbsorptionMultiplier | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyImpulseData](/vext/ref/fb/materialpropertyimpulsedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyImpulseData](/vext/ref/fb/materialpropertyimpulsedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
