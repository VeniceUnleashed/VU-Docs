---
title: AmmoConfigData
---


## Summary
### Constructors
| |
| ----------- |
| **[AmmoConfigData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "magazineCapacity" >}} | int |
| {{< prop "numberOfMagazines" >}} | int |
| {{< prop "traceFrequency" >}} | int |
| {{< prop "ammoPickupMinAmount" >}} | int |
| {{< prop "ammoPickupMaxAmount" >}} | int |
| {{< prop "autoReplenishDelay" >}} | float |
| {{< prop "ammoBagPickupAmount" >}} | int |
| {{< prop "ammoBagPickupDelayMultiplier" >}} | float |
| {{< prop "autoReplenishMagazine" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AmmoConfigData](/vext/ref/fb/ammoconfigdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AmmoConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AmmoConfigData {#constructor-0}
> **AmmoConfigData**()

Creates a new [AmmoConfigData](/vext/ref/fb/ammoconfigdata) frostbite structure.

## Properties
### {{% prop-heading "magazineCapacity" %}}
> **int**

### {{% prop-heading "numberOfMagazines" %}}
> **int**

### {{% prop-heading "traceFrequency" %}}
> **int**

### {{% prop-heading "ammoPickupMinAmount" %}}
> **int**

### {{% prop-heading "ammoPickupMaxAmount" %}}
> **int**

### {{% prop-heading "autoReplenishDelay" %}}
> **float**

### {{% prop-heading "ammoBagPickupAmount" %}}
> **int**

### {{% prop-heading "ammoBagPickupDelayMultiplier" %}}
> **float**

### {{% prop-heading "autoReplenishMagazine" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [AmmoConfigData](/vext/ref/fb/ammoconfigdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AmmoConfigData](/vext/ref/fb/ammoconfigdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AmmoConfigData](/vext/ref/fb/ammoconfigdata) type.

