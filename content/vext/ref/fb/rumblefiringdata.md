---
title: RumbleFiringData
---

## Summary

### Constructors

|  |
| --- |
| **[RumbleFiringData](#constructor-0)**() |
| **[RumbleFiringData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lowRumble" >}} | float |
| {{< prop "highRumble" >}} | float |
| {{< prop "rumbleDuration" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RumbleFiringData](/vext/ref/fb/rumblefiringdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RumbleFiringData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RumbleFiringData {#constructor-0}

> **RumbleFiringData**()

Creates a new [RumbleFiringData](/vext/ref/fb/rumblefiringdata) frostbite instance.

### RumbleFiringData {#constructor-1}

> **RumbleFiringData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RumbleFiringData](/vext/ref/fb/rumblefiringdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "lowRumble" %}}

> **float**

### {{% prop-heading "highRumble" %}}

> **float**

### {{% prop-heading "rumbleDuration" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [RumbleFiringData](/vext/ref/fb/rumblefiringdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RumbleFiringData](/vext/ref/fb/rumblefiringdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RumbleFiringData](/vext/ref/fb/rumblefiringdata) type.

