---
title: TextureShaderParameter
---

## Summary

### Constructors

|  |
| --- |
| **[TextureShaderParameter](#constructor-0)**() |
| **[TextureShaderParameter](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "parameterName" >}} | string |
| {{< prop "value" >}} | [TextureBaseAsset](/vext/ref/fb/texturebaseasset) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [TextureShaderParameter](/vext/ref/fb/textureshaderparameter) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TextureShaderParameter" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TextureShaderParameter {#constructor-0}

> **TextureShaderParameter**()

Creates a new [TextureShaderParameter](/vext/ref/fb/textureshaderparameter) frostbite instance.

### TextureShaderParameter {#constructor-1}

> **TextureShaderParameter**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TextureShaderParameter](/vext/ref/fb/textureshaderparameter) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "parameterName" %}}

> **string**

### {{% prop-heading "value" %}}

> **[TextureBaseAsset](/vext/ref/fb/texturebaseasset)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [TextureShaderParameter](/vext/ref/fb/textureshaderparameter)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[TextureShaderParameter](/vext/ref/fb/textureshaderparameter)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TextureShaderParameter](/vext/ref/fb/textureshaderparameter) type.

