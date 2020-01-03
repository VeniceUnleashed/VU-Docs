---
title: GameRenderSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| GameRenderSettings()                                                          | Create a new instance of this container type.                                                                               |
| GameRenderSettings(GameRenderSettings other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| GameRenderSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameRenderSettings](/vext/ref/fb/gamerendersettings/). |

## Properties

| Name                                  | Type   | Description |
| ------------------------------------- | ------ | ----------- |
| stereoCrosshairDampingFactor          | number |             |
| inactiveSkipFrameCount                | number |             |
| forceOrthoViewSize                    | number |             |
| stereoCrosshairRadius                 | number |             |
| stereoCrosshairMaxHitDepth            | number |             |
| forceBlurAmount                       | number |             |
| drawFpsMethod                         | number |             |
| forceFov                              | number |             |
| fovMultiplier                         | number |             |
| staticModelPartOcclusionMaxScreenArea | number |             |
| staticModelCullJobCount               | number |             |
| edgeModelLodScale                     | number |             |
| edgeModelScreenAreaScale              | number |             |
| xenonRingBufferSize                   | number |             |
| splitScreenTestViewCount              | number |             |
| xenonPresentImmediateThreshold        | number |             |
| xenonGammaRampType                    | number |             |
| ps3VSyncMethod                        | number |             |
| ps3VideoGamma                         | number |             |
| ps3FrameMainBufferSize                | number |             |
| ps3FrameLocalBufferSize               | number |             |
| viewDistance                          | number |             |
| cameraCutMaxFrameTranslation          | number |             |
| nearPlane                             | number |             |
| forceWorldFadeAmount                  | number |             |
| edgeModelMaxVisibleInstanceCount      | number |             |
| edgeModelForceLod                     | number |             |
| edgeModelViewDistance                 | number |             |
| ps3LinearFrameCmdBufEnable            | bool   |             |
| xenonRes1280x704Enable                | bool   |             |
| perfOverlayEnable                     | bool   |             |
| gcmHudEnable                          | bool   |             |
| movieVSyncEnable                      | bool   |             |
| ps3Res1280x704Enable                  | bool   |             |
| initialClearEnable                    | bool   |             |
| gpuProfilerEnable                     | bool   |             |
| ps3CellMemoryTexturesEnable           | bool   |             |
| xenonBufferTwoFramesEnable            | bool   |             |
| drawFpsHistogram                      | bool   |             |
| fullscreen                            | bool   |             |
| perfOverlayLatestFrameTimeEnable      | bool   |             |
| jobEnable                             | bool   |             |
| perfOverlayVisible                    | bool   |             |
| emittersEnable                        | bool   |             |
| edgeModelsEnable                      | bool   |             |
| edgeModelCastShadowsEnable            | bool   |             |
| edgeModelDepthBiasEnable              | bool   |             |
| edgeModelShadowDepthBiasEnable        | bool   |             |
| vSyncFlashTestEnable                  | bool   |             |
| entityRenderEnable                    | bool   |             |
| edgeModelSpuInstancingEnable          | bool   |             |
| edgeModelUseMainLodEnable             | bool   |             |
| debugRenderServiceEnable              | bool   |             |
| edgeModelUseLodBox                    | bool   |             |
| debugRendererEnable                   | bool   |             |
| forceVSyncEnable                      | bool   |             |
| edgeModelCullEnable                   | bool   |             |
| edgeModelFrustumCullEnable            | bool   |             |
| edgeModelOcclusionCullEnable          | bool   |             |
| edgeModelAdditionalCullEnable         | bool   |             |
| edgeModelDrawBoxes                    | bool   |             |
| edgeModelDrawStats                    | bool   |             |
| staticModelEnable                     | bool   |             |
| staticModelMeshesEnable               | bool   |             |
| staticModelZPassEnable                | bool   |             |
| staticModelPartCullEnable             | bool   |             |
| staticModelPartFrustumCullEnable      | bool   |             |
| staticModelPartOcclusionCullEnable    | bool   |             |
| staticModelPartShadowCullEnable       | bool   |             |
| staticModelDrawBoxes                  | bool   |             |
| staticModelDrawStats                  | bool   |             |
| drawScreenInfo                        | bool   |             |
| forceOrthoViewEnable                  | bool   |             |
| staticModelCullSpuJobEnable           | bool   |             |
| lockView                              | bool   |             |
| resetLockedView                       | bool   |             |
| drawInfo                              | bool   |             |
| fadeEnable                            | bool   |             |
| fadeWaitingEnable                     | bool   |             |
| drawFps                               | bool   |             |
| destructionVolumeDrawEnable           | bool   |             |
| blurEnable                            | bool   |             |
| buildJobSyncEnable                    | bool   |             |
| forceSquareOrthoView                  | bool   |             |
| enable                                | bool   |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [GameRenderSettings](/vext/ref/fb/gamerendersettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameRenderSettings](/vext/ref/fb/gamerendersettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
