---
title: WheelConfigData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[WheelConfigData](#constructor-0)**() |
| **[WheelConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WheelConfigData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "offset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "inertia" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "rotationBody" >}} | [RotationBodyData](/vext/ref/fb/rotationbodydata) \| nil |
| {{< prop "sphereCollision" >}} | [SphereCollisionData](/vext/ref/fb/spherecollisiondata) |
| {{< prop "spring" >}} | [SpringData](/vext/ref/fb/springdata) |
| {{< prop "mass" >}} | float |
| {{< prop "radius" >}} | float |
| {{< prop "width" >}} | float |
| {{< prop "rollingResistanceInternalBaseFactor" >}} | float |
| {{< prop "rollingResistanceBaseFactor" >}} | float |
| {{< prop "rollingResistanceVelocityFactor" >}} | float |
| {{< prop "engineBrakeVelocityFactor" >}} | float |
| {{< prop "engineBrakeMinFactor" >}} | float |
| {{< prop "engineBrakeMaxFactor" >}} | float |
| {{< prop "transmissionLoss" >}} | [Vec2](/vext/ref/shared/class/vec2)[] |
| {{< prop "diffGearRatio" >}} | float |
| {{< prop "lowSpeedSteeringSensitivity" >}} | float |
| {{< prop "midSpeedSteeringSensitivity" >}} | float |
| {{< prop "highSpeedSteeringSensitivity" >}} | float |
| {{< prop "sensitivityRangeScale" >}} | float |
| {{< prop "lowSpeedSteeringSensitivityLimit" >}} | float |
| {{< prop "midSpeedSteeringSensitivityLimit" >}} | float |
| {{< prop "highSpeedSteeringSensitivityLimit" >}} | float |
| {{< prop "trackedTurnSpeedLimit" >}} | float |
| {{< prop "trackedForwardSpeedLimit" >}} | float |
| {{< prop "steerInertia" >}} | [Curve2D](/vext/ref/fb/curve2d) \| nil |
| {{< prop "steeringSensitivity" >}} | [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity)[] |
| {{< prop "slopeGripMinAngle" >}} | float |
| {{< prop "slopeGripMaxAngle" >}} | float |
| {{< prop "slopeGripExponent" >}} | int |
| {{< prop "offGroundGravityModifier" >}} | float |
| {{< prop "sideSlipAngleMaxSlipCondition" >}} | float |
| {{< prop "angularVelocityMinSlipCondition" >}} | float |
| {{< prop "wheelVelocityXMinSlipCondition" >}} | float |
| {{< prop "wheelSlipRatioMaxSlipCondition" >}} | float |
| {{< prop "longitudinalFrictionForceMaxFactor" >}} | float |
| {{< prop "lateralFrictionForceMaxFactor" >}} | float |
| {{< prop "longitudeFrictionScale" >}} | [FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity)[] |
| {{< prop "lattitudeFrictionScale" >}} | [FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity)[] |
| {{< prop "wheelFrictionLattitudeBrakeScale" >}} | float |
| {{< prop "maxSlipRatio" >}} | float |
| {{< prop "resistance" >}} | float |
| {{< prop "fxTorqueRadiusMultiplier" >}} | float |
| {{< prop "frictionMomentVelocityMin" >}} | float |
| {{< prop "frictionMomentVelocityMax" >}} | float |
| {{< prop "frictionMomentMultiplier" >}} | float |
| {{< prop "frictionMomentMaxFactor" >}} | float |
| {{< prop "brakeFactor" >}} | float |
| {{< prop "brakeForce" >}} | float |
| {{< prop "handBrakeFactor" >}} | float |
| {{< prop "handBrakeForce" >}} | float |
| {{< prop "lateralPosK" >}} | float |
| {{< prop "lateralNegK" >}} | float |
| {{< prop "longitudinalPosK" >}} | float |
| {{< prop "longitudinalNegK" >}} | float |
| {{< prop "alignMomScale" >}} | float |
| {{< prop "wheelBaseLateral" >}} | float |
| {{< prop "wheelBaseLongitudinal" >}} | float |
| {{< prop "drivingType" >}} | int |
| {{< prop "steeringType" >}} | int |
| {{< prop "frictionMethod" >}} | int |
| {{< prop "ackermanDeviceType" >}} | int |
| {{< prop "collisionYawDampeningDuration" >}} | float |
| {{< prop "collisionYawDampening" >}} | float |
| {{< prop "constantSpringForceFrictionScale" >}} | float |
| {{< prop "rotationDirectionIndex" >}} | int |
| {{< prop "steeringAngleIndex" >}} | int |
| {{< prop "pacejkaConfigIndex" >}} | int |
| {{< prop "engineIndex" >}} | int |
| {{< prop "collisionMaterialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "alwaysGrip" >}} | bool |
| {{< prop "useRollingResistanceBaseFactor" >}} | bool |
| {{< prop "useEngineBrake" >}} | bool |
| {{< prop "isAllowedToSpin" >}} | bool |
| {{< prop "hasSteeringInverted" >}} | bool |
| {{< prop "useFrictionMoment" >}} | bool |
| {{< prop "useLowSpeedAutoBrake" >}} | bool |
| {{< prop "adjustWheelRotation" >}} | bool |
| {{< prop "useRollingResistanceVelocityFactor" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WheelConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WheelConfigData {#constructor-0}
> **WheelConfigData**()

Creates a new [WheelConfigData](/vext/ref/fb/wheelconfigdata) frostbite instance.

### WheelConfigData {#constructor-1}
> **WheelConfigData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WheelConfigData](/vext/ref/fb/wheelconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WheelConfigData {#constructor-2}
> **WheelConfigData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WheelConfigData](/vext/ref/fb/wheelconfigdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WheelConfigData](/vext/ref/fb/wheelconfigdata). |

## Properties
### {{% prop-heading "offset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "inertia" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "rotationBody" %}}
> **[RotationBodyData](/vext/ref/fb/rotationbodydata)** | **nil**

### {{% prop-heading "sphereCollision" %}}
> **[SphereCollisionData](/vext/ref/fb/spherecollisiondata)**

### {{% prop-heading "spring" %}}
> **[SpringData](/vext/ref/fb/springdata)**

### {{% prop-heading "mass" %}}
> **float**

### {{% prop-heading "radius" %}}
> **float**

### {{% prop-heading "width" %}}
> **float**

### {{% prop-heading "rollingResistanceInternalBaseFactor" %}}
> **float**

### {{% prop-heading "rollingResistanceBaseFactor" %}}
> **float**

### {{% prop-heading "rollingResistanceVelocityFactor" %}}
> **float**

### {{% prop-heading "engineBrakeVelocityFactor" %}}
> **float**

### {{% prop-heading "engineBrakeMinFactor" %}}
> **float**

### {{% prop-heading "engineBrakeMaxFactor" %}}
> **float**

### {{% prop-heading "transmissionLoss" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**[]

### {{% prop-heading "diffGearRatio" %}}
> **float**

### {{% prop-heading "lowSpeedSteeringSensitivity" %}}
> **float**

### {{% prop-heading "midSpeedSteeringSensitivity" %}}
> **float**

### {{% prop-heading "highSpeedSteeringSensitivity" %}}
> **float**

### {{% prop-heading "sensitivityRangeScale" %}}
> **float**

### {{% prop-heading "lowSpeedSteeringSensitivityLimit" %}}
> **float**

### {{% prop-heading "midSpeedSteeringSensitivityLimit" %}}
> **float**

### {{% prop-heading "highSpeedSteeringSensitivityLimit" %}}
> **float**

### {{% prop-heading "trackedTurnSpeedLimit" %}}
> **float**

### {{% prop-heading "trackedForwardSpeedLimit" %}}
> **float**

### {{% prop-heading "steerInertia" %}}
> **[Curve2D](/vext/ref/fb/curve2d)** | **nil**

### {{% prop-heading "steeringSensitivity" %}}
> **[SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity)**[]

### {{% prop-heading "slopeGripMinAngle" %}}
> **float**

### {{% prop-heading "slopeGripMaxAngle" %}}
> **float**

### {{% prop-heading "slopeGripExponent" %}}
> **int**

### {{% prop-heading "offGroundGravityModifier" %}}
> **float**

### {{% prop-heading "sideSlipAngleMaxSlipCondition" %}}
> **float**

### {{% prop-heading "angularVelocityMinSlipCondition" %}}
> **float**

### {{% prop-heading "wheelVelocityXMinSlipCondition" %}}
> **float**

### {{% prop-heading "wheelSlipRatioMaxSlipCondition" %}}
> **float**

### {{% prop-heading "longitudinalFrictionForceMaxFactor" %}}
> **float**

### {{% prop-heading "lateralFrictionForceMaxFactor" %}}
> **float**

### {{% prop-heading "longitudeFrictionScale" %}}
> **[FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity)**[]

### {{% prop-heading "lattitudeFrictionScale" %}}
> **[FrictionScaleAtVelocity](/vext/ref/fb/frictionscaleatvelocity)**[]

### {{% prop-heading "wheelFrictionLattitudeBrakeScale" %}}
> **float**

### {{% prop-heading "maxSlipRatio" %}}
> **float**

### {{% prop-heading "resistance" %}}
> **float**

### {{% prop-heading "fxTorqueRadiusMultiplier" %}}
> **float**

### {{% prop-heading "frictionMomentVelocityMin" %}}
> **float**

### {{% prop-heading "frictionMomentVelocityMax" %}}
> **float**

### {{% prop-heading "frictionMomentMultiplier" %}}
> **float**

### {{% prop-heading "frictionMomentMaxFactor" %}}
> **float**

### {{% prop-heading "brakeFactor" %}}
> **float**

### {{% prop-heading "brakeForce" %}}
> **float**

### {{% prop-heading "handBrakeFactor" %}}
> **float**

### {{% prop-heading "handBrakeForce" %}}
> **float**

### {{% prop-heading "lateralPosK" %}}
> **float**

### {{% prop-heading "lateralNegK" %}}
> **float**

### {{% prop-heading "longitudinalPosK" %}}
> **float**

### {{% prop-heading "longitudinalNegK" %}}
> **float**

### {{% prop-heading "alignMomScale" %}}
> **float**

### {{% prop-heading "wheelBaseLateral" %}}
> **float**

### {{% prop-heading "wheelBaseLongitudinal" %}}
> **float**

### {{% prop-heading "drivingType" %}}
> **int**

### {{% prop-heading "steeringType" %}}
> **int**

### {{% prop-heading "frictionMethod" %}}
> **int**

### {{% prop-heading "ackermanDeviceType" %}}
> **int**

### {{% prop-heading "collisionYawDampeningDuration" %}}
> **float**

### {{% prop-heading "collisionYawDampening" %}}
> **float**

### {{% prop-heading "constantSpringForceFrictionScale" %}}
> **float**

### {{% prop-heading "rotationDirectionIndex" %}}
> **int**

### {{% prop-heading "steeringAngleIndex" %}}
> **int**

### {{% prop-heading "pacejkaConfigIndex" %}}
> **int**

### {{% prop-heading "engineIndex" %}}
> **int**

### {{% prop-heading "collisionMaterialPair" %}}
> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** | **nil**

### {{% prop-heading "alwaysGrip" %}}
> **bool**

### {{% prop-heading "useRollingResistanceBaseFactor" %}}
> **bool**

### {{% prop-heading "useEngineBrake" %}}
> **bool**

### {{% prop-heading "isAllowedToSpin" %}}
> **bool**

### {{% prop-heading "hasSteeringInverted" %}}
> **bool**

### {{% prop-heading "useFrictionMoment" %}}
> **bool**

### {{% prop-heading "useLowSpeedAutoBrake" %}}
> **bool**

### {{% prop-heading "adjustWheelRotation" %}}
> **bool**

### {{% prop-heading "useRollingResistanceVelocityFactor" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WheelConfigData](/vext/ref/fb/wheelconfigdata) type.

