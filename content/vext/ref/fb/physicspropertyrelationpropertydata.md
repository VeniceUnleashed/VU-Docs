---
title: PhysicsPropertyRelationPropertyData
---
### Base Classes

[MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                             | Description                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsPropertyRelationPropertyData()                                                                   | Create a new instance of this container type.                                                                                                                          |
| PhysicsPropertyRelationPropertyData(PhysicsPropertyRelationPropertyData other)                          | Create a reference copy of an instance of the same type.                                                                                                               |
| PhysicsPropertyRelationPropertyData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other) | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/). |
| PhysicsPropertyRelationPropertyData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/).          |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
