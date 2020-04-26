---
title: EmitterTemplateData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[EmitterTemplateData](#constructor-0)**() |
| **[EmitterTemplateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EmitterTemplateData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pointLightIntensity" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "pointLightPivot" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "pointLightColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "maxCount" >}} | int |
| {{< prop "name" >}} | string |
| {{< prop "timeScale" >}} | float |
| {{< prop "lifetimeFrameCount" >}} | int |
| {{< prop "lifetime" >}} | float |
| {{< prop "rootProcessor" >}} | [ProcessorData](/vext/ref/fb/processordata) \| nil |
| {{< prop "visibleAfterDistance" >}} | float |
| {{< prop "zOcclusionLookup" >}} | float[] |
| {{< prop "emittableType" >}} | [EmittableType](/vext/ref/fb/emittabletype) |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "distanceScaleNearValue" >}} | float |
| {{< prop "pointLightRadius" >}} | float |
| {{< prop "vertexPixelLightingBlendFactor" >}} | float |
| {{< prop "globalLocalNormalBlendFactor" >}} | float |
| {{< prop "softParticlesFadeDistanceMultiplier" >}} | float |
| {{< prop "lightWrapAroundFactor" >}} | float |
| {{< prop "lightMultiplier" >}} | float |
| {{< prop "distanceScaleFarValue" >}} | float |
| {{< prop "pointLightRandomIntensityMin" >}} | float |
| {{< prop "meshCullingDistance" >}} | float |
| {{< prop "pointLightRandomIntensityMax" >}} | float |
| {{< prop "maxSpawnDistance" >}} | float |
| {{< prop "minScreenArea" >}} | float |
| {{< prop "distanceScaleLength" >}} | float |
| {{< prop "pointLightMaxClamp" >}} | float |
| {{< prop "particleCullingFactor" >}} | float |
| {{< prop "pointLightMinClamp" >}} | float |
| {{< prop "followSpawnSource" >}} | bool |
| {{< prop "repeatParticleSpawning" >}} | bool |
| {{< prop "emissive" >}} | bool |
| {{< prop "exclusionVolumeCullEnable" >}} | bool |
| {{< prop "transparencySunShadowEnable" >}} | bool |
| {{< prop "forceFullRes" >}} | bool |
| {{< prop "localSpace" >}} | bool |
| {{< prop "opaque" >}} | bool |
| {{< prop "actAsPointLight" >}} | bool |
| {{< prop "killParticlesWithEmitter" >}} | bool |
| {{< prop "forceNiceSorting" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EmitterTemplateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EmitterTemplateData {#constructor-0}

> **EmitterTemplateData**()

Creates a new [EmitterTemplateData](/vext/ref/fb/emittertemplatedata) frostbite instance.

### EmitterTemplateData {#constructor-1}

> **EmitterTemplateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EmitterTemplateData](/vext/ref/fb/emittertemplatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EmitterTemplateData {#constructor-2}

> **EmitterTemplateData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EmitterTemplateData](/vext/ref/fb/emittertemplatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EmitterTemplateData](/vext/ref/fb/emittertemplatedata). |

## Properties

### {{% prop-heading "pointLightIntensity" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "pointLightPivot" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "pointLightColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "maxCount" %}}

> **int**

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "timeScale" %}}

> **float**

### {{% prop-heading "lifetimeFrameCount" %}}

> **int**

### {{% prop-heading "lifetime" %}}

> **float**

### {{% prop-heading "rootProcessor" %}}

> **[ProcessorData](/vext/ref/fb/processordata)** \| **nil**

### {{% prop-heading "visibleAfterDistance" %}}

> **float**

### {{% prop-heading "zOcclusionLookup" %}}

> **float**[]

### {{% prop-heading "emittableType" %}}

> **[EmittableType](/vext/ref/fb/emittabletype)**

### {{% prop-heading "mesh" %}}

> **[MeshAsset](/vext/ref/fb/meshasset)** \| **nil**

### {{% prop-heading "distanceScaleNearValue" %}}

> **float**

### {{% prop-heading "pointLightRadius" %}}

> **float**

### {{% prop-heading "vertexPixelLightingBlendFactor" %}}

> **float**

### {{% prop-heading "globalLocalNormalBlendFactor" %}}

> **float**

### {{% prop-heading "softParticlesFadeDistanceMultiplier" %}}

> **float**

### {{% prop-heading "lightWrapAroundFactor" %}}

> **float**

### {{% prop-heading "lightMultiplier" %}}

> **float**

### {{% prop-heading "distanceScaleFarValue" %}}

> **float**

### {{% prop-heading "pointLightRandomIntensityMin" %}}

> **float**

### {{% prop-heading "meshCullingDistance" %}}

> **float**

### {{% prop-heading "pointLightRandomIntensityMax" %}}

> **float**

### {{% prop-heading "maxSpawnDistance" %}}

> **float**

### {{% prop-heading "minScreenArea" %}}

> **float**

### {{% prop-heading "distanceScaleLength" %}}

> **float**

### {{% prop-heading "pointLightMaxClamp" %}}

> **float**

### {{% prop-heading "particleCullingFactor" %}}

> **float**

### {{% prop-heading "pointLightMinClamp" %}}

> **float**

### {{% prop-heading "followSpawnSource" %}}

> **bool**

### {{% prop-heading "repeatParticleSpawning" %}}

> **bool**

### {{% prop-heading "emissive" %}}

> **bool**

### {{% prop-heading "exclusionVolumeCullEnable" %}}

> **bool**

### {{% prop-heading "transparencySunShadowEnable" %}}

> **bool**

### {{% prop-heading "forceFullRes" %}}

> **bool**

### {{% prop-heading "localSpace" %}}

> **bool**

### {{% prop-heading "opaque" %}}

> **bool**

### {{% prop-heading "actAsPointLight" %}}

> **bool**

### {{% prop-heading "killParticlesWithEmitter" %}}

> **bool**

### {{% prop-heading "forceNiceSorting" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EmitterTemplateData](/vext/ref/fb/emittertemplatedata) type.

