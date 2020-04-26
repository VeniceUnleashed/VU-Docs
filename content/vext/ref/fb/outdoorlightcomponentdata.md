---
title: OutdoorLightComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[OutdoorLightComponentData](#constructor-0)**() |
| **[OutdoorLightComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[OutdoorLightComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[OutdoorLightComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[OutdoorLightComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[OutdoorLightComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "sunColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "cloudShadowSpeed" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "skyColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "groundColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "sunRotationY" >}} | float |
| {{< prop "sunRotationX" >}} | float |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "skyLightAngleFactor" >}} | float |
| {{< prop "sunSpecularScale" >}} | float |
| {{< prop "skyEnvmapShadowScale" >}} | float |
| {{< prop "sunShadowHeightScale" >}} | float |
| {{< prop "cloudShadowCoverage" >}} | float |
| {{< prop "cloudShadowTexture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "translucencyDistortion" >}} | float |
| {{< prop "cloudShadowSize" >}} | float |
| {{< prop "translucencyAmbient" >}} | float |
| {{< prop "cloudShadowExponent" >}} | float |
| {{< prop "translucencyScale" >}} | float |
| {{< prop "translucencyPower" >}} | float |
| {{< prop "enable" >}} | bool |
| {{< prop "cloudShadowEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OutdoorLightComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OutdoorLightComponentData {#constructor-0}

> **OutdoorLightComponentData**()

Creates a new [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata) frostbite instance.

### OutdoorLightComponentData {#constructor-1}

> **OutdoorLightComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### OutdoorLightComponentData {#constructor-2}

> **OutdoorLightComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata). |

### OutdoorLightComponentData {#constructor-3}

> **OutdoorLightComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata). |

### OutdoorLightComponentData {#constructor-4}

> **OutdoorLightComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata). |

### OutdoorLightComponentData {#constructor-5}

> **OutdoorLightComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata). |

## Properties

### {{% prop-heading "sunColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "cloudShadowSpeed" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "skyColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "groundColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "sunRotationY" %}}

> **float**

### {{% prop-heading "sunRotationX" %}}

> **float**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "skyLightAngleFactor" %}}

> **float**

### {{% prop-heading "sunSpecularScale" %}}

> **float**

### {{% prop-heading "skyEnvmapShadowScale" %}}

> **float**

### {{% prop-heading "sunShadowHeightScale" %}}

> **float**

### {{% prop-heading "cloudShadowCoverage" %}}

> **float**

### {{% prop-heading "cloudShadowTexture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "translucencyDistortion" %}}

> **float**

### {{% prop-heading "cloudShadowSize" %}}

> **float**

### {{% prop-heading "translucencyAmbient" %}}

> **float**

### {{% prop-heading "cloudShadowExponent" %}}

> **float**

### {{% prop-heading "translucencyScale" %}}

> **float**

### {{% prop-heading "translucencyPower" %}}

> **float**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "cloudShadowEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OutdoorLightComponentData](/vext/ref/fb/outdoorlightcomponentdata) type.

