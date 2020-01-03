---
title: MaterialRelationPenetrationData
---
### Base Classes

[PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                       | Description                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialRelationPenetrationData()                                                                                 | Create a new instance of this container type.                                                                                                                                |
| MaterialRelationPenetrationData(MaterialRelationPenetrationData other)                                            | Create a reference copy of an instance of the same type.                                                                                                                     |
| MaterialRelationPenetrationData([PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) to [MaterialRelationPenetrationData](/vext/ref/fb/materialrelationpenetrationdata/). |
| MaterialRelationPenetrationData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialRelationPenetrationData](/vext/ref/fb/materialrelationpenetrationdata/).               |
| MaterialRelationPenetrationData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationPenetrationData](/vext/ref/fb/materialrelationpenetrationdata/).                        |

## Properties

| Name           | Type | Description |
| -------------- | ---- | ----------- |
| neverPenetrate | bool |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialRelationPenetrationData](/vext/ref/fb/materialrelationpenetrationdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationPenetrationData](/vext/ref/fb/materialrelationpenetrationdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
