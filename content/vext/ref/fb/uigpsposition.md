---
title: UIGPSPosition
---


## Summary
### Constructors
| |
| ----------- |
| **[UIGPSPosition](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "latitude" >}} | float |
| {{< prop "longitude" >}} | float |
| {{< prop "seaLevelOffset" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIGPSPosition](/vext/ref/fb/uigpsposition) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIGPSPosition" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIGPSPosition {#constructor-0}
> **UIGPSPosition**()

Creates a new [UIGPSPosition](/vext/ref/fb/uigpsposition) frostbite structure.

## Properties
### {{% prop-heading "latitude" %}}
> **float**

### {{% prop-heading "longitude" %}}
> **float**

### {{% prop-heading "seaLevelOffset" %}}
> **float**

## Methods
### Clone
> **Clone**(): [UIGPSPosition](/vext/ref/fb/uigpsposition)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIGPSPosition](/vext/ref/fb/uigpsposition)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIGPSPosition](/vext/ref/fb/uigpsposition) type.

