---
title: GlobalPostProcessSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GlobalPostProcessSettings()                                                          | Create a new instance of this container type.                                                                                             |
| GlobalPostProcessSettings(GlobalPostProcessSettings other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GlobalPostProcessSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GlobalPostProcessSettings](/vext/ref/fb/globalpostprocesssettings/). |

## Properties

| Name                             | Type                                         | Description |
| -------------------------------- | -------------------------------------------- | ----------- |
| brightness                       | [Vec3](/vext/ref/shared/class/vec3)            |             |
| forceBloomScale                  | [Vec3](/vext/ref/shared/class/vec3)            |             |
| forceVignetteColor               | [Vec4](/vext/ref/shared/class/vec4)            |             |
| contrast                         | [Vec3](/vext/ref/shared/class/vec3)            |             |
| saturation                       | [Vec3](/vext/ref/shared/class/vec3)            |             |
| filmGrainTextureScale            | [Vec2](/vext/ref/shared/class/vec2)            |             |
| forceVignetteScale               | [Vec2](/vext/ref/shared/class/vec2)            |             |
| filmGrainColorScale              | [Vec3](/vext/ref/shared/class/vec3)            |             |
| ps3EdgeMlaaJobPriority           | number                                       |             |
| bloomBlurIterationCount          | number                                       |             |
| debugModeStep                    | number                                       |             |
| bloomBlurFilter                  | [BlurFilter](/vext/ref/fb/blurfilter/)                     |             |
| ldrBloomRange                    | number                                       |             |
| debugMode                        | [PostProcessDebugMode](/vext/ref/fb/postprocessdebugmode/) |             |
| userBrightnessMin                | number                                       |             |
| uiBrightnessNorm                 | number                                       |             |
| ps3EdgeMlaaJobCount              | number                                       |             |
| ps3EdgeMlaaAbsoluteThreshold     | number                                       |             |
| bloomPyramidLevelCount           | number                                       |             |
| bloomPyramidFinalLevel           | number                                       |             |
| userBrightnessMax                | number                                       |             |
| userBrightnessMulScale           | number                                       |             |
| userBrightnessAddScale           | number                                       |             |
| downsampleAverageStartMipmap     | number                                       |             |
| ps3EdgeMlaaThresholdFactor       | number                                       |             |
| ps3EdgeMlaaThresholdBase         | number                                       |             |
| ps3TiledLdrMipmapCount           | number                                       |             |
| ps3TiledFloatMipmapCount         | number                                       |             |
| ps3TiledBloomMipmapCount         | number                                       |             |
| hbaoGaussianBlurSize             | [BlurFilter](/vext/ref/fb/blurfilter/)                     |             |
| forceExposure                    | number                                       |             |
| forceBlurAdd                     | number                                       |             |
| forceDofEnable                   | number                                       |             |
| forceDofFocusDistance            | number                                       |             |
| forceDofNearDistanceScale        | number                                       |             |
| forceDofFarDistanceScale         | number                                       |             |
| forceDofScale                    | number                                       |             |
| forceDofBlurFilterDeviation      | number                                       |             |
| hbaoTemporalFilterMaxNumFrames   | number                                       |             |
| hbaoForceVendor                  | number                                       |             |
| forceVignetteExponent            | number                                       |             |
| hbaoTemporalFilterThreshold      | number                                       |             |
| forceTonemapMethod               | number                                       |             |
| lutGammaR                        | number                                       |             |
| lutGammaG                        | number                                       |             |
| hbaoTemporalFilterThreshold2     | number                                       |             |
| forceChromostereopsisEnable      | number                                       |             |
| forceChromostereopsisOffset      | number                                       |             |
| forceChromostereopsisScale       | number                                       |             |
| hbaoBilateralBlurRadius          | number                                       |             |
| forceMiddleGray                  | number                                       |             |
| lutGammaB                        | number                                       |             |
| lutGammaCurbOffset               | number                                       |             |
| hbaoBilateralBlurSharpness       | number                                       |             |
| hbaoRandomTextureWidth           | number                                       |             |
| lensScopeFilterColorScale        | number                                       |             |
| hbaoStepCount                    | number                                       |             |
| hbaoMaxFootprintRadius           | number                                       |             |
| hbaoDirCount                     | number                                       |             |
| hue                              | number                                       |             |
| hbaoQuality                      | number                                       |             |
| hbaoRandomDirVariationCount      | number                                       |             |
| forceDiffusionDofPlaneInFocus    | number                                       |             |
| diffusionDofLuminance            | number                                       |             |
| hbaoTemporalFilterDebugMode      | number                                       |             |
| forceDiffusionDofAperture        | number                                       |             |
| forceDiffusionDofFocalLength     | number                                       |             |
| dynamicAOMethod                  | [DynamicAOMethod](/vext/ref/fb/dynamicaomethod/)           |             |
| drawDebugInfo                    | bool                                         |             |
| colorGradingForceUpdateAlways    | bool                                         |             |
| bloomBlurEnable                  | bool                                         |             |
| hdrBlurEnable                    | bool                                         |             |
| blurBlendEnable                  | bool                                         |             |
| downsampleAverageFromBloomEnable | bool                                         |             |
| filmGrainEnable                  | bool                                         |             |
| ldr16BitBloomEnable              | bool                                         |             |
| dynamicAOEnable                  | bool                                         |             |
| diffusionDofEnable               | bool                                         |             |
| hbaoHalfResEnable                | bool                                         |             |
| hbaoHalfResDepthEnable           | bool                                         |             |
| hbaoVectorizedEnable             | bool                                         |             |
| ps3CompressedRenderTargetsEnable | bool                                         |             |
| hdrBloomEnable                   | bool                                         |             |
| filmGrainRandomEnable            | bool                                         |             |
| directExposureEnable             | bool                                         |             |
| exposureClampEnable              | bool                                         |             |
| filmGrainLinearFilteringEnable   | bool                                         |             |
| hbaoBilateralBlurEnable          | bool                                         |             |
| colorGradingEnable               | bool                                         |             |
| colorTransformEnable             | bool                                         |             |
| hbaoBilateralBlurCsEnable        | bool                                         |             |
| hbaoTemporalFilterEnable         | bool                                         |             |
| quarterDownsamplingEnable        | bool                                         |             |
| drawDebugUserBrightnessLUT       | bool                                         |             |
| bloomPyramidAttenuateEnable      | bool                                         |             |
| downsampleBeforeBlurEnable       | bool                                         |             |
| hbaoGaussianBlurEnable           | bool                                         |             |
| hbaoGaussianBlurHalfResEnable    | bool                                         |             |
| bloomPyramidEnable               | bool                                         |             |
| userBrightnessLUTEnable          | bool                                         |             |
| ps3EdgeMlaaEnable                | bool                                         |             |
| ps3EdgeMlaaCopyOnly              | bool                                         |             |
| ps3EdgeMlaaShowEdges             | bool                                         |             |
| ps3EdgeMlaaRelativeEdgeDetection | bool                                         |             |
| ps3EdgeMlaaGpuBlockEnable        | bool                                         |             |
| ps3BackBufferAsLdrTargetEnable   | bool                                         |             |
| downsampleLogAverageEnable       | bool                                         |             |
| bloomQuarterResEnable            | bool                                         |             |
| bloomEnable                      | bool                                         |             |
| lensScopeFilterEnable            | bool                                         |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GlobalPostProcessSettings](/vext/ref/fb/globalpostprocesssettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GlobalPostProcessSettings](/vext/ref/fb/globalpostprocesssettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
