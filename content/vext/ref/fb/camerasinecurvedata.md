---
title: CameraSineCurveData
---

## Summary

### Constructors

|  |
| --- |
| **[CameraSineCurveData](#constructor-0)**() |
| **[CameraSineCurveData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "frequency" >}} | float |
| {{< prop "amplitude" >}} | float |
| {{< prop "phaseShift" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CameraSineCurveData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CameraSineCurveData {#constructor-0}

> **CameraSineCurveData**()

Creates a new [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata) frostbite instance.

### CameraSineCurveData {#constructor-1}

> **CameraSineCurveData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "frequency" %}}

> **float**

### {{% prop-heading "amplitude" %}}

> **float**

### {{% prop-heading "phaseShift" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CameraSineCurveData](/vext/ref/fb/camerasinecurvedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CameraSineCurveData](/vext/ref/fb/camerasinecurvedata) type.

