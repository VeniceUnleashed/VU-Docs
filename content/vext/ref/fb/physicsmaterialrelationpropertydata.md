---
title: PhysicsMaterialRelationPropertyData
---
### Base Classes

[MaterialRelationPropertyData](MaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                             | Description                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsMaterialRelationPropertyData()                                                                   | Create a new instance of this container type.                                                                                                                          |
| PhysicsMaterialRelationPropertyData(PhysicsMaterialRelationPropertyData other)                          | Create a reference copy of an instance of the same type.                                                                                                               |
| PhysicsMaterialRelationPropertyData([MaterialRelationPropertyData](MaterialRelationPropertyData) other) | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData). |
| PhysicsMaterialRelationPropertyData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData).          |

## Methods

| Type                                                                       | Name            | Parameters                                     |
| -------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
