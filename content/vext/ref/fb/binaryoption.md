---
title: BinaryOption
---

## Summary

### Constructors

|  |
| --- |
| **[BinaryOption](#constructor-0)**() |
| **[BinaryOption](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [BinaryOption](/vext/ref/fb/binaryoption) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BinaryOption" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BinaryOption {#constructor-0}

> **BinaryOption**()

Creates a new [BinaryOption](/vext/ref/fb/binaryoption) frostbite instance.

### BinaryOption {#constructor-1}

> **BinaryOption**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BinaryOption](/vext/ref/fb/binaryoption) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [BinaryOption](/vext/ref/fb/binaryoption)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[BinaryOption](/vext/ref/fb/binaryoption)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BinaryOption](/vext/ref/fb/binaryoption) type.

