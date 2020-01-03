---
title: MotionDampingData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| MotionDampingData()                                                          | Create a new instance of this container type.                                                                             |
| MotionDampingData(MotionDampingData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| MotionDampingData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MotionDampingData](MotionDampingData). |

## Properties

| Name           | Type                              | Description |
| -------------- | --------------------------------- | ----------- |
| linearModifier | [Vec3](/vext/ref/shared/class/Vec3) |             |
| pitch          | number                            |             |
| yaw            | number                            |             |
| roll           | number                            |             |
| linear         | number                            |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [MotionDampingData](MotionDampingData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MotionDampingData](MotionDampingData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
