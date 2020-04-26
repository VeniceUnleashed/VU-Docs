---
title: LevelData
---

Inherits from [WorldData](/vext/ref/fb/worlddata)

## Summary

### Constructors

|  |
| --- |
| **[LevelData](#constructor-0)**() |
| **[LevelData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LevelData](#constructor-2)**(other: [WorldData](/vext/ref/fb/worlddata)) |
| **[LevelData](#constructor-3)**(other: [SubWorldData](/vext/ref/fb/subworlddata)) |
| **[LevelData](#constructor-4)**(other: [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint)) |
| **[LevelData](#constructor-5)**(other: [PrefabBlueprint](/vext/ref/fb/prefabblueprint)) |
| **[LevelData](#constructor-6)**(other: [Blueprint](/vext/ref/fb/blueprint)) |
| **[LevelData](#constructor-7)**(other: [EntityBusData](/vext/ref/fb/entitybusdata)) |
| **[LevelData](#constructor-8)**(other: [DataBusData](/vext/ref/fb/databusdata)) |
| **[LevelData](#constructor-9)**(other: [Asset](/vext/ref/fb/asset)) |
| **[LevelData](#constructor-10)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "levelReference" >}} | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) \| nil |
| {{< prop "pathfindingBlobInfo" >}} | [PathfindingBlob](/vext/ref/fb/pathfindingblob) |
| {{< prop "aiSystem" >}} | [GameAISystem](/vext/ref/fb/gameaisystem) \| nil |
| {{< prop "worldSizeXZ" >}} | float |
| {{< prop "levelDescription" >}} | [LevelDescription](/vext/ref/fb/leveldescription) |
| {{< prop "gameConfigurationName" >}} | string |
| {{< prop "emitterSystemAsset" >}} | [EmitterSystemAsset](/vext/ref/fb/emittersystemasset) \| nil |
| {{< prop "emitterExclusionVolumes" >}} | [EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata)[] |
| {{< prop "defaultFOV" >}} | float |
| {{< prop "infantryFOVMultiplier" >}} | float |
| {{< prop "maxEntityBusNetworkCount" >}} | int |
| {{< prop "soundStates" >}} | [SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset) \| nil |
| {{< prop "voiceOverSystem" >}} | [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset) \| nil |
| {{< prop "voiceOverLogic" >}} | [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset)[] |
| {{< prop "maxVehicleHeight" >}} | float |
| {{< prop "animatedSkeletonDatabase" >}} | [AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase) \| nil |
| {{< prop "enlightenShaderDatabase" >}} | [EnlightenShaderDatabaseAsset](/vext/ref/fb/enlightenshaderdatabaseasset) \| nil |
| {{< prop "antProjectAssets" >}} | [AntProjectAsset](/vext/ref/fb/antprojectasset)[] |
| {{< prop "aerialHeightmapData" >}} | string |
| {{< prop "audioObstructionInfo" >}} | [LevelAudioObstructionAsset](/vext/ref/fb/levelaudioobstructionasset) \| nil |
| {{< prop "cameraTransitions" >}} | [CameraTransition](/vext/ref/fb/cameratransition)[] |
| {{< prop "cameraModes" >}} | [CameraModeAsset](/vext/ref/fb/cameramodeasset)[] |
| {{< prop "faceAnimationsWaveMappings" >}} | [FaceAnimationWaveMappings](/vext/ref/fb/faceanimationwavemappings) \| nil |
| {{< prop "hackForceBuild" >}} | [Asset](/vext/ref/fb/asset) \| nil |
| {{< prop "hugeBroadPhase" >}} | bool |
| {{< prop "freeStreamingEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LevelData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LevelData {#constructor-0}

> **LevelData**()

Creates a new [LevelData](/vext/ref/fb/leveldata) frostbite instance.

### LevelData {#constructor-1}

> **LevelData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LevelData](/vext/ref/fb/leveldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LevelData {#constructor-2}

> **LevelData**(other: [WorldData](/vext/ref/fb/worlddata))

Casts an instance of type [WorldData](/vext/ref/fb/worlddata) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WorldData](/vext/ref/fb/worlddata) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

### LevelData {#constructor-3}

> **LevelData**(other: [SubWorldData](/vext/ref/fb/subworlddata))

Casts an instance of type [SubWorldData](/vext/ref/fb/subworlddata) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SubWorldData](/vext/ref/fb/subworlddata) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

### LevelData {#constructor-4}

> **LevelData**(other: [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint))

Casts an instance of type [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialPrefabBlueprint](/vext/ref/fb/spatialprefabblueprint) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

### LevelData {#constructor-5}

> **LevelData**(other: [PrefabBlueprint](/vext/ref/fb/prefabblueprint))

Casts an instance of type [PrefabBlueprint](/vext/ref/fb/prefabblueprint) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PrefabBlueprint](/vext/ref/fb/prefabblueprint) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

### LevelData {#constructor-6}

> **LevelData**(other: [Blueprint](/vext/ref/fb/blueprint))

Casts an instance of type [Blueprint](/vext/ref/fb/blueprint) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Blueprint](/vext/ref/fb/blueprint) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

### LevelData {#constructor-7}

> **LevelData**(other: [EntityBusData](/vext/ref/fb/entitybusdata))

Casts an instance of type [EntityBusData](/vext/ref/fb/entitybusdata) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusData](/vext/ref/fb/entitybusdata) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

### LevelData {#constructor-8}

> **LevelData**(other: [DataBusData](/vext/ref/fb/databusdata))

Casts an instance of type [DataBusData](/vext/ref/fb/databusdata) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataBusData](/vext/ref/fb/databusdata) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

### LevelData {#constructor-9}

> **LevelData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

### LevelData {#constructor-10}

> **LevelData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LevelData](/vext/ref/fb/leveldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LevelData](/vext/ref/fb/leveldata). |

## Properties

### {{% prop-heading "levelReference" %}}

> **[ReferenceObjectData](/vext/ref/fb/referenceobjectdata)** \| **nil**

### {{% prop-heading "pathfindingBlobInfo" %}}

> **[PathfindingBlob](/vext/ref/fb/pathfindingblob)**

### {{% prop-heading "aiSystem" %}}

> **[GameAISystem](/vext/ref/fb/gameaisystem)** \| **nil**

### {{% prop-heading "worldSizeXZ" %}}

> **float**

### {{% prop-heading "levelDescription" %}}

> **[LevelDescription](/vext/ref/fb/leveldescription)**

### {{% prop-heading "gameConfigurationName" %}}

> **string**

### {{% prop-heading "emitterSystemAsset" %}}

> **[EmitterSystemAsset](/vext/ref/fb/emittersystemasset)** \| **nil**

### {{% prop-heading "emitterExclusionVolumes" %}}

> **[EmitterExclusionVolumeData](/vext/ref/fb/emitterexclusionvolumedata)**[]

### {{% prop-heading "defaultFOV" %}}

> **float**

### {{% prop-heading "infantryFOVMultiplier" %}}

> **float**

### {{% prop-heading "maxEntityBusNetworkCount" %}}

> **int**

### {{% prop-heading "soundStates" %}}

> **[SoundStateSettingsAsset](/vext/ref/fb/soundstatesettingsasset)** \| **nil**

### {{% prop-heading "voiceOverSystem" %}}

> **[VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset)** \| **nil**

### {{% prop-heading "voiceOverLogic" %}}

> **[VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset)**[]

### {{% prop-heading "maxVehicleHeight" %}}

> **float**

### {{% prop-heading "animatedSkeletonDatabase" %}}

> **[AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase)** \| **nil**

### {{% prop-heading "enlightenShaderDatabase" %}}

> **[EnlightenShaderDatabaseAsset](/vext/ref/fb/enlightenshaderdatabaseasset)** \| **nil**

### {{% prop-heading "antProjectAssets" %}}

> **[AntProjectAsset](/vext/ref/fb/antprojectasset)**[]

### {{% prop-heading "aerialHeightmapData" %}}

> **string**

### {{% prop-heading "audioObstructionInfo" %}}

> **[LevelAudioObstructionAsset](/vext/ref/fb/levelaudioobstructionasset)** \| **nil**

### {{% prop-heading "cameraTransitions" %}}

> **[CameraTransition](/vext/ref/fb/cameratransition)**[]

### {{% prop-heading "cameraModes" %}}

> **[CameraModeAsset](/vext/ref/fb/cameramodeasset)**[]

### {{% prop-heading "faceAnimationsWaveMappings" %}}

> **[FaceAnimationWaveMappings](/vext/ref/fb/faceanimationwavemappings)** \| **nil**

### {{% prop-heading "hackForceBuild" %}}

> **[Asset](/vext/ref/fb/asset)** \| **nil**

### {{% prop-heading "hugeBroadPhase" %}}

> **bool**

### {{% prop-heading "freeStreamingEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LevelData](/vext/ref/fb/leveldata) type.

