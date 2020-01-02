---
title: FakePhysicsData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| FakePhysicsData()                                                          | Create a new instance of this container type.                                                                         |
| FakePhysicsData(FakePhysicsData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| FakePhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FakePhysicsData](FakePhysicsData). |

## Properties

| Name             | Type                               | Description |
| ---------------- | ---------------------------------- | ----------- |
| childFakePhysics | [FakePhysicsData](FakePhysicsData) |             |
| startSpeed       | number                             |             |
| gravityModifier  | number                             |             |
| startDampening   | number                             |             |
| endDampening     | number                             |             |
| minSpeed         | number                             |             |
| maxSpeed         | number                             |             |
| mass             | number                             |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [FakePhysicsData](FakePhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FakePhysicsData](FakePhysicsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
