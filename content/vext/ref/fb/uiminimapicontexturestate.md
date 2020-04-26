---
title: UIMinimapIconTextureState
---


## Summary
### Constructors
| |
| ----------- |
| **[UIMinimapIconTextureState](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "state" >}} | [UIIconState](/vext/ref/fb/uiiconstate) |
| {{< prop "frameRate" >}} | float |
| {{< prop "textureInfos" >}} | [UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv)[] |
| {{< prop "shouldRotate" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapIconTextureState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIMinimapIconTextureState {#constructor-0}
> **UIMinimapIconTextureState**()

Creates a new [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate) frostbite structure.

## Properties
### {{% prop-heading "state" %}}
> **[UIIconState](/vext/ref/fb/uiiconstate)**

### {{% prop-heading "frameRate" %}}
> **float**

### {{% prop-heading "textureInfos" %}}
> **[UIMinimapIconUv](/vext/ref/fb/uiminimapiconuv)**[]

### {{% prop-heading "shouldRotate" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIMinimapIconTextureState](/vext/ref/fb/uiminimapicontexturestate) type.

