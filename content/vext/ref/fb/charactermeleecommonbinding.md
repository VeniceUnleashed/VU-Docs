---
title: CharacterMeleeCommonBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[CharacterMeleeCommonBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "meleeDistance" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "meleeAngle" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "meleeDefenceTime" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "meleeSequenceTime" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "meleeAborted" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "closeToTarget" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "meleeType" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterMeleeCommonBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterMeleeCommonBinding {#constructor-0}
> **CharacterMeleeCommonBinding**()

Creates a new [CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding) frostbite structure.

## Properties
### {{% prop-heading "meleeDistance" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "meleeAngle" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "meleeDefenceTime" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "meleeSequenceTime" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "meleeAborted" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "closeToTarget" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "meleeType" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding) type.

