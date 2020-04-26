---
title: HealingSphereData
---


## Summary
### Constructors
| |
| ----------- |
| **[HealingSphereData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "radius" >}} | float |
| {{< prop "healthIncSpeed" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [HealingSphereData](/vext/ref/fb/healingspheredata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HealingSphereData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HealingSphereData {#constructor-0}
> **HealingSphereData**()

Creates a new [HealingSphereData](/vext/ref/fb/healingspheredata) frostbite structure.

## Properties
### {{% prop-heading "radius" %}}
> **float**

### {{% prop-heading "healthIncSpeed" %}}
> **float**

## Methods
### Clone
> **Clone**(): [HealingSphereData](/vext/ref/fb/healingspheredata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[HealingSphereData](/vext/ref/fb/healingspheredata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HealingSphereData](/vext/ref/fb/healingspheredata) type.

