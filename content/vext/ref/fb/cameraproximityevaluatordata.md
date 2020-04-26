---
title: CameraProximityEvaluatorData
---

Inherits from [EvaluatorData](/vext/ref/fb/evaluatordata)

## Summary

### Constructors

|  |
| --- |
| **[CameraProximityEvaluatorData](#constructor-0)**() |
| **[CameraProximityEvaluatorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CameraProximityEvaluatorData](#constructor-2)**(other: [EvaluatorData](/vext/ref/fb/evaluatordata)) |
| **[CameraProximityEvaluatorData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[CameraProximityEvaluatorData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "size" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "offset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "innerRadiusDirection" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "innerRadius" >}} | float |
| {{< prop "forwardOffset" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CameraProximityEvaluatorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CameraProximityEvaluatorData {#constructor-0}

> **CameraProximityEvaluatorData**()

Creates a new [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata) frostbite instance.

### CameraProximityEvaluatorData {#constructor-1}

> **CameraProximityEvaluatorData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CameraProximityEvaluatorData {#constructor-2}

> **CameraProximityEvaluatorData**(other: [EvaluatorData](/vext/ref/fb/evaluatordata))

Casts an instance of type [EvaluatorData](/vext/ref/fb/evaluatordata) to [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EvaluatorData](/vext/ref/fb/evaluatordata) | The instance to cast to [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata). |

### CameraProximityEvaluatorData {#constructor-3}

> **CameraProximityEvaluatorData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata). |

### CameraProximityEvaluatorData {#constructor-4}

> **CameraProximityEvaluatorData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata). |

## Properties

### {{% prop-heading "size" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "offset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "innerRadiusDirection" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "innerRadius" %}}

> **float**

### {{% prop-heading "forwardOffset" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CameraProximityEvaluatorData](/vext/ref/fb/cameraproximityevaluatordata) type.

