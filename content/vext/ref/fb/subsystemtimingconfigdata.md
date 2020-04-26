---
title: SubsystemTimingConfigData
---


## Summary
### Constructors
| |
| ----------- |
| **[SubsystemTimingConfigData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sensing" >}} | float |
| {{< prop "evaluation" >}} | float |
| {{< prop "goalUpdates" >}} | float |
| {{< prop "intentUpdates" >}} | float |
| {{< prop "behaviourSelection" >}} | float |
| {{< prop "behaviourExecution" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SubsystemTimingConfigData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SubsystemTimingConfigData {#constructor-0}
> **SubsystemTimingConfigData**()

Creates a new [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata) frostbite structure.

## Properties
### {{% prop-heading "sensing" %}}
> **float**

### {{% prop-heading "evaluation" %}}
> **float**

### {{% prop-heading "goalUpdates" %}}
> **float**

### {{% prop-heading "intentUpdates" %}}
> **float**

### {{% prop-heading "behaviourSelection" %}}
> **float**

### {{% prop-heading "behaviourExecution" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SubsystemTimingConfigData](/vext/ref/fb/subsystemtimingconfigdata) type.

