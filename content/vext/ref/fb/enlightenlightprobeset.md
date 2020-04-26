---
title: EnlightenLightProbeSet
---


## Summary
### Constructors
| |
| ----------- |
| **[EnlightenLightProbeSet](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "boundingBox" >}} | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |
| {{< prop "sizeX" >}} | int |
| {{< prop "sizeZ" >}} | int |
| {{< prop "sizeY" >}} | int |
| {{< prop "systemId" >}} | int |
| {{< prop "blendDistance" >}} | float |
| {{< prop "priority" >}} | int |
| {{< prop "positions" >}} | [Vec3](/vext/ref/shared/class/vec3)[] |
| {{< prop "validIndices" >}} | int[] |
| {{< prop "inputSystems" >}} | int[] |
| {{< prop "cache" >}} | [PrecomputeCache](/vext/ref/fb/precomputecache) |
| {{< prop "staticProbeSet" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EnlightenLightProbeSet" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EnlightenLightProbeSet {#constructor-0}
> **EnlightenLightProbeSet**()

Creates a new [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset) frostbite structure.

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "boundingBox" %}}
> **[AxisAlignedBox](/vext/ref/shared/class/axisalignedbox)**

### {{% prop-heading "sizeX" %}}
> **int**

### {{% prop-heading "sizeZ" %}}
> **int**

### {{% prop-heading "sizeY" %}}
> **int**

### {{% prop-heading "systemId" %}}
> **int**

### {{% prop-heading "blendDistance" %}}
> **float**

### {{% prop-heading "priority" %}}
> **int**

### {{% prop-heading "positions" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**[]

### {{% prop-heading "validIndices" %}}
> **int**[]

### {{% prop-heading "inputSystems" %}}
> **int**[]

### {{% prop-heading "cache" %}}
> **[PrecomputeCache](/vext/ref/fb/precomputecache)**

### {{% prop-heading "staticProbeSet" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EnlightenLightProbeSet](/vext/ref/fb/enlightenlightprobeset) type.

