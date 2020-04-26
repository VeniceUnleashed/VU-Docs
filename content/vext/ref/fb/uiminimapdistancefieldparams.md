---
title: UIMinimapDistanceFieldParams
---


## Summary
### Constructors
| |
| ----------- |
| **[UIMinimapDistanceFieldParams](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "colorTint" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "outlineColor" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "distanceScale" >}} | float |
| {{< prop "alphaThreshold" >}} | float |
| {{< prop "outlineInner" >}} | float |
| {{< prop "outlineOuter" >}} | float |
| {{< prop "distanceField" >}} | [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapDistanceFieldParams" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIMinimapDistanceFieldParams {#constructor-0}
> **UIMinimapDistanceFieldParams**()

Creates a new [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams) frostbite structure.

## Properties
### {{% prop-heading "colorTint" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "outlineColor" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "distanceScale" %}}
> **float**

### {{% prop-heading "alphaThreshold" %}}
> **float**

### {{% prop-heading "outlineInner" %}}
> **float**

### {{% prop-heading "outlineOuter" %}}
> **float**

### {{% prop-heading "distanceField" %}}
> **[UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset)** | **nil**

## Methods
### Clone
> **Clone**(): [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams) type.

