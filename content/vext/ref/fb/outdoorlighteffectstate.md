---
title: OutdoorLightEffectState
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[OutdoorLightEffectState](#constructor-0)**() |
| **[OutdoorLightEffectState](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[OutdoorLightEffectState](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "skyColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "groundColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "sunColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "cloudShadowSpeed" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "sunRotationX" >}} | float |
| {{< prop "sunRotationY" >}} | float |
| {{< prop "skyLightAngleFactor" >}} | float |
| {{< prop "sunShadowHeightScale" >}} | float |
| {{< prop "cloudShadowTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "cloudShadowSize" >}} | float |
| {{< prop "cloudShadowExponent" >}} | float |
| {{< prop "cloudShadowCoverage" >}} | float |
| {{< prop "cloudShadowEnable" >}} | bool |
| {{< prop "enable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OutdoorLightEffectState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OutdoorLightEffectState {#constructor-0}

> **OutdoorLightEffectState**()

Creates a new [OutdoorLightEffectState](/vext/ref/fb/outdoorlighteffectstate) frostbite instance.

### OutdoorLightEffectState {#constructor-1}

> **OutdoorLightEffectState**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OutdoorLightEffectState](/vext/ref/fb/outdoorlighteffectstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### OutdoorLightEffectState {#constructor-2}

> **OutdoorLightEffectState**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [OutdoorLightEffectState](/vext/ref/fb/outdoorlighteffectstate). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [OutdoorLightEffectState](/vext/ref/fb/outdoorlighteffectstate). |

## Properties

### {{% prop-heading "skyColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "groundColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "sunColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "cloudShadowSpeed" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "sunRotationX" %}}

> **float**

### {{% prop-heading "sunRotationY" %}}

> **float**

### {{% prop-heading "skyLightAngleFactor" %}}

> **float**

### {{% prop-heading "sunShadowHeightScale" %}}

> **float**

### {{% prop-heading "cloudShadowTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "cloudShadowSize" %}}

> **float**

### {{% prop-heading "cloudShadowExponent" %}}

> **float**

### {{% prop-heading "cloudShadowCoverage" %}}

> **float**

### {{% prop-heading "cloudShadowEnable" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OutdoorLightEffectState](/vext/ref/fb/outdoorlighteffectstate) type.

