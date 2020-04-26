---
title: UITextureAtlasInfo
---

## Summary

### Constructors

|  |
| --- |
| **[UITextureAtlasInfo](#constructor-0)**() |
| **[UITextureAtlasInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minUv" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "maxUv" >}} | [Vec2](/vext/ref/shared/type/vec2) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UITextureAtlasInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UITextureAtlasInfo {#constructor-0}

> **UITextureAtlasInfo**()

Creates a new [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo) frostbite instance.

### UITextureAtlasInfo {#constructor-1}

> **UITextureAtlasInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minUv" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "maxUv" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

## Methods

### Clone {#clone}

> **Clone**(): [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo) type.

