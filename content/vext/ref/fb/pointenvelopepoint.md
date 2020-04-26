---
title: PointEnvelopePoint
---

## Summary

### Constructors

|  |
| --- |
| **[PointEnvelopePoint](#constructor-0)**() |
| **[PointEnvelopePoint](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "y" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PointEnvelopePoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PointEnvelopePoint {#constructor-0}

> **PointEnvelopePoint**()

Creates a new [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint) frostbite instance.

### PointEnvelopePoint {#constructor-1}

> **PointEnvelopePoint**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "x" %}}

> **float**

### {{% prop-heading "y" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PointEnvelopePoint](/vext/ref/fb/pointenvelopepoint) type.

