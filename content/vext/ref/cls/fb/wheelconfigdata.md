---
title: WheelConfigData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| WheelConfigData()                                                          | Create a new instance of this container type.                                                                         |
| WheelConfigData(WheelConfigData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| WheelConfigData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WheelConfigData](WheelConfigData). |

## Properties

| Name                                | Type                                                   | Description |
| ----------------------------------- | ------------------------------------------------------ | ----------- |
| offset                              | [Vec3](/vext/ref/cls/shr/Vec3)                      |             |
| inertia                             | [Vec3](/vext/ref/cls/shr/Vec3)                      |             |
| rotationBody                        | [RotationBodyData](RotationBodyData)                   |             |
| sphereCollision                     | [SphereCollisionData](SphereCollisionData)             |             |
| spring                              | [SpringData](SpringData)                               |             |
| mass                                | number                                                 |             |
| radius                              | number                                                 |             |
| width                               | number                                                 |             |
| rollingResistanceInternalBaseFactor | number                                                 |             |
| rollingResistanceBaseFactor         | number                                                 |             |
| rollingResistanceVelocityFactor     | number                                                 |             |
| engineBrakeVelocityFactor           | number                                                 |             |
| engineBrakeMinFactor                | number                                                 |             |
| engineBrakeMaxFactor                | number                                                 |             |
| transmissionLoss                    | [Vec2](/vext/ref/cls/shr/Vec2)\[\]                  |             |
| diffGearRatio                       | number                                                 |             |
| lowSpeedSteeringSensitivity         | number                                                 |             |
| midSpeedSteeringSensitivity         | number                                                 |             |
| highSpeedSteeringSensitivity        | number                                                 |             |
| sensitivityRangeScale               | number                                                 |             |
| lowSpeedSteeringSensitivityLimit    | number                                                 |             |
| midSpeedSteeringSensitivityLimit    | number                                                 |             |
| highSpeedSteeringSensitivityLimit   | number                                                 |             |
| trackedTurnSpeedLimit               | number                                                 |             |
| trackedForwardSpeedLimit            | number                                                 |             |
| steerInertia                        | [Curve2D](Curve2D)                                     |             |
| steeringSensitivity                 | [SensitivityAtVelocity](SensitivityAtVelocity)\[\]     |             |
| slopeGripMinAngle                   | number                                                 |             |
| slopeGripMaxAngle                   | number                                                 |             |
| slopeGripExponent                   | number                                                 |             |
| offGroundGravityModifier            | number                                                 |             |
| sideSlipAngleMaxSlipCondition       | number                                                 |             |
| angularVelocityMinSlipCondition     | number                                                 |             |
| wheelVelocityXMinSlipCondition      | number                                                 |             |
| wheelSlipRatioMaxSlipCondition      | number                                                 |             |
| longitudinalFrictionForceMaxFactor  | number                                                 |             |
| lateralFrictionForceMaxFactor       | number                                                 |             |
| longitudeFrictionScale              | [FrictionScaleAtVelocity](FrictionScaleAtVelocity)\[\] |             |
| lattitudeFrictionScale              | [FrictionScaleAtVelocity](FrictionScaleAtVelocity)\[\] |             |
| wheelFrictionLattitudeBrakeScale    | number                                                 |             |
| maxSlipRatio                        | number                                                 |             |
| resistance                          | number                                                 |             |
| fxTorqueRadiusMultiplier            | number                                                 |             |
| frictionMomentVelocityMin           | number                                                 |             |
| frictionMomentVelocityMax           | number                                                 |             |
| frictionMomentMultiplier            | number                                                 |             |
| frictionMomentMaxFactor             | number                                                 |             |
| brakeFactor                         | number                                                 |             |
| brakeForce                          | number                                                 |             |
| handBrakeFactor                     | number                                                 |             |
| handBrakeForce                      | number                                                 |             |
| lateralPosK                         | number                                                 |             |
| lateralNegK                         | number                                                 |             |
| longitudinalPosK                    | number                                                 |             |
| longitudinalNegK                    | number                                                 |             |
| alignMomScale                       | number                                                 |             |
| wheelBaseLateral                    | number                                                 |             |
| wheelBaseLongitudinal               | number                                                 |             |
| drivingType                         | number                                                 |             |
| steeringType                        | number                                                 |             |
| frictionMethod                      | number                                                 |             |
| ackermanDeviceType                  | number                                                 |             |
| collisionYawDampeningDuration       | number                                                 |             |
| collisionYawDampening               | number                                                 |             |
| constantSpringForceFrictionScale    | number                                                 |             |
| rotationDirectionIndex              | number                                                 |             |
| steeringAngleIndex                  | number                                                 |             |
| pacejkaConfigIndex                  | number                                                 |             |
| engineIndex                         | number                                                 |             |
| collisionMaterialPair               | [MaterialContainerPair](MaterialContainerPair)         |             |
| alwaysGrip                          | bool                                                   |             |
| useRollingResistanceBaseFactor      | bool                                                   |             |
| useEngineBrake                      | bool                                                   |             |
| isAllowedToSpin                     | bool                                                   |             |
| hasSteeringInverted                 | bool                                                   |             |
| useFrictionMoment                   | bool                                                   |             |
| useLowSpeedAutoBrake                | bool                                                   |             |
| adjustWheelRotation                 | bool                                                   |             |
| useRollingResistanceVelocityFactor  | bool                                                   |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [WheelConfigData](WheelConfigData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WheelConfigData](WheelConfigData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
