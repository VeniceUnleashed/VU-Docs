---
title: GroundHeightData
---


## Summary
### Constructors
| |
| ----------- |
| **[GroundHeightData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "heightSpan" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "worldSize" >}} | float |
| {{< prop "data" >}} | int[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GroundHeightData](/vext/ref/fb/groundheightdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GroundHeightData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GroundHeightData {#constructor-0}
> **GroundHeightData**()

Creates a new [GroundHeightData](/vext/ref/fb/groundheightdata) frostbite structure.

## Properties
### {{% prop-heading "heightSpan" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "worldSize" %}}
> **float**

### {{% prop-heading "data" %}}
> **int**[]

## Methods
### Clone
> **Clone**(): [GroundHeightData](/vext/ref/fb/groundheightdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GroundHeightData](/vext/ref/fb/groundheightdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GroundHeightData](/vext/ref/fb/groundheightdata) type.

