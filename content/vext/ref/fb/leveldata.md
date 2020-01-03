---
title: LevelData
---
### Base Classes

[WorldData](/vext/ref/fb/worlddata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                          | Description                                                                                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| LevelData()                                                          | Create a new instance of this container type.                                                             |
| LevelData(LevelData other)                                           | Create a reference copy of an instance of the same type.                                                  |
| LevelData([WorldData](/vext/ref/fb/worlddata/) other)                              | Upcast an instance of type [WorldData](/vext/ref/fb/worlddata/) to [LevelData](/vext/ref/fb/leveldata/).                              |
| LevelData([SubWorldData](/vext/ref/fb/subworlddata/) other)                        | Upcast an instance of type [SubWorldData](/vext/ref/fb/subworlddata/) to [LevelData](/vext/ref/fb/leveldata/).                        |
| LevelData([SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) other)    | Upcast an instance of type [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint/) to [LevelData](/vext/ref/fb/leveldata/).    |
| LevelData([PrefabBlueprint](/vext/ref/fb/prefabblueprint/) other)                  | Upcast an instance of type [PrefabBlueprint](/vext/ref/fb/prefabblueprint/) to [LevelData](/vext/ref/fb/leveldata/).                  |
| LevelData([Blueprint](/vext/ref/fb/blueprint/) other)                              | Upcast an instance of type [Blueprint](/vext/ref/fb/blueprint/) to [LevelData](/vext/ref/fb/leveldata/).                              |
| LevelData([EntityBusData](/vext/ref/fb/entitybusdata/) other)                      | Upcast an instance of type [EntityBusData](/vext/ref/fb/entitybusdata/) to [LevelData](/vext/ref/fb/leveldata/).                      |
| LevelData([DataBusData](/vext/ref/fb/databusdata/) other)                          | Upcast an instance of type [DataBusData](/vext/ref/fb/databusdata/) to [LevelData](/vext/ref/fb/leveldata/).                          |
| LevelData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [LevelData](/vext/ref/fb/leveldata/).                                      |
| LevelData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelData](/vext/ref/fb/leveldata/). |

## Properties

| Name                       | Type                                                         | Description |
| -------------------------- | ------------------------------------------------------------ | ----------- |
| levelReference             | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/)                   |             |
| pathfindingBlobInfo        | [PathfindingBlob](/vext/ref/fb/pathfindingblob/)                           |             |
| aiSystem                   | [GameAISystem](/vext/ref/fb/gameaisystem/)                                 |             |
| worldSizeXZ                | number                                                       |             |
| levelDescription           | [LevelDescription](/vext/ref/fb/leveldescription/)                         |             |
| gameConfigurationName      | string                                                       |             |
| emitterSystemAsset         | [EmitterSystemAsset](/vext/ref/fb/emittersystemasset/)                     |             |
| emitterExclusionVolumes    | [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata/)\[\] |             |
| defaultFOV                 | number                                                       |             |
| infantryFOVMultiplier      | number                                                       |             |
| maxEntityBusNetworkCount   | number                                                       |             |
| soundStates                | [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset/)           |             |
| voiceOverSystem            | [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset/)                 |             |
| voiceOverLogic             | [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset/)\[\]               |             |
| maxVehicleHeight           | number                                                       |             |
| animatedSkeletonDatabase   | [AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase/)         |             |
| enlightenShaderDatabase    | [EnlightenShaderDatabaseAsset](/vext/ref/fb/enlightenshaderdatabaseasset/) |             |
| antProjectAssets           | [AntProjectAsset](/vext/ref/fb/antprojectasset/)\[\]                       |             |
| aerialHeightmapData        | string                                                       |             |
| audioObstructionInfo       | [LevelAudioObstructionAsset](/vext/ref/fb/levelaudioobstructionasset/)     |             |
| cameraTransitions          | [CameraTransition](/vext/ref/fb/cameratransition/)\[\]                     |             |
| cameraModes                | [CameraModeAsset](/vext/ref/fb/cameramodeasset/)\[\]                       |             |
| faceAnimationsWaveMappings | [FaceAnimationWaveMappings](/vext/ref/fb/faceanimationwavemappings/)       |             |
| hackForceBuild             | [Asset](/vext/ref/fb/asset/)                                               |             |
| hugeBroadPhase             | bool                                                         |             |
| freeStreamingEnable        | bool                                                         |             |

## Methods

| Type                   | Name            | Parameters                                     |
| ---------------------- | --------------- | ---------------------------------------------- |
| [LevelData](/vext/ref/fb/leveldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelData](/vext/ref/fb/leveldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
