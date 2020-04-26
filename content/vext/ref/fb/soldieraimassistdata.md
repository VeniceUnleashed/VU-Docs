---
title: SoldierAimAssistData
---

Inherits from [GameDataContainer](/vext/ref/fb/gamedatacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoldierAimAssistData](#constructor-0)**() |
| **[SoldierAimAssistData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoldierAimAssistData](#constructor-2)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierAimAssistData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "eyePosOffset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "stickyBoxScale" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "snapDistanceScale" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "snapBoxScale" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "stickyDistanceScale" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "maxAcceleration" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "accelerationDamping" >}} | float |
| {{< prop "accelerationInputThreshold" >}} | float |
| {{< prop "accelerationMultiplier" >}} | float |
| {{< prop "squaredAcceleration" >}} | float |
| {{< prop "yawSpeedStrength" >}} | float |
| {{< prop "zoomedInputPolynomial" >}} | float[] |
| {{< prop "accelerationTimeThreshold" >}} | float |
| {{< prop "attractDistanceFallOff" >}} | float[] |
| {{< prop "attractUserInputMultiplier" >}} | float |
| {{< prop "attractOwnSpeedInfluence" >}} | float |
| {{< prop "attractTargetSpeedInfluence" >}} | float |
| {{< prop "attractOwnRequiredMovementForMaximumAttract" >}} | float |
| {{< prop "attractStartInputThreshold" >}} | float |
| {{< prop "attractZoomingMultiplier" >}} | float |
| {{< prop "attractZoomingPostTime" >}} | float |
| {{< prop "attractYawStrength" >}} | float |
| {{< prop "attractPitchStrength" >}} | float |
| {{< prop "pitchSpeedStrength" >}} | float |
| {{< prop "attractSoftZone" >}} | float |
| {{< prop "inputPolynomial" >}} | float[] |
| {{< prop "useYawAcceleration" >}} | bool |
| {{< prop "usePitchAcceleration" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierAimAssistData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierAimAssistData {#constructor-0}

> **SoldierAimAssistData**()

Creates a new [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata) frostbite instance.

### SoldierAimAssistData {#constructor-1}

> **SoldierAimAssistData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoldierAimAssistData {#constructor-2}

> **SoldierAimAssistData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata). |

### SoldierAimAssistData {#constructor-3}

> **SoldierAimAssistData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata). |

## Properties

### {{% prop-heading "eyePosOffset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "stickyBoxScale" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "snapDistanceScale" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "snapBoxScale" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "stickyDistanceScale" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "maxAcceleration" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "accelerationDamping" %}}

> **float**

### {{% prop-heading "accelerationInputThreshold" %}}

> **float**

### {{% prop-heading "accelerationMultiplier" %}}

> **float**

### {{% prop-heading "squaredAcceleration" %}}

> **float**

### {{% prop-heading "yawSpeedStrength" %}}

> **float**

### {{% prop-heading "zoomedInputPolynomial" %}}

> **float**[]

### {{% prop-heading "accelerationTimeThreshold" %}}

> **float**

### {{% prop-heading "attractDistanceFallOff" %}}

> **float**[]

### {{% prop-heading "attractUserInputMultiplier" %}}

> **float**

### {{% prop-heading "attractOwnSpeedInfluence" %}}

> **float**

### {{% prop-heading "attractTargetSpeedInfluence" %}}

> **float**

### {{% prop-heading "attractOwnRequiredMovementForMaximumAttract" %}}

> **float**

### {{% prop-heading "attractStartInputThreshold" %}}

> **float**

### {{% prop-heading "attractZoomingMultiplier" %}}

> **float**

### {{% prop-heading "attractZoomingPostTime" %}}

> **float**

### {{% prop-heading "attractYawStrength" %}}

> **float**

### {{% prop-heading "attractPitchStrength" %}}

> **float**

### {{% prop-heading "pitchSpeedStrength" %}}

> **float**

### {{% prop-heading "attractSoftZone" %}}

> **float**

### {{% prop-heading "inputPolynomial" %}}

> **float**[]

### {{% prop-heading "useYawAcceleration" %}}

> **bool**

### {{% prop-heading "usePitchAcceleration" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierAimAssistData](/vext/ref/fb/soldieraimassistdata) type.

