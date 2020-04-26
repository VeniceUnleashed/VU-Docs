---
title: HullFloatPhysicsData
---

Inherits from [FloatPhysicsData](/vext/ref/fb/floatphysicsdata)

## Summary

### Constructors

|  |
| --- |
| **[HullFloatPhysicsData](#constructor-0)**() |
| **[HullFloatPhysicsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[HullFloatPhysicsData](#constructor-2)**(other: [FloatPhysicsData](/vext/ref/fb/floatphysicsdata)) |
| **[HullFloatPhysicsData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "waterResistanceAxisMod" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "waterFrictionAxisMod" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "offset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "subSurfaceSplits" >}} | int |
| {{< prop "depth" >}} | float |
| {{< prop "width" >}} | float |
| {{< prop "length" >}} | float |
| {{< prop "frontCurveDegree" >}} | float |
| {{< prop "sideCurveDegree" >}} | float |
| {{< prop "nonEngineSteer" >}} | float |
| {{< prop "nonEngineSteerMinSpeed" >}} | float |
| {{< prop "nonEngineSteerMaxSpeed" >}} | float |
| {{< prop "waterDampeningMod" >}} | float |
| {{< prop "liftModifier" >}} | float |
| {{< prop "supportSizeMod" >}} | float |
| {{< prop "angularDampening" >}} | float |
| {{< prop "frictionThrottleModifier" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HullFloatPhysicsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HullFloatPhysicsData {#constructor-0}

> **HullFloatPhysicsData**()

Creates a new [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata) frostbite instance.

### HullFloatPhysicsData {#constructor-1}

> **HullFloatPhysicsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### HullFloatPhysicsData {#constructor-2}

> **HullFloatPhysicsData**(other: [FloatPhysicsData](/vext/ref/fb/floatphysicsdata))

Casts an instance of type [FloatPhysicsData](/vext/ref/fb/floatphysicsdata) to [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [FloatPhysicsData](/vext/ref/fb/floatphysicsdata) | The instance to cast to [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata). |

### HullFloatPhysicsData {#constructor-3}

> **HullFloatPhysicsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata). |

## Properties

### {{% prop-heading "waterResistanceAxisMod" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "waterFrictionAxisMod" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "offset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "subSurfaceSplits" %}}

> **int**

### {{% prop-heading "depth" %}}

> **float**

### {{% prop-heading "width" %}}

> **float**

### {{% prop-heading "length" %}}

> **float**

### {{% prop-heading "frontCurveDegree" %}}

> **float**

### {{% prop-heading "sideCurveDegree" %}}

> **float**

### {{% prop-heading "nonEngineSteer" %}}

> **float**

### {{% prop-heading "nonEngineSteerMinSpeed" %}}

> **float**

### {{% prop-heading "nonEngineSteerMaxSpeed" %}}

> **float**

### {{% prop-heading "waterDampeningMod" %}}

> **float**

### {{% prop-heading "liftModifier" %}}

> **float**

### {{% prop-heading "supportSizeMod" %}}

> **float**

### {{% prop-heading "angularDampening" %}}

> **float**

### {{% prop-heading "frictionThrottleModifier" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HullFloatPhysicsData](/vext/ref/fb/hullfloatphysicsdata) type.

