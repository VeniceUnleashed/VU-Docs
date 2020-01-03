---
title: EnlightenRuntimeSettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenRuntimeSettings()                                                          | Create a new instance of this container type.                                                                                           |
| EnlightenRuntimeSettings(EnlightenRuntimeSettings other)                            | Create a reference copy of an instance of the same type.                                                                                |
| EnlightenRuntimeSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [EnlightenRuntimeSettings](EnlightenRuntimeSettings).                    |
| EnlightenRuntimeSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenRuntimeSettings](EnlightenRuntimeSettings). |

## Properties

| Name                              | Type                              | Description |
| --------------------------------- | --------------------------------- | ----------- |
| albedoDefaultColor                | [Vec3](/vext/ref/shared/class/vec3) |             |
| localLightForceRadius             | number                            |             |
| drawDebugSystemDependenciesEnable | number                            |             |
| temporalCoherenceThreshold        | number                            |             |
| skyBoxScale                       | number                            |             |
| minSystemUpdateCount              | number                            |             |
| jobCount                          | number                            |             |
| drawDebugSystemBoundingBoxEnable  | number                            |             |
| lightProbeMaxUpdateSolveCount     | number                            |             |
| drawDebugLightProbeSize           | number                            |             |
| compensateSunShadowHeightScale    | bool                              |             |
| saveRadiosityTexturesEnable       | bool                              |             |
| shadowsEnable                     | bool                              |             |
| lightMapsEnable                   | bool                              |             |
| localLightsEnable                 | bool                              |             |
| localLightCullingEnable           | bool                              |             |
| localLightCustumFalloff           | bool                              |             |
| lightProbeForceUpdate             | bool                              |             |
| forceDynamic                      | bool                              |             |
| drawDebugSystemsEnable            | bool                              |             |
| lightProbeEnable                  | bool                              |             |
| lightProbeJobsEnable              | bool                              |             |
| drawDebugLightProbes              | bool                              |             |
| drawDebugLightProbeOcclusion      | bool                              |             |
| drawDebugLightProbeStats          | bool                              |             |
| drawDebugLightProbeBoundingBoxes  | bool                              |             |
| enable                            | bool                              |             |
| drawSolveTaskPerformance          | bool                              |             |
| drawDebugColoringEnable           | bool                              |             |
| drawDebugTextures                 | bool                              |             |
| drawDebugBackFaces                | bool                              |             |
| drawDebugTargetMeshes             | bool                              |             |
| drawWarningsEnable                | bool                              |             |
| albedoForceUpdateEnable           | bool                              |             |
| albedoForceColorEnable            | bool                              |             |
| drawDebugEntities                 | bool                              |             |
| terrainMapEnable                  | bool                              |             |
| emissiveEnable                    | bool                              |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenRuntimeSettings](EnlightenRuntimeSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenRuntimeSettings](EnlightenRuntimeSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
