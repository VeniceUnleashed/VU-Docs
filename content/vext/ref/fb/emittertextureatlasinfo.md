---
title: EmitterTextureAtlasInfo
---

## Summary

### Constructors

|  |
| --- |
| **[EmitterTextureAtlasInfo](#constructor-0)**() |
| **[EmitterTextureAtlasInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minUv" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "maxUv" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "textureName" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EmitterTextureAtlasInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EmitterTextureAtlasInfo {#constructor-0}

> **EmitterTextureAtlasInfo**()

Creates a new [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo) frostbite instance.

### EmitterTextureAtlasInfo {#constructor-1}

> **EmitterTextureAtlasInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minUv" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "maxUv" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "textureName" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo) type.

