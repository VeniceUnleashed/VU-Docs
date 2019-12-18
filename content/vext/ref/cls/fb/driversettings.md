---
title: DriverSettings (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| DriverSettings()                                                          | Create a new instance of this container type.                                                                       |
| DriverSettings(DriverSettings other)                                      | Create a reference copy of an instance of the same type.                                                            |
| DriverSettings([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [DriverSettings](DriverSettings).                                      |
| DriverSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DriverSettings](DriverSettings). |

## Properties

| Name                                     | Type   | Description |
| ---------------------------------------- | ------ | ----------- |
| minRadius                                | number |             |
| radiusGrowthSpeed                        | number |             |
| stoppingDeceleration                     | number |             |
| steeringSensitivity                      | number |             |
| maxBrakeOutput                           | number |             |
| maxDec                                   | number |             |
| lookAheadTime                            | number |             |
| angleDiffForNoSlowdown                   | number |             |
| angleDiffForFullSlowdown                 | number |             |
| velocityAtFullSlowdown                   | number |             |
| velDiffAtMinAcc                          | number |             |
| velDiffAtMaxAcc                          | number |             |
| maxYawToApplySprint                      | number |             |
| minAcc                                   | number |             |
| maxAcc                                   | number |             |
| velDiffAtMinDec                          | number |             |
| velDiffAtMaxDec                          | number |             |
| accDiffAtMinThrottleVelocityDecelerating | number |             |
| minDec                                   | number |             |
| minThrottleVelocityDecelerating          | number |             |
| accDiffAtMinThrottleVelocityAccelerating | number |             |
| accDiffAtMaxThrottleVelocityAccelerating | number |             |
| maxThrottleVelocityDecelerating          | number |             |
| minThrottleVelocityAccelerating          | number |             |
| maxThrottleVelocityAccelerating          | number |             |
| maxPTerm                                 | number |             |
| accDiffAtMaxThrottleVelocityDecelerating | number |             |
| p                                        | number |             |
| i                                        | number |             |
| maxError                                 | number |             |
| maxITerm                                 | number |             |
| maxSumError                              | number |             |
| d                                        | number |             |
| useSquareVelDiffCurveDec                 | bool   |             |
| useSquareAccDiffCurveDec                 | bool   |             |
| squareBrakeOutput                        | bool   |             |
| useSquareVelDiffCurveAcc                 | bool   |             |
| usePIDRegulator                          | bool   |             |
| useSquareAccDiffCurveAcc                 | bool   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [DriverSettings](DriverSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DriverSettings](DriverSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
