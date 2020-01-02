---
title: MaterialPropertyHealthData
---
### Base Classes

[PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                  | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MaterialPropertyHealthData()                                                                                 | Create a new instance of this container type.                                                                                                                      |
| MaterialPropertyHealthData(MaterialPropertyHealthData other)                                                 | Create a reference copy of an instance of the same type.                                                                                                           |
| MaterialPropertyHealthData([PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData) other) | Upcast an instance of type [PhysicsPropertyRelationPropertyData](PhysicsPropertyRelationPropertyData) to [MaterialPropertyHealthData](MaterialPropertyHealthData). |
| MaterialPropertyHealthData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialPropertyHealthData](MaterialPropertyHealthData).               |
| MaterialPropertyHealthData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialPropertyHealthData](MaterialPropertyHealthData).                        |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| health | number |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialPropertyHealthData](MaterialPropertyHealthData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialPropertyHealthData](MaterialPropertyHealthData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
