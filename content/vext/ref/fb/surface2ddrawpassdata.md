---
title: Surface2dDrawPassData
---

## Summary

### Constructors

|  |
| --- |
| **[Surface2dDrawPassData](#constructor-0)**() |
| **[Surface2dDrawPassData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Surface2dDrawPassData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Surface2dDrawPassData {#constructor-0}

> **Surface2dDrawPassData**()

Creates a new [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata) frostbite instance.

### Surface2dDrawPassData {#constructor-1}

> **Surface2dDrawPassData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Methods

### Clone {#clone}

> **Clone**(): [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Surface2dDrawPassData](/vext/ref/fb/surface2ddrawpassdata) type.

