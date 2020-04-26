---
title: CounterStatus
---

## Summary

### Constructors

|  |
| --- |
| **[CounterStatus](#constructor-0)**() |
| **[CounterStatus](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "currentValue" >}} | float |
| {{< prop "originalValue" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CounterStatus](/vext/ref/fb/counterstatus) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CounterStatus" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CounterStatus {#constructor-0}

> **CounterStatus**()

Creates a new [CounterStatus](/vext/ref/fb/counterstatus) frostbite instance.

### CounterStatus {#constructor-1}

> **CounterStatus**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CounterStatus](/vext/ref/fb/counterstatus) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "currentValue" %}}

> **float**

### {{% prop-heading "originalValue" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [CounterStatus](/vext/ref/fb/counterstatus)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CounterStatus](/vext/ref/fb/counterstatus)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CounterStatus](/vext/ref/fb/counterstatus) type.

