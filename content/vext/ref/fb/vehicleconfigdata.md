---
title: VehicleConfigData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VehicleConfigData](#constructor-0)**() |
| **[VehicleConfigData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleConfigData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "centerOfMass" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "centerOfMassHandlingOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "inertiaModifier" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "aeroDynamicPhysics" >}} | [AeroDynamicPhysicsData](/vext/ref/fb/aerodynamicphysicsdata) \| nil |
| {{< prop "parachutePhysics" >}} | [VehicleParachuteData](/vext/ref/fb/vehicleparachutedata) \| nil |
| {{< prop "motorbikePhysics" >}} | [MotorbikeData](/vext/ref/fb/motorbikedata) \| nil |
| {{< prop "motionDamping" >}} | [MotionDampingData](/vext/ref/fb/motiondampingdata) \| nil |
| {{< prop "input" >}} | [VehicleInputData](/vext/ref/fb/vehicleinputdata) |
| {{< prop "floatPhysics" >}} | [FloatPhysicsData](/vext/ref/fb/floatphysicsdata) \| nil |
| {{< prop "stabilizer" >}} | [StabilizerData](/vext/ref/fb/stabilizerdata) \| nil |
| {{< prop "stabilizers" >}} | [StabilizerSettings](/vext/ref/fb/stabilizersettings)[] |
| {{< prop "constantForce" >}} | [ConstantForceData](/vext/ref/fb/constantforcedata)[] |
| {{< prop "vehicleModeAtReset" >}} | [VehicleMode](/vext/ref/fb/vehiclemode) |
| {{< prop "bodyMass" >}} | float |
| {{< prop "gravityModifier" >}} | float |
| {{< prop "yawMin" >}} | float |
| {{< prop "yawMax" >}} | float |
| {{< prop "downForceBaseFactor" >}} | float |
| {{< prop "downForceWheelFactor" >}} | float |
| {{< prop "vehicleModeChangeEnteringTime" >}} | float |
| {{< prop "vehicleModeChangeStartingTime" >}} | float |
| {{< prop "vehicleModeChangeStoppingTime" >}} | float |
| {{< prop "vehicleModeChangeLeavingTime" >}} | float |
| {{< prop "standStillLowSpeedTimeLimit" >}} | float |
| {{< prop "staticFrictionBreakCollisionMod" >}} | float |
| {{< prop "staticFrictionBreakVelocityMod" >}} | float |
| {{< prop "coefficientOfAirFriction" >}} | float |
| {{< prop "airDensity" >}} | float |
| {{< prop "airDragArea" >}} | float |
| {{< prop "windResistanceBaseFactor" >}} | float |
| {{< prop "windResistanceVelocityFactor" >}} | float |
| {{< prop "windResistanceVelocityFactorMin" >}} | float |
| {{< prop "windResistanceVelocityFactorMax" >}} | float |
| {{< prop "antiRollBars" >}} | [AntiRollBars](/vext/ref/fb/antirollbars) |
| {{< prop "useDownForceWheelFactor" >}} | bool |
| {{< prop "useGearbox" >}} | bool |
| {{< prop "useStandStillBrake" >}} | bool |
| {{< prop "useStandStillSleep" >}} | bool |
| {{< prop "useTurnAroundForce" >}} | bool |
| {{< prop "useMotorcycleControl" >}} | bool |
| {{< prop "invertPitchAllowed" >}} | bool |
| {{< prop "useWindResistance" >}} | bool |
| {{< prop "useDownForce" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleConfigData {#constructor-0}

> **VehicleConfigData**()

Creates a new [VehicleConfigData](/vext/ref/fb/vehicleconfigdata) frostbite instance.

### VehicleConfigData {#constructor-1}

> **VehicleConfigData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleConfigData](/vext/ref/fb/vehicleconfigdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleConfigData {#constructor-2}

> **VehicleConfigData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleConfigData](/vext/ref/fb/vehicleconfigdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleConfigData](/vext/ref/fb/vehicleconfigdata). |

## Properties

### {{% prop-heading "centerOfMass" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "centerOfMassHandlingOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "inertiaModifier" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "aeroDynamicPhysics" %}}

> **[AeroDynamicPhysicsData](/vext/ref/fb/aerodynamicphysicsdata)** \| **nil**

### {{% prop-heading "parachutePhysics" %}}

> **[VehicleParachuteData](/vext/ref/fb/vehicleparachutedata)** \| **nil**

### {{% prop-heading "motorbikePhysics" %}}

> **[MotorbikeData](/vext/ref/fb/motorbikedata)** \| **nil**

### {{% prop-heading "motionDamping" %}}

> **[MotionDampingData](/vext/ref/fb/motiondampingdata)** \| **nil**

### {{% prop-heading "input" %}}

> **[VehicleInputData](/vext/ref/fb/vehicleinputdata)**

### {{% prop-heading "floatPhysics" %}}

> **[FloatPhysicsData](/vext/ref/fb/floatphysicsdata)** \| **nil**

### {{% prop-heading "stabilizer" %}}

> **[StabilizerData](/vext/ref/fb/stabilizerdata)** \| **nil**

### {{% prop-heading "stabilizers" %}}

> **[StabilizerSettings](/vext/ref/fb/stabilizersettings)**[]

### {{% prop-heading "constantForce" %}}

> **[ConstantForceData](/vext/ref/fb/constantforcedata)**[]

### {{% prop-heading "vehicleModeAtReset" %}}

> **[VehicleMode](/vext/ref/fb/vehiclemode)**

### {{% prop-heading "bodyMass" %}}

> **float**

### {{% prop-heading "gravityModifier" %}}

> **float**

### {{% prop-heading "yawMin" %}}

> **float**

### {{% prop-heading "yawMax" %}}

> **float**

### {{% prop-heading "downForceBaseFactor" %}}

> **float**

### {{% prop-heading "downForceWheelFactor" %}}

> **float**

### {{% prop-heading "vehicleModeChangeEnteringTime" %}}

> **float**

### {{% prop-heading "vehicleModeChangeStartingTime" %}}

> **float**

### {{% prop-heading "vehicleModeChangeStoppingTime" %}}

> **float**

### {{% prop-heading "vehicleModeChangeLeavingTime" %}}

> **float**

### {{% prop-heading "standStillLowSpeedTimeLimit" %}}

> **float**

### {{% prop-heading "staticFrictionBreakCollisionMod" %}}

> **float**

### {{% prop-heading "staticFrictionBreakVelocityMod" %}}

> **float**

### {{% prop-heading "coefficientOfAirFriction" %}}

> **float**

### {{% prop-heading "airDensity" %}}

> **float**

### {{% prop-heading "airDragArea" %}}

> **float**

### {{% prop-heading "windResistanceBaseFactor" %}}

> **float**

### {{% prop-heading "windResistanceVelocityFactor" %}}

> **float**

### {{% prop-heading "windResistanceVelocityFactorMin" %}}

> **float**

### {{% prop-heading "windResistanceVelocityFactorMax" %}}

> **float**

### {{% prop-heading "antiRollBars" %}}

> **[AntiRollBars](/vext/ref/fb/antirollbars)**

### {{% prop-heading "useDownForceWheelFactor" %}}

> **bool**

### {{% prop-heading "useGearbox" %}}

> **bool**

### {{% prop-heading "useStandStillBrake" %}}

> **bool**

### {{% prop-heading "useStandStillSleep" %}}

> **bool**

### {{% prop-heading "useTurnAroundForce" %}}

> **bool**

### {{% prop-heading "useMotorcycleControl" %}}

> **bool**

### {{% prop-heading "invertPitchAllowed" %}}

> **bool**

### {{% prop-heading "useWindResistance" %}}

> **bool**

### {{% prop-heading "useDownForce" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleConfigData](/vext/ref/fb/vehicleconfigdata) type.

