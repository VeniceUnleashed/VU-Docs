---
title: AngleOfImpactData
---


## Summary
### Constructors
| |
| ----------- |
| **[AngleOfImpactData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "zone12Delimiter" >}} | float |
| {{< prop "zone23Delimiter" >}} | float |
| {{< prop "zone1Multiplier" >}} | float |
| {{< prop "zone2Multiplier" >}} | float |
| {{< prop "zone3Multiplier" >}} | float |
| {{< prop "enabled" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AngleOfImpactData](/vext/ref/fb/angleofimpactdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AngleOfImpactData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AngleOfImpactData {#constructor-0}
> **AngleOfImpactData**()

Creates a new [AngleOfImpactData](/vext/ref/fb/angleofimpactdata) frostbite structure.

## Properties
### {{% prop-heading "zone12Delimiter" %}}
> **float**

### {{% prop-heading "zone23Delimiter" %}}
> **float**

### {{% prop-heading "zone1Multiplier" %}}
> **float**

### {{% prop-heading "zone2Multiplier" %}}
> **float**

### {{% prop-heading "zone3Multiplier" %}}
> **float**

### {{% prop-heading "enabled" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [AngleOfImpactData](/vext/ref/fb/angleofimpactdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AngleOfImpactData](/vext/ref/fb/angleofimpactdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AngleOfImpactData](/vext/ref/fb/angleofimpactdata) type.

