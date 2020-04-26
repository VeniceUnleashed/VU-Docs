---
title: VisionBoxSettings
---


## Summary
### Constructors
| |
| ----------- |
| **[VisionBoxSettings](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "decreaseXz" >}} | float |
| {{< prop "lowerTop" >}} | float |
| {{< prop "raiseBottom" >}} | float |
| {{< prop "raiseBottomHuman" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [VisionBoxSettings](/vext/ref/fb/visionboxsettings) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VisionBoxSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VisionBoxSettings {#constructor-0}
> **VisionBoxSettings**()

Creates a new [VisionBoxSettings](/vext/ref/fb/visionboxsettings) frostbite structure.

## Properties
### {{% prop-heading "decreaseXz" %}}
> **float**

### {{% prop-heading "lowerTop" %}}
> **float**

### {{% prop-heading "raiseBottom" %}}
> **float**

### {{% prop-heading "raiseBottomHuman" %}}
> **float**

## Methods
### Clone
> **Clone**(): [VisionBoxSettings](/vext/ref/fb/visionboxsettings)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[VisionBoxSettings](/vext/ref/fb/visionboxsettings)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VisionBoxSettings](/vext/ref/fb/visionboxsettings) type.

