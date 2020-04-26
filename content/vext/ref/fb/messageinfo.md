---
title: MessageInfo
---

## Summary

### Constructors

|  |
| --- |
| **[MessageInfo](#constructor-0)**() |
| **[MessageInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rowTypeName" >}} | string |
| {{< prop "messageQueueSize" >}} | int |
| {{< prop "normalMessageTime" >}} | float |
| {{< prop "shortMessageTime" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MessageInfo](/vext/ref/fb/messageinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MessageInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MessageInfo {#constructor-0}

> **MessageInfo**()

Creates a new [MessageInfo](/vext/ref/fb/messageinfo) frostbite instance.

### MessageInfo {#constructor-1}

> **MessageInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MessageInfo](/vext/ref/fb/messageinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "rowTypeName" %}}

> **string**

### {{% prop-heading "messageQueueSize" %}}

> **int**

### {{% prop-heading "normalMessageTime" %}}

> **float**

### {{% prop-heading "shortMessageTime" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [MessageInfo](/vext/ref/fb/messageinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MessageInfo](/vext/ref/fb/messageinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MessageInfo](/vext/ref/fb/messageinfo) type.

