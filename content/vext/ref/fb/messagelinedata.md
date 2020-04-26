---
title: MessageLineData
---

## Summary

### Constructors

|  |
| --- |
| **[MessageLineData](#constructor-0)**() |
| **[MessageLineData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "messageSid" >}} | string |
| {{< prop "entryInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MessageLineData](/vext/ref/fb/messagelinedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MessageLineData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MessageLineData {#constructor-0}

> **MessageLineData**()

Creates a new [MessageLineData](/vext/ref/fb/messagelinedata) frostbite instance.

### MessageLineData {#constructor-1}

> **MessageLineData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MessageLineData](/vext/ref/fb/messagelinedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "messageSid" %}}

> **string**

### {{% prop-heading "entryInputAction" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

## Methods

### Clone {#clone}

> **Clone**(): [MessageLineData](/vext/ref/fb/messagelinedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MessageLineData](/vext/ref/fb/messagelinedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MessageLineData](/vext/ref/fb/messagelinedata) type.

