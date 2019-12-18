---
title: VehicleConfigData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| VehicleConfigData()                                                          | Create a new instance of this container type.                                                                             |
| VehicleConfigData(VehicleConfigData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| VehicleConfigData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleConfigData](VehicleConfigData). |

## Properties

| Name                            | Type                                             | Description |
| ------------------------------- | ------------------------------------------------ | ----------- |
| centerOfMass                    | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| centerOfMassHandlingOffset      | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| inertiaModifier                 | [Vec3](/vext/ref/cls/shr/Vec3)                |             |
| aeroDynamicPhysics              | [AeroDynamicPhysicsData](AeroDynamicPhysicsData) |             |
| parachutePhysics                | [VehicleParachuteData](VehicleParachuteData)     |             |
| motorbikePhysics                | [MotorbikeData](MotorbikeData)                   |             |
| motionDamping                   | [MotionDampingData](MotionDampingData)           |             |
| input                           | [VehicleInputData](VehicleInputData)             |             |
| floatPhysics                    | [FloatPhysicsData](FloatPhysicsData)             |             |
| stabilizer                      | [StabilizerData](StabilizerData)                 |             |
| stabilizers                     | [StabilizerSettings](StabilizerSettings)\[\]     |             |
| constantForce                   | [ConstantForceData](ConstantForceData)\[\]       |             |
| vehicleModeAtReset              | [VehicleMode](VehicleMode)                       |             |
| bodyMass                        | number                                           |             |
| gravityModifier                 | number                                           |             |
| yawMin                          | number                                           |             |
| yawMax                          | number                                           |             |
| downForceBaseFactor             | number                                           |             |
| downForceWheelFactor            | number                                           |             |
| vehicleModeChangeEnteringTime   | number                                           |             |
| vehicleModeChangeStartingTime   | number                                           |             |
| vehicleModeChangeStoppingTime   | number                                           |             |
| vehicleModeChangeLeavingTime    | number                                           |             |
| standStillLowSpeedTimeLimit     | number                                           |             |
| staticFrictionBreakCollisionMod | number                                           |             |
| staticFrictionBreakVelocityMod  | number                                           |             |
| coefficientOfAirFriction        | number                                           |             |
| airDensity                      | number                                           |             |
| airDragArea                     | number                                           |             |
| windResistanceBaseFactor        | number                                           |             |
| windResistanceVelocityFactor    | number                                           |             |
| windResistanceVelocityFactorMin | number                                           |             |
| windResistanceVelocityFactorMax | number                                           |             |
| antiRollBars                    | [AntiRollBars](AntiRollBars)                     |             |
| useDownForceWheelFactor         | bool                                             |             |
| useGearbox                      | bool                                             |             |
| useStandStillBrake              | bool                                             |             |
| useStandStillSleep              | bool                                             |             |
| useTurnAroundForce              | bool                                             |             |
| useMotorcycleControl            | bool                                             |             |
| invertPitchAllowed              | bool                                             |             |
| useWindResistance               | bool                                             |             |
| useDownForce                    | bool                                             |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleConfigData](VehicleConfigData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleConfigData](VehicleConfigData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
