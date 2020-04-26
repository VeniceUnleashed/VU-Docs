---
title: DebrisHavokInfo
---

## Summary

### Constructors

|  |
| --- |
| **[DebrisHavokInfo](#constructor-0)**() |
| **[DebrisHavokInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "havokAsset" >}} | [HavokAsset](/vext/ref/fb/havokasset) \| nil |
| {{< prop "reserveCount" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DebrisHavokInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DebrisHavokInfo {#constructor-0}

> **DebrisHavokInfo**()

Creates a new [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo) frostbite instance.

### DebrisHavokInfo {#constructor-1}

> **DebrisHavokInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "havokAsset" %}}

> **[HavokAsset](/vext/ref/fb/havokasset)** \| **nil**

### {{% prop-heading "reserveCount" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DebrisHavokInfo](/vext/ref/fb/debrishavokinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo) type.

