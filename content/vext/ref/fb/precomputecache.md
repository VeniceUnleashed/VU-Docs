---
title: PrecomputeCache
---

## Summary

### Constructors

|  |
| --- |
| **[PrecomputeCache](#constructor-0)**() |
| **[PrecomputeCache](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "guid" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "key" >}} | string |
| {{< prop "cachedDataEnable" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PrecomputeCache](/vext/ref/fb/precomputecache) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PrecomputeCache" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PrecomputeCache {#constructor-0}

> **PrecomputeCache**()

Creates a new [PrecomputeCache](/vext/ref/fb/precomputecache) frostbite instance.

### PrecomputeCache {#constructor-1}

> **PrecomputeCache**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PrecomputeCache](/vext/ref/fb/precomputecache) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "guid" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "key" %}}

> **string**

### {{% prop-heading "cachedDataEnable" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [PrecomputeCache](/vext/ref/fb/precomputecache)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PrecomputeCache](/vext/ref/fb/precomputecache)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PrecomputeCache](/vext/ref/fb/precomputecache) type.

