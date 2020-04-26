---
title: RichPresenceContextSetting
---

## Summary

### Constructors

|  |
| --- |
| **[RichPresenceContextSetting](#constructor-0)**() |
| **[RichPresenceContextSetting](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "context" >}} | [RichPresenceContext](/vext/ref/fb/richpresencecontext) \| nil |
| {{< prop "value" >}} | [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RichPresenceContextSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RichPresenceContextSetting {#constructor-0}

> **RichPresenceContextSetting**()

Creates a new [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting) frostbite instance.

### RichPresenceContextSetting {#constructor-1}

> **RichPresenceContextSetting**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "context" %}}

> **[RichPresenceContext](/vext/ref/fb/richpresencecontext)** \| **nil**

### {{% prop-heading "value" %}}

> **[RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RichPresenceContextSetting](/vext/ref/fb/richpresencecontextsetting) type.

