---
title: EdgeModelLightMapInstance
---

## Summary

### Constructors

|  |
| --- |
| **[EdgeModelLightMapInstance](#constructor-0)**() |
| **[EdgeModelLightMapInstance](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lightMapUv" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EdgeModelLightMapInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EdgeModelLightMapInstance {#constructor-0}

> **EdgeModelLightMapInstance**()

Creates a new [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance) frostbite instance.

### EdgeModelLightMapInstance {#constructor-1}

> **EdgeModelLightMapInstance**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "lightMapUv" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "position" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Methods

### Clone {#clone}

> **Clone**(): [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EdgeModelLightMapInstance](/vext/ref/fb/edgemodellightmapinstance) type.

