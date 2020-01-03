---
title: HullFloatPhysicsData
---
### Base Classes

[FloatPhysicsData](FloatPhysicsData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| HullFloatPhysicsData()                                                          | Create a new instance of this container type.                                                                                   |
| HullFloatPhysicsData(HullFloatPhysicsData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| HullFloatPhysicsData([FloatPhysicsData](FloatPhysicsData) other)                | Upcast an instance of type [FloatPhysicsData](FloatPhysicsData) to [HullFloatPhysicsData](HullFloatPhysicsData).                |
| HullFloatPhysicsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HullFloatPhysicsData](HullFloatPhysicsData). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| waterResistanceAxisMod   | [Vec3](/vext/ref/shared/class/Vec3) |             |
| waterFrictionAxisMod     | [Vec3](/vext/ref/shared/class/Vec3) |             |
| offset                   | [Vec3](/vext/ref/shared/class/Vec3) |             |
| subSurfaceSplits         | number                            |             |
| depth                    | number                            |             |
| width                    | number                            |             |
| length                   | number                            |             |
| frontCurveDegree         | number                            |             |
| sideCurveDegree          | number                            |             |
| nonEngineSteer           | number                            |             |
| nonEngineSteerMinSpeed   | number                            |             |
| nonEngineSteerMaxSpeed   | number                            |             |
| waterDampeningMod        | number                            |             |
| liftModifier             | number                            |             |
| supportSizeMod           | number                            |             |
| angularDampening         | number                            |             |
| frictionThrottleModifier | number                            |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [HullFloatPhysicsData](HullFloatPhysicsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HullFloatPhysicsData](HullFloatPhysicsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
