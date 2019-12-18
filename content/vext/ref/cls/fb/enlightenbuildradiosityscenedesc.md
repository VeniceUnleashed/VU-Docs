---
title: EnlightenBuildRadiositySceneDesc (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenBuildRadiositySceneDesc()                                                          | Create a new instance of this container type.                                                                                                           |
| EnlightenBuildRadiositySceneDesc(EnlightenBuildRadiositySceneDesc other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| EnlightenBuildRadiositySceneDesc([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EnlightenBuildRadiositySceneDesc](EnlightenBuildRadiositySceneDesc). |

## Properties

| Name                  | Type                                                 | Description |
| --------------------- | ---------------------------------------------------- | ----------- |
| lightProbeSets        | [EnlightenLightProbeSet](EnlightenLightProbeSet)\[\] |             |
| instances             | [EnlightenInputInstance](EnlightenInputInstance)\[\] |             |
| staticLightProbes     | [Vec3](/vext/ref/cls/shr/Vec3)\[\]                |             |
| terrain               | string                                               |             |
| samplesPerCluster     | number                                               |             |
| systemInfluenceRadius | number                                               |             |
| systemSize            | number                                               |             |
| irBudget              | number                                               |             |
| clusterSize           | number                                               |             |
| saveDebugData         | bool                                                 |             |
| distributedBuild      | bool                                                 |             |
| cacheEnable           | bool                                                 |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenBuildRadiositySceneDesc](EnlightenBuildRadiositySceneDesc) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EnlightenBuildRadiositySceneDesc](EnlightenBuildRadiositySceneDesc) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
