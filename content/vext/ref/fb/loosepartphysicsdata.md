---
title: LoosePartPhysicsData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LoosePartPhysicsData()                                                          | Create a new instance of this container type.                                                                                   |
| LoosePartPhysicsData(LoosePartPhysicsData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LoosePartPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LoosePartPhysicsData](LoosePartPhysicsData). |

## Properties

| Name        | Type                               | Description |
| ----------- | ---------------------------------- | ----------- |
| fakePhysics | [FakePhysicsData](FakePhysicsData) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LoosePartPhysicsData](LoosePartPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LoosePartPhysicsData](LoosePartPhysicsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
