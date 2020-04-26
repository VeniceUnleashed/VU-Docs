---
title: SkyEffectState
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SkyEffectState](#constructor-0)**() |
| **[SkyEffectState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SkyEffectState](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "cloudLayerSunColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "panoramicTileFactor" >}} | float |
| {{< prop "sunSize" >}} | float |
| {{< prop "skyGradientScale" >}} | float |
| {{< prop "sunScale" >}} | float |
| {{< prop "panoramicUVMinX" >}} | float |
| {{< prop "skyGradientTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "panoramicUVMinY" >}} | float |
| {{< prop "panoramicUVMaxY" >}} | float |
| {{< prop "panoramicUVMaxX" >}} | float |
| {{< prop "panoramicRotation" >}} | float |
| {{< prop "panoramicTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "panoramicAlphaTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "windDirection" >}} | float |
| {{< prop "cloudLayerMaskTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "cloudLayer1" >}} | [SkyCloudLayer](/vext/ref/fb/skycloudlayer) |
| {{< prop "cloudLayer2" >}} | [SkyCloudLayer](/vext/ref/fb/skycloudlayer) |
| {{< prop "staticEnvmapTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "enable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SkyEffectState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SkyEffectState {#constructor-0}

> **SkyEffectState**()

Creates a new [SkyEffectState](/vext/ref/fb/skyeffectstate) frostbite instance.

### SkyEffectState {#constructor-1}

> **SkyEffectState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SkyEffectState](/vext/ref/fb/skyeffectstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SkyEffectState {#constructor-2}

> **SkyEffectState**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SkyEffectState](/vext/ref/fb/skyeffectstate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SkyEffectState](/vext/ref/fb/skyeffectstate). |

## Properties

### {{% prop-heading "cloudLayerSunColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "panoramicTileFactor" %}}

> **float**

### {{% prop-heading "sunSize" %}}

> **float**

### {{% prop-heading "skyGradientScale" %}}

> **float**

### {{% prop-heading "sunScale" %}}

> **float**

### {{% prop-heading "panoramicUVMinX" %}}

> **float**

### {{% prop-heading "skyGradientTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "panoramicUVMinY" %}}

> **float**

### {{% prop-heading "panoramicUVMaxY" %}}

> **float**

### {{% prop-heading "panoramicUVMaxX" %}}

> **float**

### {{% prop-heading "panoramicRotation" %}}

> **float**

### {{% prop-heading "panoramicTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "panoramicAlphaTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "windDirection" %}}

> **float**

### {{% prop-heading "cloudLayerMaskTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "cloudLayer1" %}}

> **[SkyCloudLayer](/vext/ref/fb/skycloudlayer)**

### {{% prop-heading "cloudLayer2" %}}

> **[SkyCloudLayer](/vext/ref/fb/skycloudlayer)**

### {{% prop-heading "staticEnvmapTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "enable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SkyEffectState](/vext/ref/fb/skyeffectstate) type.

