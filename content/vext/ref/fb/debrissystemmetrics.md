---
title: DebrisSystemMetrics
---


## Summary
### Constructors
| |
| ----------- |
| **[DebrisSystemMetrics](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "havokParticleCount" >}} | int |
| {{< prop "havokParticlePartCount" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DebrisSystemMetrics" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DebrisSystemMetrics {#constructor-0}
> **DebrisSystemMetrics**()

Creates a new [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics) frostbite structure.

## Properties
### {{% prop-heading "havokParticleCount" %}}
> **int**

### {{% prop-heading "havokParticlePartCount" %}}
> **int**

## Methods
### Clone
> **Clone**(): [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DebrisSystemMetrics](/vext/ref/fb/debrissystemmetrics) type.

