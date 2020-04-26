---
title: AnimatedPointCloudAttributeDesc
---


## Summary
### Constructors
| |
| ----------- |
| **[AnimatedPointCloudAttributeDesc](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "usage" >}} | [PointCloudAttributeUsage](/vext/ref/fb/pointcloudattributeusage) |
| {{< prop "iFrameQuantization" >}} | [PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization) |
| {{< prop "dFrameQuantization" >}} | [PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AnimatedPointCloudAttributeDesc" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AnimatedPointCloudAttributeDesc {#constructor-0}
> **AnimatedPointCloudAttributeDesc**()

Creates a new [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc) frostbite structure.

## Properties
### {{% prop-heading "usage" %}}
> **[PointCloudAttributeUsage](/vext/ref/fb/pointcloudattributeusage)**

### {{% prop-heading "iFrameQuantization" %}}
> **[PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization)**

### {{% prop-heading "dFrameQuantization" %}}
> **[PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization)**

## Methods
### Clone
> **Clone**(): [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc) type.

