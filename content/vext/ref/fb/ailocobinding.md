---
title: AILocoBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[AILocoBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "locoTarget" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "attentionState" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "endPoseEnum" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "currentPoseEnum" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "enterExitPoseEnum" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "runStyle" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "targetWaypointPosition" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "targetSpeedLevel" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "enableProceduralHeadAim" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AILocoBinding](/vext/ref/fb/ailocobinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AILocoBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AILocoBinding {#constructor-0}
> **AILocoBinding**()

Creates a new [AILocoBinding](/vext/ref/fb/ailocobinding) frostbite structure.

## Properties
### {{% prop-heading "locoTarget" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "attentionState" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "endPoseEnum" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "currentPoseEnum" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "enterExitPoseEnum" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "runStyle" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "targetWaypointPosition" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "targetSpeedLevel" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "enableProceduralHeadAim" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [AILocoBinding](/vext/ref/fb/ailocobinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AILocoBinding](/vext/ref/fb/ailocobinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AILocoBinding](/vext/ref/fb/ailocobinding) type.

