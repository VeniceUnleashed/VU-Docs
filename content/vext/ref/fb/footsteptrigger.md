---
title: FootStepTrigger
---

## Summary

### Constructors

|  |
| --- |
| **[FootStepTrigger](#constructor-0)**() |
| **[FootStepTrigger](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "time" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [FootStepTrigger](/vext/ref/fb/footsteptrigger) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FootStepTrigger" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FootStepTrigger {#constructor-0}

> **FootStepTrigger**()

Creates a new [FootStepTrigger](/vext/ref/fb/footsteptrigger) frostbite instance.

### FootStepTrigger {#constructor-1}

> **FootStepTrigger**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FootStepTrigger](/vext/ref/fb/footsteptrigger) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "time" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [FootStepTrigger](/vext/ref/fb/footsteptrigger)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[FootStepTrigger](/vext/ref/fb/footsteptrigger)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FootStepTrigger](/vext/ref/fb/footsteptrigger) type.

