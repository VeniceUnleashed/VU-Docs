---
title: EmitterTextureAtlasInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[EmitterTextureAtlasInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minUv" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "maxUv" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "textureName" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EmitterTextureAtlasInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EmitterTextureAtlasInfo {#constructor-0}
> **EmitterTextureAtlasInfo**()

Creates a new [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo) frostbite structure.

## Properties
### {{% prop-heading "minUv" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "maxUv" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "textureName" %}}
> **string**

## Methods
### Clone
> **Clone**(): [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EmitterTextureAtlasInfo](/vext/ref/fb/emittertextureatlasinfo) type.

