---
title: FakeSpringData (Frostbite Container)
---
### Base Classes

[FakePhysicsData](FakePhysicsData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| FakeSpringData()                                                          | Create a new instance of this container type.                                                                       |
| FakeSpringData(FakeSpringData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| FakeSpringData([FakePhysicsData](FakePhysicsData) other)                  | Upcast an instance of type [FakePhysicsData](FakePhysicsData) to [FakeSpringData](FakeSpringData).                  |
| FakeSpringData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FakeSpringData](FakeSpringData). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| direction           | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| length              | number                            |             |
| acceleration        | number                            |             |
| progressiveExponent | number                            |             |
| damping             | number                            |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [FakeSpringData](FakeSpringData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FakeSpringData](FakeSpringData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
