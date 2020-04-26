---
title: EnlightenLightProbeSet
---

## Summary

### Constructors

|  |
| --- |
| **[EnlightenLightProbeSet](#constructor-0)**() |
| **[EnlightenLightProbeSet](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "boundingBox" >}} | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |
| {{< prop "sizeX" >}} | int |
| {{< prop "sizeZ" >}} | int |
| {{< prop "sizeY" >}} | int |
| {{< prop "systemId" >}} | int |
| {{< prop "blendDistance" >}} | float |
| {{< prop "priority" >}} | int |
| {{< prop "positions" >}} | [Vec3](/vext/ref/shared/type/vec3)[] |
| {{< prop "validIndices" >}} | int[] |
| {{< prop "inputSystems" >}} | int[] |
| {{< prop "cache" >}} | [PrecomputeCache](/vext/ref/fb/precomputecache) |
| {{< prop "staticProbeSet" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EnlightenLightProbeSet" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EnlightenLightProbeSet {#constructor-0}

> **EnlightenLightProbeSet**()

Creates a new [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset) frostbite instance.

### EnlightenLightProbeSet {#constructor-1}

> **EnlightenLightProbeSet**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "transform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "boundingBox" %}}

> **[AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)**

### {{% prop-heading "sizeX" %}}

> **int**

### {{% prop-heading "sizeZ" %}}

> **int**

### {{% prop-heading "sizeY" %}}

> **int**

### {{% prop-heading "systemId" %}}

> **int**

### {{% prop-heading "blendDistance" %}}

> **float**

### {{% prop-heading "priority" %}}

> **int**

### {{% prop-heading "positions" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**[]

### {{% prop-heading "validIndices" %}}

> **int**[]

### {{% prop-heading "inputSystems" %}}

> **int**[]

### {{% prop-heading "cache" %}}

> **[PrecomputeCache](/vext/ref/fb/precomputecache)**

### {{% prop-heading "staticProbeSet" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset) type.

