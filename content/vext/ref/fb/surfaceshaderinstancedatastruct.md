---
title: SurfaceShaderInstanceDataStruct
---


## Summary
### Constructors
| |
| ----------- |
| **[SurfaceShaderInstanceDataStruct](#constructor-0)**() |

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
| ------ | ---- |
| **[Clone](#clone)**() | [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SurfaceShaderInstanceDataStruct" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SurfaceShaderInstanceDataStruct {#constructor-0}
> **SurfaceShaderInstanceDataStruct**()

Creates a new [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) frostbite structure.

## Properties
### {{% prop-heading "shader" %}}
> **[SurfaceShaderBaseAsset](/vext/ref/fb/surfaceshaderbaseasset)** | **nil**

### {{% prop-heading "boolParameters" %}}
> **[BoolShaderParameter](/vext/ref/fb/boolshaderparameter)**[]

### {{% prop-heading "vectorParameters" %}}
> **[VectorShaderParameter](/vext/ref/fb/vectorshaderparameter)**[]

### {{% prop-heading "vectorArrayParameters" %}}
> **[VectorArrayShaderParameter](/vext/ref/fb/vectorarrayshaderparameter)**[]

### {{% prop-heading "textureParameters" %}}
> **[TextureShaderParameter](/vext/ref/fb/textureshaderparameter)**[]

## Methods
### Clone
> **Clone**(): [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SurfaceShaderInstanceDataStruct](/vext/ref/fb/surfaceshaderinstancedatastruct) type.

