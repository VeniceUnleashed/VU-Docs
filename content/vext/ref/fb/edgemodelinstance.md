---
title: EdgeModelInstance
---

## Summary

### Constructors

|  |
| --- |
| **[EdgeModelInstance](#constructor-0)**() |
| **[EdgeModelInstance](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EdgeModelInstance](/vext/ref/fb/edgemodelinstance) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EdgeModelInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EdgeModelInstance {#constructor-0}

> **EdgeModelInstance**()

Creates a new [EdgeModelInstance](/vext/ref/fb/edgemodelinstance) frostbite instance.

### EdgeModelInstance {#constructor-1}

> **EdgeModelInstance**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EdgeModelInstance](/vext/ref/fb/edgemodelinstance) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "transform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

## Methods

### Clone {#clone}

> **Clone**(): [EdgeModelInstance](/vext/ref/fb/edgemodelinstance)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EdgeModelInstance](/vext/ref/fb/edgemodelinstance)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EdgeModelInstance](/vext/ref/fb/edgemodelinstance) type.

