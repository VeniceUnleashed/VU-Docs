---
title: SoldierAnimatedCameraData
---


## Summary
### Constructors
| |
| ----------- |
| **[SoldierAnimatedCameraData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "cameraTransitionTime" >}} | float |
| {{< prop "enableFeature" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierAnimatedCameraData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierAnimatedCameraData {#constructor-0}
> **SoldierAnimatedCameraData**()

Creates a new [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata) frostbite structure.

## Properties
### {{% prop-heading "cameraTransitionTime" %}}
> **float**

### {{% prop-heading "enableFeature" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierAnimatedCameraData](/vext/ref/fb/soldieranimatedcameradata) type.

