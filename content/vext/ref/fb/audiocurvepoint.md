---
title: AudioCurvePoint
---

## Summary

### Constructors

|  |
| --- |
| **[AudioCurvePoint](#constructor-0)**() |
| **[AudioCurvePoint](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | float |
| {{< prop "y" >}} | float |
| {{< prop "k" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AudioCurvePoint](/vext/ref/fb/audiocurvepoint) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioCurvePoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioCurvePoint {#constructor-0}

> **AudioCurvePoint**()

Creates a new [AudioCurvePoint](/vext/ref/fb/audiocurvepoint) frostbite instance.

### AudioCurvePoint {#constructor-1}

> **AudioCurvePoint**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioCurvePoint](/vext/ref/fb/audiocurvepoint) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "x" %}}

> **float**

### {{% prop-heading "y" %}}

> **float**

### {{% prop-heading "k" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [AudioCurvePoint](/vext/ref/fb/audiocurvepoint)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AudioCurvePoint](/vext/ref/fb/audiocurvepoint)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioCurvePoint](/vext/ref/fb/audiocurvepoint) type.

