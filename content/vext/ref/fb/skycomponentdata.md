---
title: SkyComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[SkyComponentData](#constructor-0)**() |
| **[SkyComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SkyComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SkyComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SkyComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SkyComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "cloudLayerSunColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "cloudLayer2Color" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "cloudLayer1Color" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "skyGradientTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "sunSize" >}} | float |
| {{< prop "brightnessScale" >}} | float |
| {{< prop "sunScale" >}} | float |
| {{< prop "panoramicUVMaxX" >}} | float |
| {{< prop "panoramicUVMinY" >}} | float |
| {{< prop "panoramicUVMaxY" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "panoramicUVMinX" >}} | float |
| {{< prop "panoramicTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "panoramicAlphaTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "panoramicTileFactor" >}} | float |
| {{< prop "cloudLayerMaskTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "cloudLayer1Altitude" >}} | float |
| {{< prop "cloudLayer1TileFactor" >}} | float |
| {{< prop "cloudLayer1Rotation" >}} | float |
| {{< prop "cloudLayer1Speed" >}} | float |
| {{< prop "cloudLayer1SunLightIntensity" >}} | float |
| {{< prop "panoramicRotation" >}} | float |
| {{< prop "cloudLayer1AmbientLightIntensity" >}} | float |
| {{< prop "cloudLayer1SunLightPower" >}} | float |
| {{< prop "cloudLayer1AlphaMul" >}} | float |
| {{< prop "cloudLayer1Texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "cloudLayer2Altitude" >}} | float |
| {{< prop "cloudLayer2TileFactor" >}} | float |
| {{< prop "cloudLayer2Rotation" >}} | float |
| {{< prop "cloudLayer2Speed" >}} | float |
| {{< prop "cloudLayer2SunLightIntensity" >}} | float |
| {{< prop "cloudLayer2SunLightPower" >}} | float |
| {{< prop "cloudLayer2AmbientLightIntensity" >}} | float |
| {{< prop "staticEnvmapScale" >}} | float |
| {{< prop "cloudLayer2AlphaMul" >}} | float |
| {{< prop "cloudLayer2Texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "staticEnvmapTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "skyVisibilityExponent" >}} | float |
| {{< prop "skyEnvmap8BitTexScale" >}} | float |
| {{< prop "customEnvmapTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "customEnvmapScale" >}} | float |
| {{< prop "customEnvmapAmbient" >}} | float |
| {{< prop "enable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SkyComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SkyComponentData {#constructor-0}

> **SkyComponentData**()

Creates a new [SkyComponentData](/vext/ref/fb/skycomponentdata) frostbite instance.

### SkyComponentData {#constructor-1}

> **SkyComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SkyComponentData](/vext/ref/fb/skycomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SkyComponentData {#constructor-2}

> **SkyComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SkyComponentData](/vext/ref/fb/skycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SkyComponentData](/vext/ref/fb/skycomponentdata). |

### SkyComponentData {#constructor-3}

> **SkyComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SkyComponentData](/vext/ref/fb/skycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SkyComponentData](/vext/ref/fb/skycomponentdata). |

### SkyComponentData {#constructor-4}

> **SkyComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SkyComponentData](/vext/ref/fb/skycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SkyComponentData](/vext/ref/fb/skycomponentdata). |

### SkyComponentData {#constructor-5}

> **SkyComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SkyComponentData](/vext/ref/fb/skycomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SkyComponentData](/vext/ref/fb/skycomponentdata). |

## Properties

### {{% prop-heading "cloudLayerSunColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "cloudLayer2Color" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "cloudLayer1Color" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "skyGradientTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "sunSize" %}}

> **float**

### {{% prop-heading "brightnessScale" %}}

> **float**

### {{% prop-heading "sunScale" %}}

> **float**

### {{% prop-heading "panoramicUVMaxX" %}}

> **float**

### {{% prop-heading "panoramicUVMinY" %}}

> **float**

### {{% prop-heading "panoramicUVMaxY" %}}

> **float**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "panoramicUVMinX" %}}

> **float**

### {{% prop-heading "panoramicTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "panoramicAlphaTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "panoramicTileFactor" %}}

> **float**

### {{% prop-heading "cloudLayerMaskTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "cloudLayer1Altitude" %}}

> **float**

### {{% prop-heading "cloudLayer1TileFactor" %}}

> **float**

### {{% prop-heading "cloudLayer1Rotation" %}}

> **float**

### {{% prop-heading "cloudLayer1Speed" %}}

> **float**

### {{% prop-heading "cloudLayer1SunLightIntensity" %}}

> **float**

### {{% prop-heading "panoramicRotation" %}}

> **float**

### {{% prop-heading "cloudLayer1AmbientLightIntensity" %}}

> **float**

### {{% prop-heading "cloudLayer1SunLightPower" %}}

> **float**

### {{% prop-heading "cloudLayer1AlphaMul" %}}

> **float**

### {{% prop-heading "cloudLayer1Texture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "cloudLayer2Altitude" %}}

> **float**

### {{% prop-heading "cloudLayer2TileFactor" %}}

> **float**

### {{% prop-heading "cloudLayer2Rotation" %}}

> **float**

### {{% prop-heading "cloudLayer2Speed" %}}

> **float**

### {{% prop-heading "cloudLayer2SunLightIntensity" %}}

> **float**

### {{% prop-heading "cloudLayer2SunLightPower" %}}

> **float**

### {{% prop-heading "cloudLayer2AmbientLightIntensity" %}}

> **float**

### {{% prop-heading "staticEnvmapScale" %}}

> **float**

### {{% prop-heading "cloudLayer2AlphaMul" %}}

> **float**

### {{% prop-heading "cloudLayer2Texture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "staticEnvmapTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "skyVisibilityExponent" %}}

> **float**

### {{% prop-heading "skyEnvmap8BitTexScale" %}}

> **float**

### {{% prop-heading "customEnvmapTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "customEnvmapScale" %}}

> **float**

### {{% prop-heading "customEnvmapAmbient" %}}

> **float**

### {{% prop-heading "enable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SkyComponentData](/vext/ref/fb/skycomponentdata) type.

