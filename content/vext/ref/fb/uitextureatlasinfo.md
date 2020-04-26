---
title: UITextureAtlasInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[UITextureAtlasInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minUv" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "maxUv" >}} | [Vec2](/vext/ref/shared/class/vec2) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UITextureAtlasInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UITextureAtlasInfo {#constructor-0}
> **UITextureAtlasInfo**()

Creates a new [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo) frostbite structure.

## Properties
### {{% prop-heading "minUv" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "maxUv" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

## Methods
### Clone
> **Clone**(): [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UITextureAtlasInfo](/vext/ref/fb/uitextureatlasinfo) type.

