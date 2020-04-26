---
title: Surface2dDrawMethodData
---

## Summary

### Constructors

|  |
| --- |
| **[Surface2dDrawMethodData](#constructor-0)**() |
| **[Surface2dDrawMethodData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Surface2dDrawMethodData](/vext/ref/fb/surface2ddrawmethoddata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Surface2dDrawMethodData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Surface2dDrawMethodData {#constructor-0}

> **Surface2dDrawMethodData**()

Creates a new [Surface2dDrawMethodData](/vext/ref/fb/surface2ddrawmethoddata) frostbite instance.

### Surface2dDrawMethodData {#constructor-1}

> **Surface2dDrawMethodData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Surface2dDrawMethodData](/vext/ref/fb/surface2ddrawmethoddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Methods

### Clone {#clone}

> **Clone**(): [Surface2dDrawMethodData](/vext/ref/fb/surface2ddrawmethoddata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Surface2dDrawMethodData](/vext/ref/fb/surface2ddrawmethoddata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Surface2dDrawMethodData](/vext/ref/fb/surface2ddrawmethoddata) type.

