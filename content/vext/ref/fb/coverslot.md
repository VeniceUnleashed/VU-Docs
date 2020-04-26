---
title: CoverSlot
---

## Summary

### Constructors

|  |
| --- |
| **[CoverSlot](#constructor-0)**() |
| **[CoverSlot](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CoverSlot](/vext/ref/fb/coverslot) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CoverSlot" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CoverSlot {#constructor-0}

> **CoverSlot**()

Creates a new [CoverSlot](/vext/ref/fb/coverslot) frostbite instance.

### CoverSlot {#constructor-1}

> **CoverSlot**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CoverSlot](/vext/ref/fb/coverslot) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "position" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Methods

### Clone {#clone}

> **Clone**(): [CoverSlot](/vext/ref/fb/coverslot)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CoverSlot](/vext/ref/fb/coverslot)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CoverSlot](/vext/ref/fb/coverslot) type.

