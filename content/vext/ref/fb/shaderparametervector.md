---
title: ShaderParameterVector
---


## Summary
### Constructors
| |
| ----------- |
| **[ShaderParameterVector](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "parameterName" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ShaderParameterVector](/vext/ref/fb/shaderparametervector) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ShaderParameterVector" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ShaderParameterVector {#constructor-0}
> **ShaderParameterVector**()

Creates a new [ShaderParameterVector](/vext/ref/fb/shaderparametervector) frostbite structure.

## Properties
### {{% prop-heading "value" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "parameterName" %}}
> **string**

## Methods
### Clone
> **Clone**(): [ShaderParameterVector](/vext/ref/fb/shaderparametervector)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ShaderParameterVector](/vext/ref/fb/shaderparametervector)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ShaderParameterVector](/vext/ref/fb/shaderparametervector) type.

