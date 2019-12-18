---
title: HovercraftFloatPhysicsData (Frostbite Container)
---
### Base Classes

[HullFloatPhysicsData](HullFloatPhysicsData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| HovercraftFloatPhysicsData()                                                          | Create a new instance of this container type.                                                                                               |
| HovercraftFloatPhysicsData(HovercraftFloatPhysicsData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| HovercraftFloatPhysicsData([HullFloatPhysicsData](HullFloatPhysicsData) other)        | Upcast an instance of type [HullFloatPhysicsData](HullFloatPhysicsData) to [HovercraftFloatPhysicsData](HovercraftFloatPhysicsData).        |
| HovercraftFloatPhysicsData([FloatPhysicsData](FloatPhysicsData) other)                | Upcast an instance of type [FloatPhysicsData](FloatPhysicsData) to [HovercraftFloatPhysicsData](HovercraftFloatPhysicsData).                |
| HovercraftFloatPhysicsData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [HovercraftFloatPhysicsData](HovercraftFloatPhysicsData). |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| landResistanceAxisMod | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| landFrictionAxisMod   | [Vec3](/vext/ref/cls/shr/Vec3) |             |
| frontLength           | number                            |             |
| sideLength            | number                            |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [HovercraftFloatPhysicsData](HovercraftFloatPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [HovercraftFloatPhysicsData](HovercraftFloatPhysicsData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
