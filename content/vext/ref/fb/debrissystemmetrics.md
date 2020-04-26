---
title: DebrisSystemMetrics
---

## Summary

### Constructors

|  |
| --- |
| **[DebrisSystemMetrics](#constructor-0)**() |
| **[DebrisSystemMetrics](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "havokParticleCount" >}} | int |
| {{< prop "havokParticlePartCount" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DebrisSystemMetrics" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DebrisSystemMetrics {#constructor-0}

> **DebrisSystemMetrics**()

Creates a new [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics) frostbite instance.

### DebrisSystemMetrics {#constructor-1}

> **DebrisSystemMetrics**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "havokParticleCount" %}}

> **int**

### {{% prop-heading "havokParticlePartCount" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics) type.

