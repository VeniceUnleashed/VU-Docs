---
title: Strengths
---


## Summary
### Constructors
| |
| ----------- |
| **[Strengths](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "infantry" >}} | float |
| {{< prop "lightArmour" >}} | float |
| {{< prop "heavyArmour" >}} | float |
| {{< prop "helicopter" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [Strengths](/vext/ref/fb/strengths) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "Strengths" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### Strengths {#constructor-0}
> **Strengths**()

Creates a new [Strengths](/vext/ref/fb/strengths) frostbite structure.

## Properties
### {{% prop-heading "infantry" %}}
> **float**

### {{% prop-heading "lightArmour" %}}
> **float**

### {{% prop-heading "heavyArmour" %}}
> **float**

### {{% prop-heading "helicopter" %}}
> **float**

## Methods
### Clone
> **Clone**(): [Strengths](/vext/ref/fb/strengths)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[Strengths](/vext/ref/fb/strengths)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [Strengths](/vext/ref/fb/strengths) type.

