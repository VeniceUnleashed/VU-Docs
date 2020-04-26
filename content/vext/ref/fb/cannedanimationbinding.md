---
title: CannedAnimationBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[CannedAnimationBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "levelIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "scenarioIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "actorIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "partIndex" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "triggerCannedAnimation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "exitCannedAnimation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "externalTime" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "blendValue" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "advanceScenario" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "enteredLoop" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CannedAnimationBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CannedAnimationBinding {#constructor-0}
> **CannedAnimationBinding**()

Creates a new [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) frostbite structure.

## Properties
### {{% prop-heading "levelIndex" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "scenarioIndex" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "actorIndex" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "partIndex" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "triggerCannedAnimation" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "exitCannedAnimation" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "externalTime" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "blendValue" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "advanceScenario" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "enteredLoop" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CannedAnimationBinding](/vext/ref/fb/cannedanimationbinding) type.

