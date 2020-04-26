---
title: SpringData
---


## Summary
### Constructors
| |
| ----------- |
| **[SpringData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "length" >}} | float |
| {{< prop "stiffness" >}} | float |
| {{< prop "damping" >}} | float |
| {{< prop "maxSpringForce" >}} | float |
| {{< prop "progressiveStartRatio" >}} | float |
| {{< prop "progressiveExponent" >}} | float |
| {{< prop "visualClipOffset" >}} | float |
| {{< prop "attachOffsetY" >}} | float |
| {{< prop "disabledStrenghModifier" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SpringData](/vext/ref/fb/springdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpringData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpringData {#constructor-0}
> **SpringData**()

Creates a new [SpringData](/vext/ref/fb/springdata) frostbite structure.

## Properties
### {{% prop-heading "length" %}}
> **float**

### {{% prop-heading "stiffness" %}}
> **float**

### {{% prop-heading "damping" %}}
> **float**

### {{% prop-heading "maxSpringForce" %}}
> **float**

### {{% prop-heading "progressiveStartRatio" %}}
> **float**

### {{% prop-heading "progressiveExponent" %}}
> **float**

### {{% prop-heading "visualClipOffset" %}}
> **float**

### {{% prop-heading "attachOffsetY" %}}
> **float**

### {{% prop-heading "disabledStrenghModifier" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SpringData](/vext/ref/fb/springdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SpringData](/vext/ref/fb/springdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpringData](/vext/ref/fb/springdata) type.

