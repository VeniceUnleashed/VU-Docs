---
title: SoldierParachuteBinding
---


## Summary
### Constructors
| |
| ----------- |
| **[SoldierParachuteBinding](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "enabled" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "steerLeftRight" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "accelerateBrake" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "pitch" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "roll" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierParachuteBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierParachuteBinding {#constructor-0}
> **SoldierParachuteBinding**()

Creates a new [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding) frostbite structure.

## Properties
### {{% prop-heading "enabled" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "steerLeftRight" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "accelerateBrake" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "pitch" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "roll" %}}
> **[AntRef](/vext/ref/fb/antref)**

## Methods
### Clone
> **Clone**(): [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding) type.

