---
title: TextureShaderParameter
---


## Summary
### Constructors
| |
| ----------- |
| **[TextureShaderParameter](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "parameterName" >}} | string |
| {{< prop "value" >}} | [TextureBaseAsset](/vext/ref/fb/texturebaseasset) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [TextureShaderParameter](/vext/ref/fb/textureshaderparameter) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TextureShaderParameter" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TextureShaderParameter {#constructor-0}
> **TextureShaderParameter**()

Creates a new [TextureShaderParameter](/vext/ref/fb/textureshaderparameter) frostbite structure.

## Properties
### {{% prop-heading "parameterName" %}}
> **string**

### {{% prop-heading "value" %}}
> **[TextureBaseAsset](/vext/ref/fb/texturebaseasset)** | **nil**

## Methods
### Clone
> **Clone**(): [TextureShaderParameter](/vext/ref/fb/textureshaderparameter)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[TextureShaderParameter](/vext/ref/fb/textureshaderparameter)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TextureShaderParameter](/vext/ref/fb/textureshaderparameter) type.

