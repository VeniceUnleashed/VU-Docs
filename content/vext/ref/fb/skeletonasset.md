---
title: SkeletonAsset
---

Inherits from [BaseSkeletonAsset](/vext/ref/fb/baseskeletonasset)

## Summary

### Constructors

|  |
| --- |
| **[SkeletonAsset](#constructor-0)**() |
| **[SkeletonAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SkeletonAsset](#constructor-2)**(other: [BaseSkeletonAsset](/vext/ref/fb/baseskeletonasset)) |
| **[SkeletonAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SkeletonAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "boneNames" >}} | string[] |
| {{< prop "hierarchy" >}} | int[] |
| {{< prop "localPose" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |
| {{< prop "modelPose" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform)[] |
| {{< prop "weaponBoneName" >}} | string |
| {{< prop "headBoneName" >}} | string |
| {{< prop "hipBoneName" >}} | string |
| {{< prop "cameraBoneName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SkeletonAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SkeletonAsset {#constructor-0}

> **SkeletonAsset**()

Creates a new [SkeletonAsset](/vext/ref/fb/skeletonasset) frostbite instance.

### SkeletonAsset {#constructor-1}

> **SkeletonAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SkeletonAsset](/vext/ref/fb/skeletonasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SkeletonAsset {#constructor-2}

> **SkeletonAsset**(other: [BaseSkeletonAsset](/vext/ref/fb/baseskeletonasset))

Casts an instance of type [BaseSkeletonAsset](/vext/ref/fb/baseskeletonasset) to [SkeletonAsset](/vext/ref/fb/skeletonasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [BaseSkeletonAsset](/vext/ref/fb/baseskeletonasset) | The instance to cast to [SkeletonAsset](/vext/ref/fb/skeletonasset). |

### SkeletonAsset {#constructor-3}

> **SkeletonAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SkeletonAsset](/vext/ref/fb/skeletonasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SkeletonAsset](/vext/ref/fb/skeletonasset). |

### SkeletonAsset {#constructor-4}

> **SkeletonAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SkeletonAsset](/vext/ref/fb/skeletonasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SkeletonAsset](/vext/ref/fb/skeletonasset). |

## Properties

### {{% prop-heading "boneNames" %}}

> **string**[]

### {{% prop-heading "hierarchy" %}}

> **int**[]

### {{% prop-heading "localPose" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

### {{% prop-heading "modelPose" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**[]

### {{% prop-heading "weaponBoneName" %}}

> **string**

### {{% prop-heading "headBoneName" %}}

> **string**

### {{% prop-heading "hipBoneName" %}}

> **string**

### {{% prop-heading "cameraBoneName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SkeletonAsset](/vext/ref/fb/skeletonasset) type.

