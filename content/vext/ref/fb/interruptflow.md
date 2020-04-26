---
title: InterruptFlow
---

## Summary

### Constructors

|  |
| --- |
| **[InterruptFlow](#constructor-0)**() |
| **[InterruptFlow](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "interruptEnum" >}} | [UIInterruptID](/vext/ref/fb/uiinterruptid) |
| {{< prop "interruptFlow" >}} | [UIGraphAsset](/vext/ref/fb/uigraphasset) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [InterruptFlow](/vext/ref/fb/interruptflow) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InterruptFlow" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InterruptFlow {#constructor-0}

> **InterruptFlow**()

Creates a new [InterruptFlow](/vext/ref/fb/interruptflow) frostbite instance.

### InterruptFlow {#constructor-1}

> **InterruptFlow**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InterruptFlow](/vext/ref/fb/interruptflow) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "interruptEnum" %}}

> **[UIInterruptID](/vext/ref/fb/uiinterruptid)**

### {{% prop-heading "interruptFlow" %}}

> **[UIGraphAsset](/vext/ref/fb/uigraphasset)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [InterruptFlow](/vext/ref/fb/interruptflow)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[InterruptFlow](/vext/ref/fb/interruptflow)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InterruptFlow](/vext/ref/fb/interruptflow) type.

