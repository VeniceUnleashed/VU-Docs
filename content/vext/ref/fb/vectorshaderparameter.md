---
title: VectorShaderParameter
---

## Summary

### Constructors

|  |
| --- |
| **[VectorShaderParameter](#constructor-0)**() |
| **[VectorShaderParameter](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "parameterType" >}} | [ShaderParameterType](/vext/ref/fb/shaderparametertype) |
| {{< prop "parameterName" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VectorShaderParameter](/vext/ref/fb/vectorshaderparameter) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VectorShaderParameter" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VectorShaderParameter {#constructor-0}

> **VectorShaderParameter**()

Creates a new [VectorShaderParameter](/vext/ref/fb/vectorshaderparameter) frostbite instance.

### VectorShaderParameter {#constructor-1}

> **VectorShaderParameter**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VectorShaderParameter](/vext/ref/fb/vectorshaderparameter) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "value" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "parameterType" %}}

> **[ShaderParameterType](/vext/ref/fb/shaderparametertype)**

### {{% prop-heading "parameterName" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [VectorShaderParameter](/vext/ref/fb/vectorshaderparameter)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VectorShaderParameter](/vext/ref/fb/vectorshaderparameter)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VectorShaderParameter](/vext/ref/fb/vectorshaderparameter) type.

