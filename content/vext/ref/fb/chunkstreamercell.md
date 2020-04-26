---
title: ChunkStreamerCell
---

## Summary

### Constructors

|  |
| --- |
| **[ChunkStreamerCell](#constructor-0)**() |
| **[ChunkStreamerCell](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "shape" >}} | [Vec2](/vext/ref/shared/type/vec2)[] |
| {{< prop "bundleName" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ChunkStreamerCell](/vext/ref/fb/chunkstreamercell) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ChunkStreamerCell" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ChunkStreamerCell {#constructor-0}

> **ChunkStreamerCell**()

Creates a new [ChunkStreamerCell](/vext/ref/fb/chunkstreamercell) frostbite instance.

### ChunkStreamerCell {#constructor-1}

> **ChunkStreamerCell**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ChunkStreamerCell](/vext/ref/fb/chunkstreamercell) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "shape" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**[]

### {{% prop-heading "bundleName" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [ChunkStreamerCell](/vext/ref/fb/chunkstreamercell)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ChunkStreamerCell](/vext/ref/fb/chunkstreamercell)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ChunkStreamerCell](/vext/ref/fb/chunkstreamercell) type.

