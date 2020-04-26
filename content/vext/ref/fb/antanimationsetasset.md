---
title: AntAnimationSetAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[AntAnimationSetAsset](#constructor-0)**() |
| **[AntAnimationSetAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AntAnimationSetAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AntAnimationSetAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "skeletonAsset" >}} | [SkeletonAsset](/vext/ref/fb/skeletonasset) \| nil |
| {{< prop "actorAssetIndex" >}} | int |
| {{< prop "clipAssetIndices" >}} | int[] |
| {{< prop "loopingClipAssetIndices" >}} | int[] |
| {{< prop "sceneOpMatrixAssetIndex" >}} | int |
| {{< prop "useTraj2Ref" >}} | bool |
| {{< prop "allowAnimationCulling" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntAnimationSetAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntAnimationSetAsset {#constructor-0}

> **AntAnimationSetAsset**()

Creates a new [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset) frostbite instance.

### AntAnimationSetAsset {#constructor-1}

> **AntAnimationSetAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AntAnimationSetAsset {#constructor-2}

> **AntAnimationSetAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset). |

### AntAnimationSetAsset {#constructor-3}

> **AntAnimationSetAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset). |

## Properties

### {{% prop-heading "skeletonAsset" %}}

> **[SkeletonAsset](/vext/ref/fb/skeletonasset)** \| **nil**

### {{% prop-heading "actorAssetIndex" %}}

> **int**

### {{% prop-heading "clipAssetIndices" %}}

> **int**[]

### {{% prop-heading "loopingClipAssetIndices" %}}

> **int**[]

### {{% prop-heading "sceneOpMatrixAssetIndex" %}}

> **int**

### {{% prop-heading "useTraj2Ref" %}}

> **bool**

### {{% prop-heading "allowAnimationCulling" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset) type.

