---
title: SoldierDetonationData
---


## Summary
### Constructors
| |
| ----------- |
| **[SoldierDetonationData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "angle" >}} | float |
| {{< prop "minSpeedForActivation" >}} | float |
| {{< prop "radius" >}} | float |
| {{< prop "soldierDetonationActivationDelay" >}} | float |
| {{< prop "useAngle" >}} | bool |
| {{< prop "hasSoldierDetonation" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierDetonationData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierDetonationData {#constructor-0}
> **SoldierDetonationData**()

Creates a new [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata) frostbite structure.

## Properties
### {{% prop-heading "angle" %}}
> **float**

### {{% prop-heading "minSpeedForActivation" %}}
> **float**

### {{% prop-heading "radius" %}}
> **float**

### {{% prop-heading "soldierDetonationActivationDelay" %}}
> **float**

### {{% prop-heading "useAngle" %}}
> **bool**

### {{% prop-heading "hasSoldierDetonation" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoldierDetonationData](/vext/ref/fb/soldierdetonationdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata) type.

