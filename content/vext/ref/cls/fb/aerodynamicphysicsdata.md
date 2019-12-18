---
title: AeroDynamicPhysicsData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AeroDynamicPhysicsData()                                                          | Create a new instance of this container type.                                                                                       |
| AeroDynamicPhysicsData(AeroDynamicPhysicsData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| AeroDynamicPhysicsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AeroDynamicPhysicsData](AeroDynamicPhysicsData). |

## Properties

| Name             | Type                              | Description |
| ---------------- | --------------------------------- | ----------- |
| bodyDrag         | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| bodyDragOffsetYZ | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| bodyDragOffsetXZ | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| bodyDragOffsetXY | [Vec3](/vext/ref/cls/shr/Vec3) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AeroDynamicPhysicsData](AeroDynamicPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AeroDynamicPhysicsData](AeroDynamicPhysicsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
