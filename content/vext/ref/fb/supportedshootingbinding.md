---
title: SupportedShootingBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[SupportedShootingBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "supported" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "supportedPos" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "forwardVector" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "yaw" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "pitch" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "distToObject" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "heightOfObject" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "undeploying" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "animatedCamera" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SupportedShootingBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SupportedShootingBinding {#constructor-0}
> **SupportedShootingBinding**()

Creates a new [SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding) frostbite structure.

## Properties
### {{% prop-heading "supported" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "supportedPos" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "forwardVector" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "yaw" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "pitch" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "distToObject" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "heightOfObject" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "undeploying" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "animatedCamera" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SupportedShootingBinding](/vext/ref/fb/supportedshootingbinding) type.

