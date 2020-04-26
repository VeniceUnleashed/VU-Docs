---
title: HealerData
---


## Summary
### Constructors
| |
| ----------- |
| **[HealerData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "radius" >}} | float |
| {{< prop "health" >}} | float |
| {{< prop "healingTime" >}} | float |
| {{< prop "pickUpDelay" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [HealerData](/vext/ref/fb/healerdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HealerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HealerData {#constructor-0}
> **HealerData**()

Creates a new [HealerData](/vext/ref/fb/healerdata) frostbite structure.

## Properties
### {{% prop-heading "radius" %}}
> **float**

### {{% prop-heading "health" %}}
> **float**

### {{% prop-heading "healingTime" %}}
> **float**

### {{% prop-heading "pickUpDelay" %}}
> **float**

## Methods
### Clone
> **Clone**(): [HealerData](/vext/ref/fb/healerdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[HealerData](/vext/ref/fb/healerdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HealerData](/vext/ref/fb/healerdata) type.

