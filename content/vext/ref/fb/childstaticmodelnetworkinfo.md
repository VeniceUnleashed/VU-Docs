---
title: ChildStaticModelNetworkInfo
---

## Summary

### Constructors

|  |
| --- |
| **[ChildStaticModelNetworkInfo](#constructor-0)**() |
| **[ChildStaticModelNetworkInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "networkRange" >}} | [IndexRange](/vext/ref/fb/indexrange) |
| {{< prop "parentPartComponentIndex" >}} | int |
| {{< prop "parentHealthStateIndex" >}} | int |
| {{< prop "instanceIndex" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ChildStaticModelNetworkInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ChildStaticModelNetworkInfo {#constructor-0}

> **ChildStaticModelNetworkInfo**()

Creates a new [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo) frostbite instance.

### ChildStaticModelNetworkInfo {#constructor-1}

> **ChildStaticModelNetworkInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "networkRange" %}}

> **[IndexRange](/vext/ref/fb/indexrange)**

### {{% prop-heading "parentPartComponentIndex" %}}

> **int**

### {{% prop-heading "parentHealthStateIndex" %}}

> **int**

### {{% prop-heading "instanceIndex" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo) type.

