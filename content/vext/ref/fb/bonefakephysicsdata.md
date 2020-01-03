---
title: BoneFakePhysicsData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| BoneFakePhysicsData()                                                          | Create a new instance of this container type.                                                                                 |
| BoneFakePhysicsData(BoneFakePhysicsData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| BoneFakePhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata/). |

## Properties

| Name        | Type                               | Description |
| ----------- | ---------------------------------- | ----------- |
| fakePhysics | [FakePhysicsData](/vext/ref/fb/fakephysicsdata/) |             |
| boneName    | string                             |             |
| boneId      | number                             |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoneFakePhysicsData](/vext/ref/fb/bonefakephysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
