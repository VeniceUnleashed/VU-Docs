---
title: Surface3dDrawMethodData
---

## Summary

### Constructors

|  |
| --- |
| **[Surface3dDrawMethodData](#constructor-0)**() |
| **[Surface3dDrawMethodData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Surface3dDrawMethodData](/vext/ref/fb/surface3ddrawmethoddata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Surface3dDrawMethodData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Surface3dDrawMethodData {#constructor-0}

> **Surface3dDrawMethodData**()

Creates a new [Surface3dDrawMethodData](/vext/ref/fb/surface3ddrawmethoddata) frostbite instance.

### Surface3dDrawMethodData {#constructor-1}

> **Surface3dDrawMethodData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Surface3dDrawMethodData](/vext/ref/fb/surface3ddrawmethoddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Methods

### Clone {#clone}

> **Clone**(): [Surface3dDrawMethodData](/vext/ref/fb/surface3ddrawmethoddata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Surface3dDrawMethodData](/vext/ref/fb/surface3ddrawmethoddata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Surface3dDrawMethodData](/vext/ref/fb/surface3ddrawmethoddata) type.

