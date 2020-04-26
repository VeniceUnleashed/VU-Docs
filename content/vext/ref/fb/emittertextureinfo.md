---
title: EmitterTextureInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[EmitterTextureInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "textureName" >}} | string |
| {{< prop "normalmapName" >}} | string |
| {{< prop "animationFrameCount" >}} | float |
| {{< prop "animationFrameColumnCount" >}} | float |
| {{< prop "enableAnimation" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EmitterTextureInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EmitterTextureInfo {#constructor-0}
> **EmitterTextureInfo**()

Creates a new [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo) frostbite structure.

## Properties
### {{% prop-heading "textureName" %}}
> **string**

### {{% prop-heading "normalmapName" %}}
> **string**

### {{% prop-heading "animationFrameCount" %}}
> **float**

### {{% prop-heading "animationFrameColumnCount" %}}
> **float**

### {{% prop-heading "enableAnimation" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EmitterTextureInfo](/vext/ref/fb/emittertextureinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo) type.

