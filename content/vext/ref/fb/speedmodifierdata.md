---
title: SpeedModifierData
---


## Summary
### Constructors
| |
| ----------- |
| **[SpeedModifierData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "forwardConstant" >}} | float |
| {{< prop "backwardConstant" >}} | float |
| {{< prop "leftConstant" >}} | float |
| {{< prop "rightConstant" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SpeedModifierData](/vext/ref/fb/speedmodifierdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpeedModifierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpeedModifierData {#constructor-0}
> **SpeedModifierData**()

Creates a new [SpeedModifierData](/vext/ref/fb/speedmodifierdata) frostbite structure.

## Properties
### {{% prop-heading "forwardConstant" %}}
> **float**

### {{% prop-heading "backwardConstant" %}}
> **float**

### {{% prop-heading "leftConstant" %}}
> **float**

### {{% prop-heading "rightConstant" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SpeedModifierData](/vext/ref/fb/speedmodifierdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SpeedModifierData](/vext/ref/fb/speedmodifierdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpeedModifierData](/vext/ref/fb/speedmodifierdata) type.

