---
title: AntRef
---

## Summary

### Constructors

|  |
| --- |
| **[AntRef](#constructor-0)**() |
| **[AntRef](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "assetId" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AntRef](/vext/ref/fb/antref) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntRef" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntRef {#constructor-0}

> **AntRef**()

Creates a new [AntRef](/vext/ref/fb/antref) frostbite instance.

### AntRef {#constructor-1}

> **AntRef**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntRef](/vext/ref/fb/antref) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "assetId" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [AntRef](/vext/ref/fb/antref)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AntRef](/vext/ref/fb/antref)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntRef](/vext/ref/fb/antref) type.

