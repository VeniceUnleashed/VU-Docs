---
title: UIMinimapIconUv
---

## Summary

### Constructors

|  |
| --- |
| **[UIMinimapIconUv](#constructor-0)**() |
| **[UIMinimapIconUv](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minUv" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "maxUv" >}} | [Vec2](/vext/ref/shared/type/vec2) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapIconUv" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIMinimapIconUv {#constructor-0}

> **UIMinimapIconUv**()

Creates a new [UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv) frostbite instance.

### UIMinimapIconUv {#constructor-1}

> **UIMinimapIconUv**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

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

> **Clone**(): [UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv) type.

