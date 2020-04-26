---
title: CharacterPoseConstraintsData
---


## Summary
### Constructors
| |
| ----------- |
| **[CharacterPoseConstraintsData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "standPose" >}} | bool |
| {{< prop "crouchPose" >}} | bool |
| {{< prop "pronePose" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CharacterPoseConstraintsData](/vext/ref/fb/characterposeconstraintsdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterPoseConstraintsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterPoseConstraintsData {#constructor-0}
> **CharacterPoseConstraintsData**()

Creates a new [CharacterPoseConstraintsData](/vext/ref/fb/characterposeconstraintsdata) frostbite structure.

## Properties
### {{% prop-heading "standPose" %}}
> **bool**

### {{% prop-heading "crouchPose" %}}
> **bool**

### {{% prop-heading "pronePose" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [CharacterPoseConstraintsData](/vext/ref/fb/characterposeconstraintsdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CharacterPoseConstraintsData](/vext/ref/fb/characterposeconstraintsdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterPoseConstraintsData](/vext/ref/fb/characterposeconstraintsdata) type.

