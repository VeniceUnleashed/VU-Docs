---
title: BoatFloatPhysicsData
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
| BoatFloatPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoatFloatPhysicsData](BoatFloatPhysicsData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| frontRatio | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [BoatFloatPhysicsData](BoatFloatPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoatFloatPhysicsData](BoatFloatPhysicsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
