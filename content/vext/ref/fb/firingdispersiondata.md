---
title: FiringDispersionData
---


## Summary
### Constructors
| |
| ----------- |
| **[FiringDispersionData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minAngle" >}} | float |
| {{< prop "maxAngle" >}} | float |
| {{< prop "increasePerShot" >}} | float |
| {{< prop "decreasePerSecond" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [FiringDispersionData](/vext/ref/fb/firingdispersiondata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "FiringDispersionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### FiringDispersionData {#constructor-0}
> **FiringDispersionData**()

Creates a new [FiringDispersionData](/vext/ref/fb/firingdispersiondata) frostbite structure.

## Properties
### {{% prop-heading "minAngle" %}}
> **float**

### {{% prop-heading "maxAngle" %}}
> **float**

### {{% prop-heading "increasePerShot" %}}
> **float**

### {{% prop-heading "decreasePerSecond" %}}
> **float**

## Methods
### Clone
> **Clone**(): [FiringDispersionData](/vext/ref/fb/firingdispersiondata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[FiringDispersionData](/vext/ref/fb/firingdispersiondata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [FiringDispersionData](/vext/ref/fb/firingdispersiondata) type.

