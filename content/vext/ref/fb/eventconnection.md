---
title: EventConnection
---

## Summary

### Constructors

|  |
| --- |
| **[EventConnection](#constructor-0)**() |
| **[EventConnection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "target" >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "sourceEvent" >}} | [EventSpec](/vext/ref/fb/eventspec) |
| {{< prop "targetEvent" >}} | [EventSpec](/vext/ref/fb/eventspec) |
| {{< prop "targetType" >}} | [EventConnectionTargetType](/vext/ref/fb/eventconnectiontargettype) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EventConnection](/vext/ref/fb/eventconnection) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EventConnection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EventConnection {#constructor-0}

> **EventConnection**()

Creates a new [EventConnection](/vext/ref/fb/eventconnection) frostbite instance.

### EventConnection {#constructor-1}

> **EventConnection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EventConnection](/vext/ref/fb/eventconnection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "source" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "target" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "sourceEvent" %}}

> **[EventSpec](/vext/ref/fb/eventspec)**

### {{% prop-heading "targetEvent" %}}

> **[EventSpec](/vext/ref/fb/eventspec)**

### {{% prop-heading "targetType" %}}

> **[EventConnectionTargetType](/vext/ref/fb/eventconnectiontargettype)**

## Methods

### Clone {#clone}

> **Clone**(): [EventConnection](/vext/ref/fb/eventconnection)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EventConnection](/vext/ref/fb/eventconnection)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EventConnection](/vext/ref/fb/eventconnection) type.

