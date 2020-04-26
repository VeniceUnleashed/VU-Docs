---
title: HeightfieldTreeAsset
---

Inherits from [RasterTreeAsset](/vext/ref/fb/rastertreeasset)

## Summary

### Constructors

|  |
| --- |
| **[HeightfieldTreeAsset](#constructor-0)**() |
| **[HeightfieldTreeAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[HeightfieldTreeAsset](#constructor-2)**(other: [RasterTreeAsset](/vext/ref/fb/rastertreeasset)) |
| **[HeightfieldTreeAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minHeightWidth" >}} | float |
| {{< prop "minHeightSamplesPerSide" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HeightfieldTreeAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HeightfieldTreeAsset {#constructor-0}

> **HeightfieldTreeAsset**()

Creates a new [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset) frostbite instance.

### HeightfieldTreeAsset {#constructor-1}

> **HeightfieldTreeAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### HeightfieldTreeAsset {#constructor-2}

> **HeightfieldTreeAsset**(other: [RasterTreeAsset](/vext/ref/fb/rastertreeasset))

Casts an instance of type [RasterTreeAsset](/vext/ref/fb/rastertreeasset) to [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [RasterTreeAsset](/vext/ref/fb/rastertreeasset) | The instance to cast to [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset). |

### HeightfieldTreeAsset {#constructor-3}

> **HeightfieldTreeAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset). |

## Properties

### {{% prop-heading "minHeightWidth" %}}

> **float**

### {{% prop-heading "minHeightSamplesPerSide" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HeightfieldTreeAsset](/vext/ref/fb/heightfieldtreeasset) type.

