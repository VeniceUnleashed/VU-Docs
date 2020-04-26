---
title: BoolShaderParameter
---


## Summary
### Constructors
| |
| ----------- |
| **[BoolShaderParameter](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "parameterName" >}} | string |
| {{< prop "value" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BoolShaderParameter](/vext/ref/fb/boolshaderparameter) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BoolShaderParameter" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BoolShaderParameter {#constructor-0}
> **BoolShaderParameter**()

Creates a new [BoolShaderParameter](/vext/ref/fb/boolshaderparameter) frostbite structure.

## Properties
### {{% prop-heading "parameterName" %}}
> **string**

### {{% prop-heading "value" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [BoolShaderParameter](/vext/ref/fb/boolshaderparameter)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BoolShaderParameter](/vext/ref/fb/boolshaderparameter)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BoolShaderParameter](/vext/ref/fb/boolshaderparameter) type.

