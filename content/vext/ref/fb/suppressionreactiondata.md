---
title: SuppressionReactionData
---


## Summary
### Constructors
| |
| ----------- |
| **[SuppressionReactionData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "suppressionHighThreshold" >}} | float |
| {{< prop "suppressionLowThreshold" >}} | float |
| {{< prop "suppressionUIThreshold" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SuppressionReactionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SuppressionReactionData {#constructor-0}
> **SuppressionReactionData**()

Creates a new [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata) frostbite structure.

## Properties
### {{% prop-heading "suppressionHighThreshold" %}}
> **float**

### {{% prop-heading "suppressionLowThreshold" %}}
> **float**

### {{% prop-heading "suppressionUIThreshold" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SuppressionReactionData](/vext/ref/fb/suppressionreactiondata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata) type.

