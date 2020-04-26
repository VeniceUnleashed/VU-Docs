---
title: SmokeJammingData
---


## Summary
### Constructors
| |
| ----------- |
| **[SmokeJammingData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "jammingTime" >}} | float |
| {{< prop "maxRadius" >}} | float |
| {{< prop "minRadius" >}} | float |
| {{< prop "targetUpdateTime" >}} | float |
| {{< prop "enableSmokeJamming" >}} | bool |
| {{< prop "jammingPositionIsLocationDependent" >}} | bool |
| {{< prop "reportJammedBasedOnStartPosition" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SmokeJammingData](/vext/ref/fb/smokejammingdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SmokeJammingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SmokeJammingData {#constructor-0}
> **SmokeJammingData**()

Creates a new [SmokeJammingData](/vext/ref/fb/smokejammingdata) frostbite structure.

## Properties
### {{% prop-heading "jammingTime" %}}
> **float**

### {{% prop-heading "maxRadius" %}}
> **float**

### {{% prop-heading "minRadius" %}}
> **float**

### {{% prop-heading "targetUpdateTime" %}}
> **float**

### {{% prop-heading "enableSmokeJamming" %}}
> **bool**

### {{% prop-heading "jammingPositionIsLocationDependent" %}}
> **bool**

### {{% prop-heading "reportJammedBasedOnStartPosition" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [SmokeJammingData](/vext/ref/fb/smokejammingdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SmokeJammingData](/vext/ref/fb/smokejammingdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SmokeJammingData](/vext/ref/fb/smokejammingdata) type.

