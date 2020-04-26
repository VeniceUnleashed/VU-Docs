---
title: SequenceEventData
---

## Summary

### Constructors

|  |
| --- |
| **[SequenceEventData](#constructor-0)**() |
| **[SequenceEventData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "event" >}} | [EventSpec](/vext/ref/fb/eventspec) |
| {{< prop "time" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SequenceEventData](/vext/ref/fb/sequenceeventdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SequenceEventData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SequenceEventData {#constructor-0}

> **SequenceEventData**()

Creates a new [SequenceEventData](/vext/ref/fb/sequenceeventdata) frostbite instance.

### SequenceEventData {#constructor-1}

> **SequenceEventData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SequenceEventData](/vext/ref/fb/sequenceeventdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "event" %}}

> **[EventSpec](/vext/ref/fb/eventspec)**

### {{% prop-heading "time" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SequenceEventData](/vext/ref/fb/sequenceeventdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SequenceEventData](/vext/ref/fb/sequenceeventdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SequenceEventData](/vext/ref/fb/sequenceeventdata) type.

