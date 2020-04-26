---
title: MinimapCameraOffsetData
---


## Summary
### Constructors
| |
| ----------- |
| **[MinimapCameraOffsetData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "cameraFov" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MinimapCameraOffsetData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MinimapCameraOffsetData {#constructor-0}
> **MinimapCameraOffsetData**()

Creates a new [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata) frostbite structure.

## Properties
### {{% prop-heading "position" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "cameraFov" %}}
> **float**

## Methods
### Clone
> **Clone**(): [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MinimapCameraOffsetData](/vext/ref/fb/minimapcameraoffsetdata) type.

