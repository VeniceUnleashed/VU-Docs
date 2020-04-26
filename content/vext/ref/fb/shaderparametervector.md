---
title: ShaderParameterVector
---

## Summary

### Constructors

|  |
| --- |
| **[ShaderParameterVector](#constructor-0)**() |
| **[ShaderParameterVector](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "parameterName" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ShaderParameterVector](/vext/ref/fb/shaderparametervector) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ShaderParameterVector" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ShaderParameterVector {#constructor-0}

> **ShaderParameterVector**()

Creates a new [ShaderParameterVector](/vext/ref/fb/shaderparametervector) frostbite instance.

### ShaderParameterVector {#constructor-1}

> **ShaderParameterVector**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ShaderParameterVector](/vext/ref/fb/shaderparametervector) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "value" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "parameterName" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [ShaderParameterVector](/vext/ref/fb/shaderparametervector)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ShaderParameterVector](/vext/ref/fb/shaderparametervector)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ShaderParameterVector](/vext/ref/fb/shaderparametervector) type.

