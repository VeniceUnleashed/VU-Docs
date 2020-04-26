---
title: VectorArrayShaderParameter
---

## Summary

### Constructors

|  |
| --- |
| **[VectorArrayShaderParameter](#constructor-0)**() |
| **[VectorArrayShaderParameter](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "parameterName" >}} | string |
| {{< prop "parameterType" >}} | [ShaderParameterType](/vext/ref/fb/shaderparametertype) |
| {{< prop "values" >}} | [Vec4](/vext/ref/shared/type/vec4)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VectorArrayShaderParameter" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VectorArrayShaderParameter {#constructor-0}

> **VectorArrayShaderParameter**()

Creates a new [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter) frostbite instance.

### VectorArrayShaderParameter {#constructor-1}

> **VectorArrayShaderParameter**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "parameterName" %}}

> **string**

### {{% prop-heading "parameterType" %}}

> **[ShaderParameterType](/vext/ref/fb/shaderparametertype)**

### {{% prop-heading "values" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**[]

## Methods

### Clone {#clone}

> **Clone**(): [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter) type.

