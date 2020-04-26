---
title: SupportedShootingProximityChecking
---


## Summary
### Constructors
| |
| ----------- |
| **[SupportedShootingProximityChecking](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "rayAboveGunHeightOffset" >}} | float |
| {{< prop "rayAboveLength" >}} | float |
| {{< prop "rayBelowGunHeightOffset" >}} | float |
| {{< prop "rayBelowLength" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SupportedShootingProximityChecking" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SupportedShootingProximityChecking {#constructor-0}
> **SupportedShootingProximityChecking**()

Creates a new [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) frostbite structure.

## Properties
### {{% prop-heading "rayAboveGunHeightOffset" %}}
> **float**

### {{% prop-heading "rayAboveLength" %}}
> **float**

### {{% prop-heading "rayBelowGunHeightOffset" %}}
> **float**

### {{% prop-heading "rayBelowLength" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) type.

