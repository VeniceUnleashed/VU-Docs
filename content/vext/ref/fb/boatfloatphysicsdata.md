---
title: BoatFloatPhysicsData
---
### Base Classes

[HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| BoatFloatPhysicsData()                                                          | Create a new instance of this container type.                                                                                   |
| BoatFloatPhysicsData(BoatFloatPhysicsData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| BoatFloatPhysicsData([HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata/) other)        | Upcast an instance of type [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata/) to [BoatFloatPhysicsData](/vext/ref/fb/boatfloatphysicsdata/).        |
| BoatFloatPhysicsData([FloatPhysicsData](/vext/ref/fb/floatphysicsdata/) other)                | Upcast an instance of type [FloatPhysicsData](/vext/ref/fb/floatphysicsdata/) to [BoatFloatPhysicsData](/vext/ref/fb/boatfloatphysicsdata/).                |
| BoatFloatPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoatFloatPhysicsData](/vext/ref/fb/boatfloatphysicsdata/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| frontRatio | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [BoatFloatPhysicsData](/vext/ref/fb/boatfloatphysicsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoatFloatPhysicsData](/vext/ref/fb/boatfloatphysicsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
