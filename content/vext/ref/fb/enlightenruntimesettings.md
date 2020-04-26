---
title: EnlightenRuntimeSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[EnlightenRuntimeSettings](#constructor-0)**() |
| **[EnlightenRuntimeSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EnlightenRuntimeSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[EnlightenRuntimeSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "albedoDefaultColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "localLightForceRadius" >}} | float |
| {{< prop "drawDebugSystemDependenciesEnable" >}} | int |
| {{< prop "temporalCoherenceThreshold" >}} | float |
| {{< prop "skyBoxScale" >}} | float |
| {{< prop "minSystemUpdateCount" >}} | int |
| {{< prop "jobCount" >}} | int |
| {{< prop "drawDebugSystemBoundingBoxEnable" >}} | int |
| {{< prop "lightProbeMaxUpdateSolveCount" >}} | int |
| {{< prop "drawDebugLightProbeSize" >}} | float |
| {{< prop "compensateSunShadowHeightScale" >}} | bool |
| {{< prop "saveRadiosityTexturesEnable" >}} | bool |
| {{< prop "shadowsEnable" >}} | bool |
| {{< prop "lightMapsEnable" >}} | bool |
| {{< prop "localLightsEnable" >}} | bool |
| {{< prop "localLightCullingEnable" >}} | bool |
| {{< prop "localLightCustumFalloff" >}} | bool |
| {{< prop "lightProbeForceUpdate" >}} | bool |
| {{< prop "forceDynamic" >}} | bool |
| {{< prop "drawDebugSystemsEnable" >}} | bool |
| {{< prop "lightProbeEnable" >}} | bool |
| {{< prop "lightProbeJobsEnable" >}} | bool |
| {{< prop "drawDebugLightProbes" >}} | bool |
| {{< prop "drawDebugLightProbeOcclusion" >}} | bool |
| {{< prop "drawDebugLightProbeStats" >}} | bool |
| {{< prop "drawDebugLightProbeBoundingBoxes" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "drawSolveTaskPerformance" >}} | bool |
| {{< prop "drawDebugColoringEnable" >}} | bool |
| {{< prop "drawDebugTextures" >}} | bool |
| {{< prop "drawDebugBackFaces" >}} | bool |
| {{< prop "drawDebugTargetMeshes" >}} | bool |
| {{< prop "drawWarningsEnable" >}} | bool |
| {{< prop "albedoForceUpdateEnable" >}} | bool |
| {{< prop "albedoForceColorEnable" >}} | bool |
| {{< prop "drawDebugEntities" >}} | bool |
| {{< prop "terrainMapEnable" >}} | bool |
| {{< prop "emissiveEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EnlightenRuntimeSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EnlightenRuntimeSettings {#constructor-0}

> **EnlightenRuntimeSettings**()

Creates a new [EnlightenRuntimeSettings](/vext/ref/fb/enlightenruntimesettings) frostbite instance.

### EnlightenRuntimeSettings {#constructor-1}

> **EnlightenRuntimeSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EnlightenRuntimeSettings](/vext/ref/fb/enlightenruntimesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EnlightenRuntimeSettings {#constructor-2}

> **EnlightenRuntimeSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [EnlightenRuntimeSettings](/vext/ref/fb/enlightenruntimesettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [EnlightenRuntimeSettings](/vext/ref/fb/enlightenruntimesettings). |

### EnlightenRuntimeSettings {#constructor-3}

> **EnlightenRuntimeSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EnlightenRuntimeSettings](/vext/ref/fb/enlightenruntimesettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EnlightenRuntimeSettings](/vext/ref/fb/enlightenruntimesettings). |

## Properties

### {{% prop-heading "albedoDefaultColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "localLightForceRadius" %}}

> **float**

### {{% prop-heading "drawDebugSystemDependenciesEnable" %}}

> **int**

### {{% prop-heading "temporalCoherenceThreshold" %}}

> **float**

### {{% prop-heading "skyBoxScale" %}}

> **float**

### {{% prop-heading "minSystemUpdateCount" %}}

> **int**

### {{% prop-heading "jobCount" %}}

> **int**

### {{% prop-heading "drawDebugSystemBoundingBoxEnable" %}}

> **int**

### {{% prop-heading "lightProbeMaxUpdateSolveCount" %}}

> **int**

### {{% prop-heading "drawDebugLightProbeSize" %}}

> **float**

### {{% prop-heading "compensateSunShadowHeightScale" %}}

> **bool**

### {{% prop-heading "saveRadiosityTexturesEnable" %}}

> **bool**

### {{% prop-heading "shadowsEnable" %}}

> **bool**

### {{% prop-heading "lightMapsEnable" %}}

> **bool**

### {{% prop-heading "localLightsEnable" %}}

> **bool**

### {{% prop-heading "localLightCullingEnable" %}}

> **bool**

### {{% prop-heading "localLightCustumFalloff" %}}

> **bool**

### {{% prop-heading "lightProbeForceUpdate" %}}

> **bool**

### {{% prop-heading "forceDynamic" %}}

> **bool**

### {{% prop-heading "drawDebugSystemsEnable" %}}

> **bool**

### {{% prop-heading "lightProbeEnable" %}}

> **bool**

### {{% prop-heading "lightProbeJobsEnable" %}}

> **bool**

### {{% prop-heading "drawDebugLightProbes" %}}

> **bool**

### {{% prop-heading "drawDebugLightProbeOcclusion" %}}

> **bool**

### {{% prop-heading "drawDebugLightProbeStats" %}}

> **bool**

### {{% prop-heading "drawDebugLightProbeBoundingBoxes" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "drawSolveTaskPerformance" %}}

> **bool**

### {{% prop-heading "drawDebugColoringEnable" %}}

> **bool**

### {{% prop-heading "drawDebugTextures" %}}

> **bool**

### {{% prop-heading "drawDebugBackFaces" %}}

> **bool**

### {{% prop-heading "drawDebugTargetMeshes" %}}

> **bool**

### {{% prop-heading "drawWarningsEnable" %}}

> **bool**

### {{% prop-heading "albedoForceUpdateEnable" %}}

> **bool**

### {{% prop-heading "albedoForceColorEnable" %}}

> **bool**

### {{% prop-heading "drawDebugEntities" %}}

> **bool**

### {{% prop-heading "terrainMapEnable" %}}

> **bool**

### {{% prop-heading "emissiveEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EnlightenRuntimeSettings](/vext/ref/fb/enlightenruntimesettings) type.

