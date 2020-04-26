---
title: SniperLensScopeFilterData
---

Inherits from [ScopeFilterData](/vext/ref/fb/scopefilterdata)

## Summary

### Constructors

|  |
| --- |
| **[SniperLensScopeFilterData](#constructor-0)**() |
| **[SniperLensScopeFilterData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SniperLensScopeFilterData](#constructor-2)**(other: [ScopeFilterData](/vext/ref/fb/scopefilterdata)) |
| **[SniperLensScopeFilterData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SniperLensScopeFilterData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "chromaticAberrationStrengths" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "blurCenter" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "chromaticAberrationColor1" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "chromaticAberrationColor2" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "radialBlendDistanceCoefficients" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "chromaticAberrationDisplacement1" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "chromaticAberrationDisplacement2" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "blurScale" >}} | float |
| {{< prop "colorTintData" >}} | [ColorTintData](/vext/ref/fb/colortintdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SniperLensScopeFilterData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SniperLensScopeFilterData {#constructor-0}

> **SniperLensScopeFilterData**()

Creates a new [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata) frostbite instance.

### SniperLensScopeFilterData {#constructor-1}

> **SniperLensScopeFilterData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SniperLensScopeFilterData {#constructor-2}

> **SniperLensScopeFilterData**(other: [ScopeFilterData](/vext/ref/fb/scopefilterdata))

Casts an instance of type [ScopeFilterData](/vext/ref/fb/scopefilterdata) to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ScopeFilterData](/vext/ref/fb/scopefilterdata) | The instance to cast to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata). |

### SniperLensScopeFilterData {#constructor-3}

> **SniperLensScopeFilterData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata). |

### SniperLensScopeFilterData {#constructor-4}

> **SniperLensScopeFilterData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata). |

## Properties

### {{% prop-heading "chromaticAberrationStrengths" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "blurCenter" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "chromaticAberrationColor1" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "chromaticAberrationColor2" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "radialBlendDistanceCoefficients" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "chromaticAberrationDisplacement1" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "chromaticAberrationDisplacement2" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "blurScale" %}}

> **float**

### {{% prop-heading "colorTintData" %}}

> **[ColorTintData](/vext/ref/fb/colortintdata)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata) type.

