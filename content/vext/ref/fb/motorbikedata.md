---
title: MotorbikeData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| MotorbikeData()                                                          | Create a new instance of this container type.                                                                     |
| MotorbikeData(MotorbikeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| MotorbikeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MotorbikeData](/vext/ref/fb/motorbikedata/). |

## Properties

| Name                             | Type                              | Description |
| -------------------------------- | --------------------------------- | ----------- |
| wheelieForceBodyOffset           | [Vec3](/vext/ref/shared/class/vec3) |             |
| wheelieForce                     | [Vec3](/vext/ref/shared/class/vec3) |             |
| dampBigJumpImpactCounterForce    | [Vec3](/vext/ref/shared/class/vec3) |             |
| proximityExtScale                | [Vec3](/vext/ref/shared/class/vec3) |             |
| jumpForwardLeanMinAngle          | number                            |             |
| jumpForwardLeanMomentum          | number                            |             |
| kickstandRoll                    | number                            |             |
| kickstandLinearDamping           | number                            |             |
| leanForceMaxVel                  | number                            |             |
| counterLeanForce                 | number                            |             |
| standStillRoll                   | number                            |             |
| dampBigJumpImpactVelocity        | number                            |             |
| yawBrakeDampingLerpStartScale    | number                            |             |
| yawBrakeDampingLerpEndScale      | number                            |             |
| stoppieActivationVelocity        | number                            |             |
| stoppieStartVelocity             | number                            |             |
| leanForce                        | number                            |             |
| stoppieMomentum                  | number                            |             |
| shortOffgroundGravityMultiplier  | number                            |             |
| maxLeaningRoll                   | number                            |             |
| stoppieStopVelocity              | number                            |             |
| proximityHeightTranslation       | number                            |             |
| wheelieMaxNoDownForceContactTime | number                            |             |
| wheelieMaxNoContactTime          | number                            |             |
| wheelieSteeringFactor            | number                            |             |
| wheelieInertia                   | number                            |             |
| wheelieStartVelocity             | number                            |             |
| wheelieMaxVelocityUndamped       | number                            |             |
| wheelieMaxVelocityDampRange      | number                            |             |
| wheelieOutAngularMomentum        | number                            |             |
| wheelieSpringDamping             | number                            |             |
| wheelieAngularDamping            | number                            |             |
| wheelieAngularDampingSpeed       | number                            |             |
| shortOffgroundPeriod             | number                            |             |
| wheelieMaxAngle                  | number                            |             |
| wheelieAngularStartMomentum      | number                            |             |
| wheelieMaxVelocity               | number                            |             |
| wheelieVelocityForceScale        | number                            |             |
| dampBigJumpImpact                | bool                              |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [MotorbikeData](/vext/ref/fb/motorbikedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MotorbikeData](/vext/ref/fb/motorbikedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
