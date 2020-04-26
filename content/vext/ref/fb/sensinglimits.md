---
title: SensingLimits
---


## Summary
### Constructors
| |
| ----------- |
| **[SensingLimits](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "hearingDistance" >}} | float |
| {{< prop "hearingCutoff" >}} | float |
| {{< prop "viewAngle" >}} | float |
| {{< prop "viewDistance" >}} | float |
| {{< prop "peripheralViewAngle" >}} | float |
| {{< prop "peripheralViewDistance" >}} | float |
| {{< prop "peripheralMovementCutoff" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SensingLimits](/vext/ref/fb/sensinglimits) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SensingLimits" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SensingLimits {#constructor-0}
> **SensingLimits**()

Creates a new [SensingLimits](/vext/ref/fb/sensinglimits) frostbite structure.

## Properties
### {{% prop-heading "hearingDistance" %}}
> **float**

### {{% prop-heading "hearingCutoff" %}}
> **float**

### {{% prop-heading "viewAngle" %}}
> **float**

### {{% prop-heading "viewDistance" %}}
> **float**

### {{% prop-heading "peripheralViewAngle" %}}
> **float**

### {{% prop-heading "peripheralViewDistance" %}}
> **float**

### {{% prop-heading "peripheralMovementCutoff" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SensingLimits](/vext/ref/fb/sensinglimits)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SensingLimits](/vext/ref/fb/sensinglimits)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SensingLimits](/vext/ref/fb/sensinglimits) type.

