---
title: UIMinimapIconTexture
---


## Summary
### Constructors
| |
| ----------- |
| **[UIMinimapIconTexture](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "iconType" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "states" >}} | [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapIconTexture" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIMinimapIconTexture {#constructor-0}
> **UIMinimapIconTexture**()

Creates a new [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture) frostbite structure.

## Properties
### {{% prop-heading "iconType" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "states" %}}
> **[UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate)**[]

## Methods
### Clone
> **Clone**(): [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIMinimapIconTexture](/vext/ref/fb/uiminimapicontexture) type.

