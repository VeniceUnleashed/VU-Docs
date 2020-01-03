---
title: LevelData
---
### Base Classes

[WorldData](WorldData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| LevelData()                                                          | Create a new instance of this container type.                                                             |
| LevelData(LevelData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| LevelData([WorldData](WorldData) other)                              | Upcast an instance of type [WorldData](WorldData) to [LevelData](LevelData).                              |
| LevelData([SubWorldData](SubWorldData) other)                        | Upcast an instance of type [SubWorldData](SubWorldData) to [LevelData](LevelData).                        |
| LevelData([SpatialPrefabBlueprint](SpatialPrefabBlueprint) other)    | Upcast an instance of type [SpatialPrefabBlueprint](SpatialPrefabBlueprint) to [LevelData](LevelData).    |
| LevelData([PrefabBlueprint](PrefabBlueprint) other)                  | Upcast an instance of type [PrefabBlueprint](PrefabBlueprint) to [LevelData](LevelData).                  |
| LevelData([Blueprint](Blueprint) other)                              | Upcast an instance of type [Blueprint](Blueprint) to [LevelData](LevelData).                              |
| LevelData([EntityBusData](EntityBusData) other)                      | Upcast an instance of type [EntityBusData](EntityBusData) to [LevelData](LevelData).                      |
| LevelData([DataBusData](DataBusData) other)                          | Upcast an instance of type [DataBusData](DataBusData) to [LevelData](LevelData).                          |
| LevelData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LevelData](LevelData).                                      |
| LevelData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelData](LevelData). |

## Properties

| Name                       | Type                                                         | Description |
| -------------------------- | ------------------------------------------------------------ | ----------- |
| levelReference             | [ReferenceObjectData](ReferenceObjectData)                   |             |
| pathfindingBlobInfo        | [PathfindingBlob](PathfindingBlob)                           |             |
| aiSystem                   | [GameAISystem](GameAISystem)                                 |             |
| worldSizeXZ                | number                                                       |             |
| levelDescription           | [LevelDescription](LevelDescription)                         |             |
| gameConfigurationName      | string                                                       |             |
| emitterSystemAsset         | [EmitterSystemAsset](EmitterSystemAsset)                     |             |
| emitterExclusionVolumes    | [EmitterExclusionVolumeData](EmitterExclusionVolumeData)\[\] |             |
| defaultFOV                 | number                                                       |             |
| infantryFOVMultiplier      | number                                                       |             |
| maxEntityBusNetworkCount   | number                                                       |             |
| soundStates                | [SoundStateSettingsAsset](SoundStateSettingsAsset)           |             |
| voiceOverSystem            | [VoiceOverSystemAsset](VoiceOverSystemAsset)                 |             |
| voiceOverLogic             | [VoiceOverLogicAsset](VoiceOverLogicAsset)\[\]               |             |
| maxVehicleHeight           | number                                                       |             |
| animatedSkeletonDatabase   | [AnimatedSkeletonDatabase](AnimatedSkeletonDatabase)         |             |
| enlightenShaderDatabase    | [EnlightenShaderDatabaseAsset](EnlightenShaderDatabaseAsset) |             |
| antProjectAssets           | [AntProjectAsset](AntProjectAsset)\[\]                       |             |
| aerialHeightmapData        | string                                                       |             |
| audioObstructionInfo       | [LevelAudioObstructionAsset](LevelAudioObstructionAsset)     |             |
| cameraTransitions          | [CameraTransition](CameraTransition)\[\]                     |             |
| cameraModes                | [CameraModeAsset](CameraModeAsset)\[\]                       |             |
| faceAnimationsWaveMappings | [FaceAnimationWaveMappings](FaceAnimationWaveMappings)       |             |
| hackForceBuild             | [Asset](Asset)                                               |             |
| hugeBroadPhase             | bool                                                         |             |
| freeStreamingEnable        | bool                                                         |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [LevelData](LevelData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelData](LevelData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
