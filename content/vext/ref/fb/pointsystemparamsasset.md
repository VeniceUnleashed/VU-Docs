---
title: PointSystemParamsAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[PointSystemParamsAsset](#constructor-0)**() |
| **[PointSystemParamsAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PointSystemParamsAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PointSystemParamsAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "multiKillTimeLimit" >}} | float |
| {{< prop "dnfTimeout" >}} | float |
| {{< prop "killStreakX" >}} | int |
| {{< prop "nemesisKillX" >}} | int |
| {{< prop "freefallHeight" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PointSystemParamsAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PointSystemParamsAsset {#constructor-0}

> **PointSystemParamsAsset**()

Creates a new [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset) frostbite instance.

### PointSystemParamsAsset {#constructor-1}

> **PointSystemParamsAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PointSystemParamsAsset {#constructor-2}

> **PointSystemParamsAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset). |

### PointSystemParamsAsset {#constructor-3}

> **PointSystemParamsAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset). |

## Properties

### {{% prop-heading "multiKillTimeLimit" %}}

> **float**

### {{% prop-heading "dnfTimeout" %}}

> **float**

### {{% prop-heading "killStreakX" %}}

> **int**

### {{% prop-heading "nemesisKillX" %}}

> **int**

### {{% prop-heading "freefallHeight" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset) type.

