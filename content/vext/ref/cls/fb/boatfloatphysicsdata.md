---
title: BoatFloatPhysicsData (Frostbite Container)
---
### Base Classes

[HullFloatPhysicsData](HullFloatPhysicsData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| BoatFloatPhysicsData()                                                          | Create a new instance of this container type.                                                                                   |
| BoatFloatPhysicsData(BoatFloatPhysicsData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| BoatFloatPhysicsData([HullFloatPhysicsData](HullFloatPhysicsData) other)        | Upcast an instance of type [HullFloatPhysicsData](HullFloatPhysicsData) to [BoatFloatPhysicsData](BoatFloatPhysicsData).        |
| BoatFloatPhysicsData([FloatPhysicsData](FloatPhysicsData) other)                | Upcast an instance of type [FloatPhysicsData](FloatPhysicsData) to [BoatFloatPhysicsData](BoatFloatPhysicsData).                |
| BoatFloatPhysicsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BoatFloatPhysicsData](BoatFloatPhysicsData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| frontRatio | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [BoatFloatPhysicsData](BoatFloatPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BoatFloatPhysicsData](BoatFloatPhysicsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
