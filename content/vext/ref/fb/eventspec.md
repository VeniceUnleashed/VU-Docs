---
title: EventSpec
---

## Summary

### Constructors

|  |
| --- |
| **[EventSpec](#constructor-0)**() |
| **[EventSpec](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EventSpec](/vext/ref/fb/eventspec) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EventSpec" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EventSpec {#constructor-0}

> **EventSpec**()

Creates a new [EventSpec](/vext/ref/fb/eventspec) frostbite instance.

### EventSpec {#constructor-1}

> **EventSpec**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EventSpec](/vext/ref/fb/eventspec) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "id" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [EventSpec](/vext/ref/fb/eventspec)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EventSpec](/vext/ref/fb/eventspec)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EventSpec](/vext/ref/fb/eventspec) type.

