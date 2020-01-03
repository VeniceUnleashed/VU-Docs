---
title: FakeSpringData
---
### Base Classes

[FakePhysicsData](/vext/ref/fb/fakephysicsdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| FakeSpringData()                                                          | Create a new instance of this container type.                                                                       |
| FakeSpringData(FakeSpringData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| FakeSpringData([FakePhysicsData](/vext/ref/fb/fakephysicsdata/) other)                  | Upcast an instance of type [FakePhysicsData](/vext/ref/fb/fakephysicsdata/) to [FakeSpringData](/vext/ref/fb/fakespringdata/).                  |
| FakeSpringData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FakeSpringData](/vext/ref/fb/fakespringdata/). |

## Properties

| Name                | Type                              | Description |
| ------------------- | --------------------------------- | ----------- |
| direction           | [Vec3](/vext/ref/shared/class/vec3) |             |
| length              | number                            |             |
| acceleration        | number                            |             |
| progressiveExponent | number                            |             |
| damping             | number                            |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [FakeSpringData](/vext/ref/fb/fakespringdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FakeSpringData](/vext/ref/fb/fakespringdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
