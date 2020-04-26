---
title: MinimapData
---


## Summary
### Constructors
| |
| ----------- |
| **[MinimapData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "cameraPosition" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "size" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "overlayColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "anchorPosVertical" >}} | float |
| {{< prop "anchorPosHorizontal" >}} | float |
| {{< prop "cameraLookDistance" >}} | float |
| {{< prop "cameraDistance" >}} | float |
| {{< prop "cameraFov" >}} | float |
| {{< prop "overlayAlpha" >}} | float |
| {{< prop "cameraRotation" >}} | float |
| {{< prop "startZoomLevel" >}} | int |
| {{< prop "innerZoomFactor" >}} | int |
| {{< prop "maxZoomLevels" >}} | int |
| {{< prop "centerOnCombatArea" >}} | bool |
| {{< prop "rotationFromPlayer" >}} | bool |
| {{< prop "positionFromPlayer" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MinimapData](/vext/ref/fb/minimapdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MinimapData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MinimapData {#constructor-0}
> **MinimapData**()

Creates a new [MinimapData](/vext/ref/fb/minimapdata) frostbite structure.

## Properties
### {{% prop-heading "position" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "cameraPosition" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "size" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "overlayColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "anchorPosVertical" %}}
> **float**

### {{% prop-heading "anchorPosHorizontal" %}}
> **float**

### {{% prop-heading "cameraLookDistance" %}}
> **float**

### {{% prop-heading "cameraDistance" %}}
> **float**

### {{% prop-heading "cameraFov" %}}
> **float**

### {{% prop-heading "overlayAlpha" %}}
> **float**

### {{% prop-heading "cameraRotation" %}}
> **float**

### {{% prop-heading "startZoomLevel" %}}
> **int**

### {{% prop-heading "innerZoomFactor" %}}
> **int**

### {{% prop-heading "maxZoomLevels" %}}
> **int**

### {{% prop-heading "centerOnCombatArea" %}}
> **bool**

### {{% prop-heading "rotationFromPlayer" %}}
> **bool**

### {{% prop-heading "positionFromPlayer" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [MinimapData](/vext/ref/fb/minimapdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MinimapData](/vext/ref/fb/minimapdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MinimapData](/vext/ref/fb/minimapdata) type.

