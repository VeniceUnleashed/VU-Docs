---
title: UIMinimapIconTexture
---

## Summary

### Constructors

|  |
| --- |
| **[UIMinimapIconTexture](#constructor-0)**() |
| **[UIMinimapIconTexture](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "iconType" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "states" >}} | [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapIconTexture" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIMinimapIconTexture {#constructor-0}

> **UIMinimapIconTexture**()

Creates a new [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture) frostbite instance.

### UIMinimapIconTexture {#constructor-1}

> **UIMinimapIconTexture**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "iconType" %}}

> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "states" %}}

> **[UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate)**[]

## Methods

### Clone {#clone}

> **Clone**(): [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture) type.

