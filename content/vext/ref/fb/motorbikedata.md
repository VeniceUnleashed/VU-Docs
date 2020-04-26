---
title: MotorbikeData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[MotorbikeData](#constructor-0)**() |
| **[MotorbikeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MotorbikeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "wheelieForceBodyOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "wheelieForce" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "dampBigJumpImpactCounterForce" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "proximityExtScale" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "jumpForwardLeanMinAngle" >}} | float |
| {{< prop "jumpForwardLeanMomentum" >}} | float |
| {{< prop "kickstandRoll" >}} | float |
| {{< prop "kickstandLinearDamping" >}} | float |
| {{< prop "leanForceMaxVel" >}} | float |
| {{< prop "counterLeanForce" >}} | float |
| {{< prop "standStillRoll" >}} | float |
| {{< prop "dampBigJumpImpactVelocity" >}} | float |
| {{< prop "yawBrakeDampingLerpStartScale" >}} | float |
| {{< prop "yawBrakeDampingLerpEndScale" >}} | float |
| {{< prop "stoppieActivationVelocity" >}} | float |
| {{< prop "stoppieStartVelocity" >}} | float |
| {{< prop "leanForce" >}} | float |
| {{< prop "stoppieMomentum" >}} | float |
| {{< prop "shortOffgroundGravityMultiplier" >}} | float |
| {{< prop "maxLeaningRoll" >}} | float |
| {{< prop "stoppieStopVelocity" >}} | float |
| {{< prop "proximityHeightTranslation" >}} | float |
| {{< prop "wheelieMaxNoDownForceContactTime" >}} | float |
| {{< prop "wheelieMaxNoContactTime" >}} | float |
| {{< prop "wheelieSteeringFactor" >}} | float |
| {{< prop "wheelieInertia" >}} | float |
| {{< prop "wheelieStartVelocity" >}} | float |
| {{< prop "wheelieMaxVelocityUndamped" >}} | float |
| {{< prop "wheelieMaxVelocityDampRange" >}} | float |
| {{< prop "wheelieOutAngularMomentum" >}} | float |
| {{< prop "wheelieSpringDamping" >}} | float |
| {{< prop "wheelieAngularDamping" >}} | float |
| {{< prop "wheelieAngularDampingSpeed" >}} | float |
| {{< prop "shortOffgroundPeriod" >}} | float |
| {{< prop "wheelieMaxAngle" >}} | float |
| {{< prop "wheelieAngularStartMomentum" >}} | float |
| {{< prop "wheelieMaxVelocity" >}} | float |
| {{< prop "wheelieVelocityForceScale" >}} | float |
| {{< prop "dampBigJumpImpact" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MotorbikeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MotorbikeData {#constructor-0}

> **MotorbikeData**()

Creates a new [MotorbikeData](/vext/ref/fb/motorbikedata) frostbite instance.

### MotorbikeData {#constructor-1}

> **MotorbikeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MotorbikeData](/vext/ref/fb/motorbikedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MotorbikeData {#constructor-2}

> **MotorbikeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MotorbikeData](/vext/ref/fb/motorbikedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MotorbikeData](/vext/ref/fb/motorbikedata). |

## Properties

### {{% prop-heading "wheelieForceBodyOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "wheelieForce" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "dampBigJumpImpactCounterForce" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "proximityExtScale" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "jumpForwardLeanMinAngle" %}}

> **float**

### {{% prop-heading "jumpForwardLeanMomentum" %}}

> **float**

### {{% prop-heading "kickstandRoll" %}}

> **float**

### {{% prop-heading "kickstandLinearDamping" %}}

> **float**

### {{% prop-heading "leanForceMaxVel" %}}

> **float**

### {{% prop-heading "counterLeanForce" %}}

> **float**

### {{% prop-heading "standStillRoll" %}}

> **float**

### {{% prop-heading "dampBigJumpImpactVelocity" %}}

> **float**

### {{% prop-heading "yawBrakeDampingLerpStartScale" %}}

> **float**

### {{% prop-heading "yawBrakeDampingLerpEndScale" %}}

> **float**

### {{% prop-heading "stoppieActivationVelocity" %}}

> **float**

### {{% prop-heading "stoppieStartVelocity" %}}

> **float**

### {{% prop-heading "leanForce" %}}

> **float**

### {{% prop-heading "stoppieMomentum" %}}

> **float**

### {{% prop-heading "shortOffgroundGravityMultiplier" %}}

> **float**

### {{% prop-heading "maxLeaningRoll" %}}

> **float**

### {{% prop-heading "stoppieStopVelocity" %}}

> **float**

### {{% prop-heading "proximityHeightTranslation" %}}

> **float**

### {{% prop-heading "wheelieMaxNoDownForceContactTime" %}}

> **float**

### {{% prop-heading "wheelieMaxNoContactTime" %}}

> **float**

### {{% prop-heading "wheelieSteeringFactor" %}}

> **float**

### {{% prop-heading "wheelieInertia" %}}

> **float**

### {{% prop-heading "wheelieStartVelocity" %}}

> **float**

### {{% prop-heading "wheelieMaxVelocityUndamped" %}}

> **float**

### {{% prop-heading "wheelieMaxVelocityDampRange" %}}

> **float**

### {{% prop-heading "wheelieOutAngularMomentum" %}}

> **float**

### {{% prop-heading "wheelieSpringDamping" %}}

> **float**

### {{% prop-heading "wheelieAngularDamping" %}}

> **float**

### {{% prop-heading "wheelieAngularDampingSpeed" %}}

> **float**

### {{% prop-heading "shortOffgroundPeriod" %}}

> **float**

### {{% prop-heading "wheelieMaxAngle" %}}

> **float**

### {{% prop-heading "wheelieAngularStartMomentum" %}}

> **float**

### {{% prop-heading "wheelieMaxVelocity" %}}

> **float**

### {{% prop-heading "wheelieVelocityForceScale" %}}

> **float**

### {{% prop-heading "dampBigJumpImpact" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MotorbikeData](/vext/ref/fb/motorbikedata) type.

