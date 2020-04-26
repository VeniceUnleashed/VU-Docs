---
title: LandingGearConditionData
---


## Summary
### Constructors
| |
| ----------- |
| **[LandingGearConditionData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "height" >}} | float |
| {{< prop "velocity" >}} | float |
| {{< prop "angle" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LandingGearConditionData](/vext/ref/fb/landinggearconditiondata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LandingGearConditionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LandingGearConditionData {#constructor-0}
> **LandingGearConditionData**()

Creates a new [LandingGearConditionData](/vext/ref/fb/landinggearconditiondata) frostbite structure.

## Properties
### {{% prop-heading "height" %}}
> **float**

### {{% prop-heading "velocity" %}}
> **float**

### {{% prop-heading "angle" %}}
> **float**

## Methods
### Clone
> **Clone**(): [LandingGearConditionData](/vext/ref/fb/landinggearconditiondata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LandingGearConditionData](/vext/ref/fb/landinggearconditiondata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LandingGearConditionData](/vext/ref/fb/landinggearconditiondata) type.

