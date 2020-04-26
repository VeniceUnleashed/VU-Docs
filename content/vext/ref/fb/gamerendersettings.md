---
title: GameRenderSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[GameRenderSettings](#constructor-0)**() |
| **[GameRenderSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[GameRenderSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "stereoCrosshairDampingFactor" >}} | float |
| {{< prop "inactiveSkipFrameCount" >}} | int |
| {{< prop "forceOrthoViewSize" >}} | float |
| {{< prop "stereoCrosshairRadius" >}} | float |
| {{< prop "stereoCrosshairMaxHitDepth" >}} | float |
| {{< prop "forceBlurAmount" >}} | float |
| {{< prop "drawFpsMethod" >}} | int |
| {{< prop "forceFov" >}} | float |
| {{< prop "fovMultiplier" >}} | float |
| {{< prop "staticModelPartOcclusionMaxScreenArea" >}} | float |
| {{< prop "staticModelCullJobCount" >}} | int |
| {{< prop "edgeModelLodScale" >}} | float |
| {{< prop "edgeModelScreenAreaScale" >}} | float |
| {{< prop "xenonRingBufferSize" >}} | int |
| {{< prop "splitScreenTestViewCount" >}} | int |
| {{< prop "xenonPresentImmediateThreshold" >}} | int |
| {{< prop "xenonGammaRampType" >}} | int |
| {{< prop "ps3VSyncMethod" >}} | int |
| {{< prop "ps3VideoGamma" >}} | float |
| {{< prop "ps3FrameMainBufferSize" >}} | int |
| {{< prop "ps3FrameLocalBufferSize" >}} | int |
| {{< prop "viewDistance" >}} | float |
| {{< prop "cameraCutMaxFrameTranslation" >}} | float |
| {{< prop "nearPlane" >}} | float |
| {{< prop "forceWorldFadeAmount" >}} | float |
| {{< prop "edgeModelMaxVisibleInstanceCount" >}} | int |
| {{< prop "edgeModelForceLod" >}} | int |
| {{< prop "edgeModelViewDistance" >}} | float |
| {{< prop "ps3LinearFrameCmdBufEnable" >}} | bool |
| {{< prop "xenonRes1280x704Enable" >}} | bool |
| {{< prop "perfOverlayEnable" >}} | bool |
| {{< prop "gcmHudEnable" >}} | bool |
| {{< prop "movieVSyncEnable" >}} | bool |
| {{< prop "ps3Res1280x704Enable" >}} | bool |
| {{< prop "initialClearEnable" >}} | bool |
| {{< prop "gpuProfilerEnable" >}} | bool |
| {{< prop "ps3CellMemoryTexturesEnable" >}} | bool |
| {{< prop "xenonBufferTwoFramesEnable" >}} | bool |
| {{< prop "drawFpsHistogram" >}} | bool |
| {{< prop "fullscreen" >}} | bool |
| {{< prop "perfOverlayLatestFrameTimeEnable" >}} | bool |
| {{< prop "jobEnable" >}} | bool |
| {{< prop "perfOverlayVisible" >}} | bool |
| {{< prop "emittersEnable" >}} | bool |
| {{< prop "edgeModelsEnable" >}} | bool |
| {{< prop "edgeModelCastShadowsEnable" >}} | bool |
| {{< prop "edgeModelDepthBiasEnable" >}} | bool |
| {{< prop "edgeModelShadowDepthBiasEnable" >}} | bool |
| {{< prop "vSyncFlashTestEnable" >}} | bool |
| {{< prop "entityRenderEnable" >}} | bool |
| {{< prop "edgeModelSpuInstancingEnable" >}} | bool |
| {{< prop "edgeModelUseMainLodEnable" >}} | bool |
| {{< prop "debugRenderServiceEnable" >}} | bool |
| {{< prop "edgeModelUseLodBox" >}} | bool |
| {{< prop "debugRendererEnable" >}} | bool |
| {{< prop "forceVSyncEnable" >}} | bool |
| {{< prop "edgeModelCullEnable" >}} | bool |
| {{< prop "edgeModelFrustumCullEnable" >}} | bool |
| {{< prop "edgeModelOcclusionCullEnable" >}} | bool |
| {{< prop "edgeModelAdditionalCullEnable" >}} | bool |
| {{< prop "edgeModelDrawBoxes" >}} | bool |
| {{< prop "edgeModelDrawStats" >}} | bool |
| {{< prop "staticModelEnable" >}} | bool |
| {{< prop "staticModelMeshesEnable" >}} | bool |
| {{< prop "staticModelZPassEnable" >}} | bool |
| {{< prop "staticModelPartCullEnable" >}} | bool |
| {{< prop "staticModelPartFrustumCullEnable" >}} | bool |
| {{< prop "staticModelPartOcclusionCullEnable" >}} | bool |
| {{< prop "staticModelPartShadowCullEnable" >}} | bool |
| {{< prop "staticModelDrawBoxes" >}} | bool |
| {{< prop "staticModelDrawStats" >}} | bool |
| {{< prop "drawScreenInfo" >}} | bool |
| {{< prop "forceOrthoViewEnable" >}} | bool |
| {{< prop "staticModelCullSpuJobEnable" >}} | bool |
| {{< prop "lockView" >}} | bool |
| {{< prop "resetLockedView" >}} | bool |
| {{< prop "drawInfo" >}} | bool |
| {{< prop "fadeEnable" >}} | bool |
| {{< prop "fadeWaitingEnable" >}} | bool |
| {{< prop "drawFps" >}} | bool |
| {{< prop "destructionVolumeDrawEnable" >}} | bool |
| {{< prop "blurEnable" >}} | bool |
| {{< prop "buildJobSyncEnable" >}} | bool |
| {{< prop "forceSquareOrthoView" >}} | bool |
| {{< prop "enable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameRenderSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameRenderSettings {#constructor-0}
> **GameRenderSettings**()

Creates a new [GameRenderSettings](/vext/ref/fb/gamerendersettings) frostbite instance.

### GameRenderSettings {#constructor-1}
> **GameRenderSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [GameRenderSettings](/vext/ref/fb/gamerendersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### GameRenderSettings {#constructor-2}
> **GameRenderSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameRenderSettings](/vext/ref/fb/gamerendersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [GameRenderSettings](/vext/ref/fb/gamerendersettings). |

## Properties
### {{% prop-heading "stereoCrosshairDampingFactor" %}}
> **float**

### {{% prop-heading "inactiveSkipFrameCount" %}}
> **int**

### {{% prop-heading "forceOrthoViewSize" %}}
> **float**

### {{% prop-heading "stereoCrosshairRadius" %}}
> **float**

### {{% prop-heading "stereoCrosshairMaxHitDepth" %}}
> **float**

### {{% prop-heading "forceBlurAmount" %}}
> **float**

### {{% prop-heading "drawFpsMethod" %}}
> **int**

### {{% prop-heading "forceFov" %}}
> **float**

### {{% prop-heading "fovMultiplier" %}}
> **float**

### {{% prop-heading "staticModelPartOcclusionMaxScreenArea" %}}
> **float**

### {{% prop-heading "staticModelCullJobCount" %}}
> **int**

### {{% prop-heading "edgeModelLodScale" %}}
> **float**

### {{% prop-heading "edgeModelScreenAreaScale" %}}
> **float**

### {{% prop-heading "xenonRingBufferSize" %}}
> **int**

### {{% prop-heading "splitScreenTestViewCount" %}}
> **int**

### {{% prop-heading "xenonPresentImmediateThreshold" %}}
> **int**

### {{% prop-heading "xenonGammaRampType" %}}
> **int**

### {{% prop-heading "ps3VSyncMethod" %}}
> **int**

### {{% prop-heading "ps3VideoGamma" %}}
> **float**

### {{% prop-heading "ps3FrameMainBufferSize" %}}
> **int**

### {{% prop-heading "ps3FrameLocalBufferSize" %}}
> **int**

### {{% prop-heading "viewDistance" %}}
> **float**

### {{% prop-heading "cameraCutMaxFrameTranslation" %}}
> **float**

### {{% prop-heading "nearPlane" %}}
> **float**

### {{% prop-heading "forceWorldFadeAmount" %}}
> **float**

### {{% prop-heading "edgeModelMaxVisibleInstanceCount" %}}
> **int**

### {{% prop-heading "edgeModelForceLod" %}}
> **int**

### {{% prop-heading "edgeModelViewDistance" %}}
> **float**

### {{% prop-heading "ps3LinearFrameCmdBufEnable" %}}
> **bool**

### {{% prop-heading "xenonRes1280x704Enable" %}}
> **bool**

### {{% prop-heading "perfOverlayEnable" %}}
> **bool**

### {{% prop-heading "gcmHudEnable" %}}
> **bool**

### {{% prop-heading "movieVSyncEnable" %}}
> **bool**

### {{% prop-heading "ps3Res1280x704Enable" %}}
> **bool**

### {{% prop-heading "initialClearEnable" %}}
> **bool**

### {{% prop-heading "gpuProfilerEnable" %}}
> **bool**

### {{% prop-heading "ps3CellMemoryTexturesEnable" %}}
> **bool**

### {{% prop-heading "xenonBufferTwoFramesEnable" %}}
> **bool**

### {{% prop-heading "drawFpsHistogram" %}}
> **bool**

### {{% prop-heading "fullscreen" %}}
> **bool**

### {{% prop-heading "perfOverlayLatestFrameTimeEnable" %}}
> **bool**

### {{% prop-heading "jobEnable" %}}
> **bool**

### {{% prop-heading "perfOverlayVisible" %}}
> **bool**

### {{% prop-heading "emittersEnable" %}}
> **bool**

### {{% prop-heading "edgeModelsEnable" %}}
> **bool**

### {{% prop-heading "edgeModelCastShadowsEnable" %}}
> **bool**

### {{% prop-heading "edgeModelDepthBiasEnable" %}}
> **bool**

### {{% prop-heading "edgeModelShadowDepthBiasEnable" %}}
> **bool**

### {{% prop-heading "vSyncFlashTestEnable" %}}
> **bool**

### {{% prop-heading "entityRenderEnable" %}}
> **bool**

### {{% prop-heading "edgeModelSpuInstancingEnable" %}}
> **bool**

### {{% prop-heading "edgeModelUseMainLodEnable" %}}
> **bool**

### {{% prop-heading "debugRenderServiceEnable" %}}
> **bool**

### {{% prop-heading "edgeModelUseLodBox" %}}
> **bool**

### {{% prop-heading "debugRendererEnable" %}}
> **bool**

### {{% prop-heading "forceVSyncEnable" %}}
> **bool**

### {{% prop-heading "edgeModelCullEnable" %}}
> **bool**

### {{% prop-heading "edgeModelFrustumCullEnable" %}}
> **bool**

### {{% prop-heading "edgeModelOcclusionCullEnable" %}}
> **bool**

### {{% prop-heading "edgeModelAdditionalCullEnable" %}}
> **bool**

### {{% prop-heading "edgeModelDrawBoxes" %}}
> **bool**

### {{% prop-heading "edgeModelDrawStats" %}}
> **bool**

### {{% prop-heading "staticModelEnable" %}}
> **bool**

### {{% prop-heading "staticModelMeshesEnable" %}}
> **bool**

### {{% prop-heading "staticModelZPassEnable" %}}
> **bool**

### {{% prop-heading "staticModelPartCullEnable" %}}
> **bool**

### {{% prop-heading "staticModelPartFrustumCullEnable" %}}
> **bool**

### {{% prop-heading "staticModelPartOcclusionCullEnable" %}}
> **bool**

### {{% prop-heading "staticModelPartShadowCullEnable" %}}
> **bool**

### {{% prop-heading "staticModelDrawBoxes" %}}
> **bool**

### {{% prop-heading "staticModelDrawStats" %}}
> **bool**

### {{% prop-heading "drawScreenInfo" %}}
> **bool**

### {{% prop-heading "forceOrthoViewEnable" %}}
> **bool**

### {{% prop-heading "staticModelCullSpuJobEnable" %}}
> **bool**

### {{% prop-heading "lockView" %}}
> **bool**

### {{% prop-heading "resetLockedView" %}}
> **bool**

### {{% prop-heading "drawInfo" %}}
> **bool**

### {{% prop-heading "fadeEnable" %}}
> **bool**

### {{% prop-heading "fadeWaitingEnable" %}}
> **bool**

### {{% prop-heading "drawFps" %}}
> **bool**

### {{% prop-heading "destructionVolumeDrawEnable" %}}
> **bool**

### {{% prop-heading "blurEnable" %}}
> **bool**

### {{% prop-heading "buildJobSyncEnable" %}}
> **bool**

### {{% prop-heading "forceSquareOrthoView" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameRenderSettings](/vext/ref/fb/gamerendersettings) type.

