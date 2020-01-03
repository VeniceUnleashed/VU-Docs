---
title: MaterialPropertyHealthData
---
### Base Classes

[PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                  | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialPropertyHealthData()                                                                                 | Create a new instance of this container type.                                                                                                                      |
| MaterialPropertyHealthData(MaterialPropertyHealthData other)                                                 | Create a reference copy of an instance of the same type.                                                                                                           |
| MaterialPropertyHealthData([PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) to [MaterialPropertyHealthData](/vext/ref/fb/materialpropertyhealthdata/). |
| MaterialPropertyHealthData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialPropertyHealthData](/vext/ref/fb/materialpropertyhealthdata/).               |
| MaterialPropertyHealthData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyHealthData](/vext/ref/fb/materialpropertyhealthdata/).                        |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| health | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyHealthData](/vext/ref/fb/materialpropertyhealthdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyHealthData](/vext/ref/fb/materialpropertyhealthdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
