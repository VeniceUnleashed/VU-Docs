---
title: SurfaceShaderInstanceDataStruct
---

## Summary

### Constructors

|  |
| --- |
| **[SurfaceShaderInstanceDataStruct](#constructor-0)**() |
| **[SurfaceShaderInstanceDataStruct](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "shader" >}} | [SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset) \| nil |
| {{< prop "boolParameters" >}} | [BoolShaderParameter](/vext/ref/fb/boolshaderparameter)[] |
| {{< prop "vectorParameters" >}} | [VectorShaderParameter](/vext/ref/fb/vectorshaderparameter)[] |
| {{< prop "vectorArrayParameters" >}} | [VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter)[] |
| {{< prop "textureParameters" >}} | [TextureShaderParameter](/vext/ref/fb/textureshaderparameter)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SurfaceShaderInstanceDataStruct" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SurfaceShaderInstanceDataStruct {#constructor-0}

> **SurfaceShaderInstanceDataStruct**()

Creates a new [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) frostbite instance.

### SurfaceShaderInstanceDataStruct {#constructor-1}

> **SurfaceShaderInstanceDataStruct**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "shader" %}}

> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** \| **nil**

### {{% prop-heading "boolParameters" %}}

> **[BoolShaderParameter](/vext/ref/fb/boolshaderparameter)**[]

### {{% prop-heading "vectorParameters" %}}

> **[VectorShaderParameter](/vext/ref/fb/vectorshaderparameter)**[]

### {{% prop-heading "vectorArrayParameters" %}}

> **[VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter)**[]

### {{% prop-heading "textureParameters" %}}

> **[TextureShaderParameter](/vext/ref/fb/textureshaderparameter)**[]

## Methods

### Clone {#clone}

> **Clone**(): [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) type.

