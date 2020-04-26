---
title: SpecialMovesBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[SpecialMovesBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "triggerHighVault" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "triggerUpVault" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "triggerLowVault" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "triggerSlideIntoProne" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "triggerSpecialAnimation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "specialAnimationIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "objectHeight" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "objectDistance" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "startObjectDistanceTimer" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vaultObjectPositionX" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vaultObjectPositionZ" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "cancelAnimation" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SpecialMovesBinding](/vext/ref/fb/specialmovesbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpecialMovesBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpecialMovesBinding {#constructor-0}
> **SpecialMovesBinding**()

Creates a new [SpecialMovesBinding](/vext/ref/fb/specialmovesbinding) frostbite structure.

## Properties
### {{% prop-heading "triggerHighVault" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "triggerUpVault" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "triggerLowVault" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "triggerSlideIntoProne" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "triggerSpecialAnimation" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "specialAnimationIndex" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "objectHeight" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "objectDistance" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "startObjectDistanceTimer" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vaultObjectPositionX" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vaultObjectPositionZ" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "cancelAnimation" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [SpecialMovesBinding](/vext/ref/fb/specialmovesbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SpecialMovesBinding](/vext/ref/fb/specialmovesbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpecialMovesBinding](/vext/ref/fb/specialmovesbinding) type.

