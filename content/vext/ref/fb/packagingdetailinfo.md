---
title: PackagingDetailInfo
---

## Summary

### Constructors

|  |
| --- |
| **[PackagingDetailInfo](#constructor-0)**() |
| **[PackagingDetailInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "mipsToSkip" >}} | int |
| {{< prop "lodsToSkip" >}} | int |
| {{< prop "includeAnimation" >}} | bool |
| {{< prop "includeMeshes" >}} | bool |
| {{< prop "includeSounds" >}} | bool |
| {{< prop "includeTextures" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PackagingDetailInfo](/vext/ref/fb/packagingdetailinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PackagingDetailInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PackagingDetailInfo {#constructor-0}

> **PackagingDetailInfo**()

Creates a new [PackagingDetailInfo](/vext/ref/fb/packagingdetailinfo) frostbite instance.

### PackagingDetailInfo {#constructor-1}

> **PackagingDetailInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PackagingDetailInfo](/vext/ref/fb/packagingdetailinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "mipsToSkip" %}}

> **int**

### {{% prop-heading "lodsToSkip" %}}

> **int**

### {{% prop-heading "includeAnimation" %}}

> **bool**

### {{% prop-heading "includeMeshes" %}}

> **bool**

### {{% prop-heading "includeSounds" %}}

> **bool**

### {{% prop-heading "includeTextures" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [PackagingDetailInfo](/vext/ref/fb/packagingdetailinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PackagingDetailInfo](/vext/ref/fb/packagingdetailinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PackagingDetailInfo](/vext/ref/fb/packagingdetailinfo) type.

