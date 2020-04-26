---
title: SoundDataChunk
---

## Summary

### Constructors

|  |
| --- |
| **[SoundDataChunk](#constructor-0)**() |
| **[SoundDataChunk](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "chunkId" >}} | [Guid](/vext/ref/shared/type/guid) |
| {{< prop "chunkSize" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundDataChunk](/vext/ref/fb/sounddatachunk) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundDataChunk" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundDataChunk {#constructor-0}

> **SoundDataChunk**()

Creates a new [SoundDataChunk](/vext/ref/fb/sounddatachunk) frostbite instance.

### SoundDataChunk {#constructor-1}

> **SoundDataChunk**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundDataChunk](/vext/ref/fb/sounddatachunk) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "chunkId" %}}

> **[Guid](/vext/ref/shared/type/guid)**

### {{% prop-heading "chunkSize" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SoundDataChunk](/vext/ref/fb/sounddatachunk)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundDataChunk](/vext/ref/fb/sounddatachunk)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundDataChunk](/vext/ref/fb/sounddatachunk) type.

