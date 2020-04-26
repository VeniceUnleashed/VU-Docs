---
title: AILocoBaseTaskData
---


## Summary
### Constructors
| |
| ----------- |
| **[AILocoBaseTaskData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "poseChangeMovingTowards" >}} | [AntPoseEnum](/vext/ref/fb/antposeenum) |
| {{< prop "attentionChangeMovingTowards" >}} | [AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum) |
| {{< prop "speedChangeMovingTowards" >}} | [AntSpeedLevel](/vext/ref/fb/antspeedlevel) |
| {{< prop "poseChange" >}} | [AntPoseEnum](/vext/ref/fb/antposeenum) |
| {{< prop "attentionStateChange" >}} | [AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum) |
| {{< prop "speedLevelChange" >}} | [AntSpeedLevel](/vext/ref/fb/antspeedlevel) |
| {{< prop "radius" >}} | float |
| {{< prop "isScripted" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AILocoBaseTaskData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AILocoBaseTaskData {#constructor-0}
> **AILocoBaseTaskData**()

Creates a new [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata) frostbite structure.

## Properties
### {{% prop-heading "poseChangeMovingTowards" %}}
> **[AntPoseEnum](/vext/ref/fb/antposeenum)**

### {{% prop-heading "attentionChangeMovingTowards" %}}
> **[AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum)**

### {{% prop-heading "speedChangeMovingTowards" %}}
> **[AntSpeedLevel](/vext/ref/fb/antspeedlevel)**

### {{% prop-heading "poseChange" %}}
> **[AntPoseEnum](/vext/ref/fb/antposeenum)**

### {{% prop-heading "attentionStateChange" %}}
> **[AntAttentionStateEnum](/vext/ref/fb/antattentionstateenum)**

### {{% prop-heading "speedLevelChange" %}}
> **[AntSpeedLevel](/vext/ref/fb/antspeedlevel)**

### {{% prop-heading "radius" %}}
> **float**

### {{% prop-heading "isScripted" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AILocoBaseTaskData](/vext/ref/fb/ailocobasetaskdata) type.

