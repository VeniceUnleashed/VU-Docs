---
title: KillWeight
---

## Summary

### Constructors

|  |
| --- |
| **[KillWeight](#constructor-0)**() |
| **[KillWeight](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lowIntenseWeight" >}} | float |
| {{< prop "highIntenseWeight" >}} | float |
| {{< prop "coolDownTime" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [KillWeight](/vext/ref/fb/killweight) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "KillWeight" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### KillWeight {#constructor-0}

> **KillWeight**()

Creates a new [KillWeight](/vext/ref/fb/killweight) frostbite instance.

### KillWeight {#constructor-1}

> **KillWeight**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [KillWeight](/vext/ref/fb/killweight) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "lowIntenseWeight" %}}

> **float**

### {{% prop-heading "highIntenseWeight" %}}

> **float**

### {{% prop-heading "coolDownTime" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [KillWeight](/vext/ref/fb/killweight)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[KillWeight](/vext/ref/fb/killweight)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [KillWeight](/vext/ref/fb/killweight) type.

