---
title: GlobalPostProcessSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[GlobalPostProcessSettings](#constructor-0)**() |
| **[GlobalPostProcessSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GlobalPostProcessSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "brightness" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "forceBloomScale" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "forceVignetteColor" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "contrast" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "saturation" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "filmGrainTextureScale" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "forceVignetteScale" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "filmGrainColorScale" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "ps3EdgeMlaaJobPriority" >}} | int |
| {{< prop "bloomBlurIterationCount" >}} | int |
| {{< prop "debugModeStep" >}} | int |
| {{< prop "bloomBlurFilter" >}} | [BlurFilter](/vext/ref/fb/blurfilter) |
| {{< prop "ldrBloomRange" >}} | float |
| {{< prop "debugMode" >}} | [PostProcessDebugMode](/vext/ref/fb/postprocessdebugmode) |
| {{< prop "userBrightnessMin" >}} | float |
| {{< prop "uiBrightnessNorm" >}} | float |
| {{< prop "ps3EdgeMlaaJobCount" >}} | int |
| {{< prop "ps3EdgeMlaaAbsoluteThreshold" >}} | int |
| {{< prop "bloomPyramidLevelCount" >}} | int |
| {{< prop "bloomPyramidFinalLevel" >}} | int |
| {{< prop "userBrightnessMax" >}} | float |
| {{< prop "userBrightnessMulScale" >}} | float |
| {{< prop "userBrightnessAddScale" >}} | float |
| {{< prop "downsampleAverageStartMipmap" >}} | int |
| {{< prop "ps3EdgeMlaaThresholdFactor" >}} | int |
| {{< prop "ps3EdgeMlaaThresholdBase" >}} | int |
| {{< prop "ps3TiledLdrMipmapCount" >}} | int |
| {{< prop "ps3TiledFloatMipmapCount" >}} | int |
| {{< prop "ps3TiledBloomMipmapCount" >}} | int |
| {{< prop "hbaoGaussianBlurSize" >}} | [BlurFilter](/vext/ref/fb/blurfilter) |
| {{< prop "forceExposure" >}} | float |
| {{< prop "forceBlurAdd" >}} | float |
| {{< prop "forceDofEnable" >}} | int |
| {{< prop "forceDofFocusDistance" >}} | float |
| {{< prop "forceDofNearDistanceScale" >}} | float |
| {{< prop "forceDofFarDistanceScale" >}} | float |
| {{< prop "forceDofScale" >}} | float |
| {{< prop "forceDofBlurFilterDeviation" >}} | float |
| {{< prop "hbaoTemporalFilterMaxNumFrames" >}} | int |
| {{< prop "hbaoForceVendor" >}} | int |
| {{< prop "forceVignetteExponent" >}} | float |
| {{< prop "hbaoTemporalFilterThreshold" >}} | float |
| {{< prop "forceTonemapMethod" >}} | int |
| {{< prop "lutGammaR" >}} | float |
| {{< prop "lutGammaG" >}} | float |
| {{< prop "hbaoTemporalFilterThreshold2" >}} | float |
| {{< prop "forceChromostereopsisEnable" >}} | int |
| {{< prop "forceChromostereopsisOffset" >}} | int |
| {{< prop "forceChromostereopsisScale" >}} | float |
| {{< prop "hbaoBilateralBlurRadius" >}} | int |
| {{< prop "forceMiddleGray" >}} | float |
| {{< prop "lutGammaB" >}} | float |
| {{< prop "lutGammaCurbOffset" >}} | float |
| {{< prop "hbaoBilateralBlurSharpness" >}} | float |
| {{< prop "hbaoRandomTextureWidth" >}} | int |
| {{< prop "lensScopeFilterColorScale" >}} | float |
| {{< prop "hbaoStepCount" >}} | float |
| {{< prop "hbaoMaxFootprintRadius" >}} | float |
| {{< prop "hbaoDirCount" >}} | float |
| {{< prop "hue" >}} | float |
| {{< prop "hbaoQuality" >}} | int |
| {{< prop "hbaoRandomDirVariationCount" >}} | int |
| {{< prop "forceDiffusionDofPlaneInFocus" >}} | float |
| {{< prop "diffusionDofLuminance" >}} | float |
| {{< prop "hbaoTemporalFilterDebugMode" >}} | int |
| {{< prop "forceDiffusionDofAperture" >}} | float |
| {{< prop "forceDiffusionDofFocalLength" >}} | float |
| {{< prop "dynamicAOMethod" >}} | [DynamicAOMethod](/vext/ref/fb/dynamicaomethod) |
| {{< prop "drawDebugInfo" >}} | bool |
| {{< prop "colorGradingForceUpdateAlways" >}} | bool |
| {{< prop "bloomBlurEnable" >}} | bool |
| {{< prop "hdrBlurEnable" >}} | bool |
| {{< prop "blurBlendEnable" >}} | bool |
| {{< prop "downsampleAverageFromBloomEnable" >}} | bool |
| {{< prop "filmGrainEnable" >}} | bool |
| {{< prop "ldr16BitBloomEnable" >}} | bool |
| {{< prop "dynamicAOEnable" >}} | bool |
| {{< prop "diffusionDofEnable" >}} | bool |
| {{< prop "hbaoHalfResEnable" >}} | bool |
| {{< prop "hbaoHalfResDepthEnable" >}} | bool |
| {{< prop "hbaoVectorizedEnable" >}} | bool |
| {{< prop "ps3CompressedRenderTargetsEnable" >}} | bool |
| {{< prop "hdrBloomEnable" >}} | bool |
| {{< prop "filmGrainRandomEnable" >}} | bool |
| {{< prop "directExposureEnable" >}} | bool |
| {{< prop "exposureClampEnable" >}} | bool |
| {{< prop "filmGrainLinearFilteringEnable" >}} | bool |
| {{< prop "hbaoBilateralBlurEnable" >}} | bool |
| {{< prop "colorGradingEnable" >}} | bool |
| {{< prop "colorTransformEnable" >}} | bool |
| {{< prop "hbaoBilateralBlurCsEnable" >}} | bool |
| {{< prop "hbaoTemporalFilterEnable" >}} | bool |
| {{< prop "quarterDownsamplingEnable" >}} | bool |
| {{< prop "drawDebugUserBrightnessLUT" >}} | bool |
| {{< prop "bloomPyramidAttenuateEnable" >}} | bool |
| {{< prop "downsampleBeforeBlurEnable" >}} | bool |
| {{< prop "hbaoGaussianBlurEnable" >}} | bool |
| {{< prop "hbaoGaussianBlurHalfResEnable" >}} | bool |
| {{< prop "bloomPyramidEnable" >}} | bool |
| {{< prop "userBrightnessLUTEnable" >}} | bool |
| {{< prop "ps3EdgeMlaaEnable" >}} | bool |
| {{< prop "ps3EdgeMlaaCopyOnly" >}} | bool |
| {{< prop "ps3EdgeMlaaShowEdges" >}} | bool |
| {{< prop "ps3EdgeMlaaRelativeEdgeDetection" >}} | bool |
| {{< prop "ps3EdgeMlaaGpuBlockEnable" >}} | bool |
| {{< prop "ps3BackBufferAsLdrTargetEnable" >}} | bool |
| {{< prop "downsampleLogAverageEnable" >}} | bool |
| {{< prop "bloomQuarterResEnable" >}} | bool |
| {{< prop "bloomEnable" >}} | bool |
| {{< prop "lensScopeFilterEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GlobalPostProcessSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GlobalPostProcessSettings {#constructor-0}

> **GlobalPostProcessSettings**()

Creates a new [GlobalPostProcessSettings](/vext/ref/fb/globalpostprocesssettings) frostbite instance.

### GlobalPostProcessSettings {#constructor-1}

> **GlobalPostProcessSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GlobalPostProcessSettings](/vext/ref/fb/globalpostprocesssettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GlobalPostProcessSettings {#constructor-2}

> **GlobalPostProcessSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GlobalPostProcessSettings](/vext/ref/fb/globalpostprocesssettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GlobalPostProcessSettings](/vext/ref/fb/globalpostprocesssettings). |

## Properties

### {{% prop-heading "brightness" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "forceBloomScale" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "forceVignetteColor" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "contrast" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "saturation" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "filmGrainTextureScale" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "forceVignetteScale" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "filmGrainColorScale" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "ps3EdgeMlaaJobPriority" %}}

> **int**

### {{% prop-heading "bloomBlurIterationCount" %}}

> **int**

### {{% prop-heading "debugModeStep" %}}

> **int**

### {{% prop-heading "bloomBlurFilter" %}}

> **[BlurFilter](/vext/ref/fb/blurfilter)**

### {{% prop-heading "ldrBloomRange" %}}

> **float**

### {{% prop-heading "debugMode" %}}

> **[PostProcessDebugMode](/vext/ref/fb/postprocessdebugmode)**

### {{% prop-heading "userBrightnessMin" %}}

> **float**

### {{% prop-heading "uiBrightnessNorm" %}}

> **float**

### {{% prop-heading "ps3EdgeMlaaJobCount" %}}

> **int**

### {{% prop-heading "ps3EdgeMlaaAbsoluteThreshold" %}}

> **int**

### {{% prop-heading "bloomPyramidLevelCount" %}}

> **int**

### {{% prop-heading "bloomPyramidFinalLevel" %}}

> **int**

### {{% prop-heading "userBrightnessMax" %}}

> **float**

### {{% prop-heading "userBrightnessMulScale" %}}

> **float**

### {{% prop-heading "userBrightnessAddScale" %}}

> **float**

### {{% prop-heading "downsampleAverageStartMipmap" %}}

> **int**

### {{% prop-heading "ps3EdgeMlaaThresholdFactor" %}}

> **int**

### {{% prop-heading "ps3EdgeMlaaThresholdBase" %}}

> **int**

### {{% prop-heading "ps3TiledLdrMipmapCount" %}}

> **int**

### {{% prop-heading "ps3TiledFloatMipmapCount" %}}

> **int**

### {{% prop-heading "ps3TiledBloomMipmapCount" %}}

> **int**

### {{% prop-heading "hbaoGaussianBlurSize" %}}

> **[BlurFilter](/vext/ref/fb/blurfilter)**

### {{% prop-heading "forceExposure" %}}

> **float**

### {{% prop-heading "forceBlurAdd" %}}

> **float**

### {{% prop-heading "forceDofEnable" %}}

> **int**

### {{% prop-heading "forceDofFocusDistance" %}}

> **float**

### {{% prop-heading "forceDofNearDistanceScale" %}}

> **float**

### {{% prop-heading "forceDofFarDistanceScale" %}}

> **float**

### {{% prop-heading "forceDofScale" %}}

> **float**

### {{% prop-heading "forceDofBlurFilterDeviation" %}}

> **float**

### {{% prop-heading "hbaoTemporalFilterMaxNumFrames" %}}

> **int**

### {{% prop-heading "hbaoForceVendor" %}}

> **int**

### {{% prop-heading "forceVignetteExponent" %}}

> **float**

### {{% prop-heading "hbaoTemporalFilterThreshold" %}}

> **float**

### {{% prop-heading "forceTonemapMethod" %}}

> **int**

### {{% prop-heading "lutGammaR" %}}

> **float**

### {{% prop-heading "lutGammaG" %}}

> **float**

### {{% prop-heading "hbaoTemporalFilterThreshold2" %}}

> **float**

### {{% prop-heading "forceChromostereopsisEnable" %}}

> **int**

### {{% prop-heading "forceChromostereopsisOffset" %}}

> **int**

### {{% prop-heading "forceChromostereopsisScale" %}}

> **float**

### {{% prop-heading "hbaoBilateralBlurRadius" %}}

> **int**

### {{% prop-heading "forceMiddleGray" %}}

> **float**

### {{% prop-heading "lutGammaB" %}}

> **float**

### {{% prop-heading "lutGammaCurbOffset" %}}

> **float**

### {{% prop-heading "hbaoBilateralBlurSharpness" %}}

> **float**

### {{% prop-heading "hbaoRandomTextureWidth" %}}

> **int**

### {{% prop-heading "lensScopeFilterColorScale" %}}

> **float**

### {{% prop-heading "hbaoStepCount" %}}

> **float**

### {{% prop-heading "hbaoMaxFootprintRadius" %}}

> **float**

### {{% prop-heading "hbaoDirCount" %}}

> **float**

### {{% prop-heading "hue" %}}

> **float**

### {{% prop-heading "hbaoQuality" %}}

> **int**

### {{% prop-heading "hbaoRandomDirVariationCount" %}}

> **int**

### {{% prop-heading "forceDiffusionDofPlaneInFocus" %}}

> **float**

### {{% prop-heading "diffusionDofLuminance" %}}

> **float**

### {{% prop-heading "hbaoTemporalFilterDebugMode" %}}

> **int**

### {{% prop-heading "forceDiffusionDofAperture" %}}

> **float**

### {{% prop-heading "forceDiffusionDofFocalLength" %}}

> **float**

### {{% prop-heading "dynamicAOMethod" %}}

> **[DynamicAOMethod](/vext/ref/fb/dynamicaomethod)**

### {{% prop-heading "drawDebugInfo" %}}

> **bool**

### {{% prop-heading "colorGradingForceUpdateAlways" %}}

> **bool**

### {{% prop-heading "bloomBlurEnable" %}}

> **bool**

### {{% prop-heading "hdrBlurEnable" %}}

> **bool**

### {{% prop-heading "blurBlendEnable" %}}

> **bool**

### {{% prop-heading "downsampleAverageFromBloomEnable" %}}

> **bool**

### {{% prop-heading "filmGrainEnable" %}}

> **bool**

### {{% prop-heading "ldr16BitBloomEnable" %}}

> **bool**

### {{% prop-heading "dynamicAOEnable" %}}

> **bool**

### {{% prop-heading "diffusionDofEnable" %}}

> **bool**

### {{% prop-heading "hbaoHalfResEnable" %}}

> **bool**

### {{% prop-heading "hbaoHalfResDepthEnable" %}}

> **bool**

### {{% prop-heading "hbaoVectorizedEnable" %}}

> **bool**

### {{% prop-heading "ps3CompressedRenderTargetsEnable" %}}

> **bool**

### {{% prop-heading "hdrBloomEnable" %}}

> **bool**

### {{% prop-heading "filmGrainRandomEnable" %}}

> **bool**

### {{% prop-heading "directExposureEnable" %}}

> **bool**

### {{% prop-heading "exposureClampEnable" %}}

> **bool**

### {{% prop-heading "filmGrainLinearFilteringEnable" %}}

> **bool**

### {{% prop-heading "hbaoBilateralBlurEnable" %}}

> **bool**

### {{% prop-heading "colorGradingEnable" %}}

> **bool**

### {{% prop-heading "colorTransformEnable" %}}

> **bool**

### {{% prop-heading "hbaoBilateralBlurCsEnable" %}}

> **bool**

### {{% prop-heading "hbaoTemporalFilterEnable" %}}

> **bool**

### {{% prop-heading "quarterDownsamplingEnable" %}}

> **bool**

### {{% prop-heading "drawDebugUserBrightnessLUT" %}}

> **bool**

### {{% prop-heading "bloomPyramidAttenuateEnable" %}}

> **bool**

### {{% prop-heading "downsampleBeforeBlurEnable" %}}

> **bool**

### {{% prop-heading "hbaoGaussianBlurEnable" %}}

> **bool**

### {{% prop-heading "hbaoGaussianBlurHalfResEnable" %}}

> **bool**

### {{% prop-heading "bloomPyramidEnable" %}}

> **bool**

### {{% prop-heading "userBrightnessLUTEnable" %}}

> **bool**

### {{% prop-heading "ps3EdgeMlaaEnable" %}}

> **bool**

### {{% prop-heading "ps3EdgeMlaaCopyOnly" %}}

> **bool**

### {{% prop-heading "ps3EdgeMlaaShowEdges" %}}

> **bool**

### {{% prop-heading "ps3EdgeMlaaRelativeEdgeDetection" %}}

> **bool**

### {{% prop-heading "ps3EdgeMlaaGpuBlockEnable" %}}

> **bool**

### {{% prop-heading "ps3BackBufferAsLdrTargetEnable" %}}

> **bool**

### {{% prop-heading "downsampleLogAverageEnable" %}}

> **bool**

### {{% prop-heading "bloomQuarterResEnable" %}}

> **bool**

### {{% prop-heading "bloomEnable" %}}

> **bool**

### {{% prop-heading "lensScopeFilterEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GlobalPostProcessSettings](/vext/ref/fb/globalpostprocesssettings) type.

