---
title: WarpAnimationBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[WarpAnimationBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "connectJointGroup" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "connectJointWeight" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "enableAlign" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "disableCulling" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "translationYWarpTolerance" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WarpAnimationBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WarpAnimationBinding {#constructor-0}
> **WarpAnimationBinding**()

Creates a new [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding) frostbite structure.

## Properties
### {{% prop-heading "connectJointGroup" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "connectJointWeight" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "enableAlign" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "disableCulling" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "translationYWarpTolerance" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WarpAnimationBinding](/vext/ref/fb/warpanimationbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding) type.

