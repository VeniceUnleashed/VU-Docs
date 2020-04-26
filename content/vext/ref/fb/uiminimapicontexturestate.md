---
title: UIMinimapIconTextureState
---

## Summary

### Constructors

|  |
| --- |
| **[UIMinimapIconTextureState](#constructor-0)**() |
| **[UIMinimapIconTextureState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "state" >}} | [UIIconState](/vext/ref/fb/uiiconstate) |
| {{< prop "frameRate" >}} | float |
| {{< prop "textureInfos" >}} | [UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv)[] |
| {{< prop "shouldRotate" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapIconTextureState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIMinimapIconTextureState {#constructor-0}

> **UIMinimapIconTextureState**()

Creates a new [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate) frostbite instance.

### UIMinimapIconTextureState {#constructor-1}

> **UIMinimapIconTextureState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "state" %}}

> **[UIIconState](/vext/ref/fb/uiiconstate)**

### {{% prop-heading "frameRate" %}}

> **float**

### {{% prop-heading "textureInfos" %}}

> **[UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv)**[]

### {{% prop-heading "shouldRotate" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate) type.

