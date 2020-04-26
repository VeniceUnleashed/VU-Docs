---
title: RichPresenceContext
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[RichPresenceContext](#constructor-0)**() |
| **[RichPresenceContext](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RichPresenceContext](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "values" >}} | [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue)[] |
| {{< prop "defaultValue" >}} | [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue) \| nil |
| {{< prop "index" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RichPresenceContext" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RichPresenceContext {#constructor-0}

> **RichPresenceContext**()

Creates a new [RichPresenceContext](/vext/ref/fb/richpresencecontext) frostbite instance.

### RichPresenceContext {#constructor-1}

> **RichPresenceContext**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RichPresenceContext](/vext/ref/fb/richpresencecontext) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RichPresenceContext {#constructor-2}

> **RichPresenceContext**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RichPresenceContext](/vext/ref/fb/richpresencecontext). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RichPresenceContext](/vext/ref/fb/richpresencecontext). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "values" %}}

> **[RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue)**[]

### {{% prop-heading "defaultValue" %}}

> **[RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue)** \| **nil**

### {{% prop-heading "index" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RichPresenceContext](/vext/ref/fb/richpresencecontext) type.

