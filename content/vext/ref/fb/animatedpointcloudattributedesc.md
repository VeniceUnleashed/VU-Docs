---
title: AnimatedPointCloudAttributeDesc
---

## Summary

### Constructors

|  |
| --- |
| **[AnimatedPointCloudAttributeDesc](#constructor-0)**() |
| **[AnimatedPointCloudAttributeDesc](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "usage" >}} | [PointCloudAttributeUsage](/vext/ref/fb/pointcloudattributeusage) |
| {{< prop "iFrameQuantization" >}} | [PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization) |
| {{< prop "dFrameQuantization" >}} | [PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AnimatedPointCloudAttributeDesc" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AnimatedPointCloudAttributeDesc {#constructor-0}

> **AnimatedPointCloudAttributeDesc**()

Creates a new [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc) frostbite instance.

### AnimatedPointCloudAttributeDesc {#constructor-1}

> **AnimatedPointCloudAttributeDesc**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "usage" %}}

> **[PointCloudAttributeUsage](/vext/ref/fb/pointcloudattributeusage)**

### {{% prop-heading "iFrameQuantization" %}}

> **[PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization)**

### {{% prop-heading "dFrameQuantization" %}}

> **[PointCloudAttributeQuantization](/vext/ref/fb/pointcloudattributequantization)**

## Methods

### Clone {#clone}

> **Clone**(): [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AnimatedPointCloudAttributeDesc](/vext/ref/fb/animatedpointcloudattributedesc) type.

