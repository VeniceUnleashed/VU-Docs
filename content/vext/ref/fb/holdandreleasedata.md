---
title: HoldAndReleaseData
---


## Summary
### Constructors
| |
| ----------- |
| **[HoldAndReleaseData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxHoldTime" >}} | float |
| {{< prop "minPowerModifier" >}} | float |
| {{< prop "maxPowerModifier" >}} | float |
| {{< prop "powerIncreasePerSecond" >}} | float |
| {{< prop "delay" >}} | float |
| {{< prop "killedHoldingPowerModifier" >}} | float |
| {{< prop "forceFireWhenKilledHolding" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HoldAndReleaseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HoldAndReleaseData {#constructor-0}
> **HoldAndReleaseData**()

Creates a new [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata) frostbite structure.

## Properties
### {{% prop-heading "maxHoldTime" %}}
> **float**

### {{% prop-heading "minPowerModifier" %}}
> **float**

### {{% prop-heading "maxPowerModifier" %}}
> **float**

### {{% prop-heading "powerIncreasePerSecond" %}}
> **float**

### {{% prop-heading "delay" %}}
> **float**

### {{% prop-heading "killedHoldingPowerModifier" %}}
> **float**

### {{% prop-heading "forceFireWhenKilledHolding" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[HoldAndReleaseData](/vext/ref/fb/holdandreleasedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata) type.

