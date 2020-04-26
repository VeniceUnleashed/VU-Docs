---
title: AntEventData
---

## Summary

### Constructors

|  |
| --- |
| **[AntEventData](#constructor-0)**() |
| **[AntEventData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "tagId" >}} | int |
| {{< prop "event" >}} | [EventSpec](/vext/ref/fb/eventspec) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AntEventData](/vext/ref/fb/anteventdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntEventData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntEventData {#constructor-0}

> **AntEventData**()

Creates a new [AntEventData](/vext/ref/fb/anteventdata) frostbite instance.

### AntEventData {#constructor-1}

> **AntEventData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntEventData](/vext/ref/fb/anteventdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "tagId" %}}

> **int**

### {{% prop-heading "event" %}}

> **[EventSpec](/vext/ref/fb/eventspec)**

## Methods

### Clone {#clone}

> **Clone**(): [AntEventData](/vext/ref/fb/anteventdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AntEventData](/vext/ref/fb/anteventdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntEventData](/vext/ref/fb/anteventdata) type.

