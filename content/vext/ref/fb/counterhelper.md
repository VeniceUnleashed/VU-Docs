---
title: CounterHelper
---

## Summary

### Constructors

|  |
| --- |
| **[CounterHelper](#constructor-0)**() |
| **[CounterHelper](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dummy" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CounterHelper](/vext/ref/fb/counterhelper) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CounterHelper" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CounterHelper {#constructor-0}

> **CounterHelper**()

Creates a new [CounterHelper](/vext/ref/fb/counterhelper) frostbite instance.

### CounterHelper {#constructor-1}

> **CounterHelper**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CounterHelper](/vext/ref/fb/counterhelper) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "dummy" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [CounterHelper](/vext/ref/fb/counterhelper)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CounterHelper](/vext/ref/fb/counterhelper)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CounterHelper](/vext/ref/fb/counterhelper) type.

