---
title: ClimbLadderBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[ClimbLadderBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "climbLadderPhase" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "climbLadderConnectPhase" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "climbLadderTransitionPhase" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "onLadder" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "ladderTopTransition" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "fallHigh" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ClimbLadderBinding](/vext/ref/fb/climbladderbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ClimbLadderBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ClimbLadderBinding {#constructor-0}
> **ClimbLadderBinding**()

Creates a new [ClimbLadderBinding](/vext/ref/fb/climbladderbinding) frostbite structure.

## Properties
### {{% prop-heading "climbLadderPhase" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "climbLadderConnectPhase" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "climbLadderTransitionPhase" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "onLadder" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "ladderTopTransition" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "fallHigh" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [ClimbLadderBinding](/vext/ref/fb/climbladderbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ClimbLadderBinding](/vext/ref/fb/climbladderbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ClimbLadderBinding](/vext/ref/fb/climbladderbinding) type.

