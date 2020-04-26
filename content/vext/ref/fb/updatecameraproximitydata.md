---
title: UpdateCameraProximityData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[UpdateCameraProximityData](#constructor-0)**() |
| **[UpdateCameraProximityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UpdateCameraProximityData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[UpdateCameraProximityData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[UpdateCameraProximityData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "size" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "forwardOffset" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UpdateCameraProximityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UpdateCameraProximityData {#constructor-0}

> **UpdateCameraProximityData**()

Creates a new [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata) frostbite instance.

### UpdateCameraProximityData {#constructor-1}

> **UpdateCameraProximityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UpdateCameraProximityData {#constructor-2}

> **UpdateCameraProximityData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata). |

### UpdateCameraProximityData {#constructor-3}

> **UpdateCameraProximityData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata). |

### UpdateCameraProximityData {#constructor-4}

> **UpdateCameraProximityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata). |

## Properties

### {{% prop-heading "size" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "forwardOffset" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UpdateCameraProximityData](/vext/ref/fb/updatecameraproximitydata) type.

