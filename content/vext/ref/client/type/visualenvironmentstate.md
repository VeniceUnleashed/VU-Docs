---
title: VisualEnvironmentState
---

## Summary

### Constructors

|  |
| --- |
| **[VisualEnvironmentState](#constructor-0)**() |
| **[VisualEnvironmentState](#constructor-1)**(name: string) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entityName" true >}} | string |
| {{< prop "visibility" >}} | float |
| {{< prop "priority" >}} | int |
| {{< prop "overrideVisibility" >}} | bool |
| {{< prop "excluded" >}} | bool |
| {{< prop "activeEffectPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "stateId" true >}} | int |
| {{< prop "outdoorLight" >}} | [OutdoorLightData](/vext/ref/client/type/outdoorlightdata) \| nil |
| {{< prop "enlighten" >}} | [EnlightenData](/vext/ref/client/type/enlightendata) \| nil |
| {{< prop "tonemap" >}} | [TonemapData](/vext/ref/client/type/tonemapdata) \| nil |
| {{< prop "colorCorrection" >}} | [ColorCorrectionData](/vext/ref/client/type/colorcorrectiondata) \| nil |
| {{< prop "sky" >}} | [SkyData](/vext/ref/client/type/skydata) \| nil |
| {{< prop "fog" >}} | [FogData](/vext/ref/client/type/fogdata) \| nil |
| {{< prop "wind" >}} | [WindData](/vext/ref/client/type/winddata) \| nil |
| {{< prop "sunFlare" >}} | [SunFlareData](/vext/ref/client/type/sunflaredata) \| nil |
| {{< prop "dynamicAO" >}} | [DynamicAOData](/vext/ref/client/type/dynamicaodata) \| nil |
| {{< prop "dof" >}} | [DofData](/vext/ref/client/type/dofdata) \| nil |
| {{< prop "vignette" >}} | [VignetteData](/vext/ref/client/type/vignettedata) \| nil |
| {{< prop "filmGrain" >}} | [FilmGrainData](/vext/ref/client/type/filmgraindata) \| nil |
| {{< prop "lensScope" >}} | [LensScopeData](/vext/ref/client/type/lensscopedata) \| nil |
| {{< prop "cameraParams" >}} | [CameraParamsData](/vext/ref/client/type/cameraparamsdata) \| nil |
| {{< prop "screenEffect" >}} | [ScreenEffectData](/vext/ref/client/type/screeneffectdata) \| nil |
| {{< prop "damageEffect" >}} | [DamageEffectData](/vext/ref/client/type/damageeffectdata) \| nil |
| {{< prop "planarReflection" >}} | [PlanarReflectionData](/vext/ref/client/type/planarreflectiondata) \| nil |
| {{< prop "dynamicEnvmap" >}} | [DynamicEnvmapData](/vext/ref/client/type/dynamicenvmapdata) \| nil |
| {{< prop "characterLighting" >}} | [CharacterLightingData](/vext/ref/client/type/characterlightingdata) \| nil |
| {{< prop "motionBlur" >}} | [MotionBlurData](/vext/ref/client/type/motionblurdata) \| nil |
| {{< prop "debug" >}} | [DebugData](/vext/ref/client/type/debugdata) \| nil |
| {{< prop "shaderParams" true >}} | [ShaderParamsData](/vext/ref/client/type/shaderparamsdata){} |

### Methods

| Method | Returns |
| ------ | ------- |
| **[AddShaderParams](#addshaderparams)**(params: [ShaderParamsData](/vext/ref/client/type/shaderparamsdata)) | void |
| **[RemoveShaderParamsAt](#removeshaderparamsat)**(index: int) | void |

## Constructors

### VisualEnvironmentState {#constructor-0}

> **VisualEnvironmentState**()

### VisualEnvironmentState {#constructor-1}

> **VisualEnvironmentState**(name: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

## Properties

### {{% prop-heading "entityName" true %}}

> **string**

### {{% prop-heading "visibility" %}}

> **float**

### {{% prop-heading "priority" %}}

> **int**

### {{% prop-heading "overrideVisibility" %}}

> **bool**

### {{% prop-heading "excluded" %}}

> **bool**

### {{% prop-heading "activeEffectPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "stateId" true %}}

> **int**

### {{% prop-heading "outdoorLight" %}}

> **[OutdoorLightData](/vext/ref/client/type/outdoorlightdata)** \| **nil**

### {{% prop-heading "enlighten" %}}

> **[EnlightenData](/vext/ref/client/type/enlightendata)** \| **nil**

### {{% prop-heading "tonemap" %}}

> **[TonemapData](/vext/ref/client/type/tonemapdata)** \| **nil**

### {{% prop-heading "colorCorrection" %}}

> **[ColorCorrectionData](/vext/ref/client/type/colorcorrectiondata)** \| **nil**

### {{% prop-heading "sky" %}}

> **[SkyData](/vext/ref/client/type/skydata)** \| **nil**

### {{% prop-heading "fog" %}}

> **[FogData](/vext/ref/client/type/fogdata)** \| **nil**

### {{% prop-heading "wind" %}}

> **[WindData](/vext/ref/client/type/winddata)** \| **nil**

### {{% prop-heading "sunFlare" %}}

> **[SunFlareData](/vext/ref/client/type/sunflaredata)** \| **nil**

### {{% prop-heading "dynamicAO" %}}

> **[DynamicAOData](/vext/ref/client/type/dynamicaodata)** \| **nil**

### {{% prop-heading "dof" %}}

> **[DofData](/vext/ref/client/type/dofdata)** \| **nil**

### {{% prop-heading "vignette" %}}

> **[VignetteData](/vext/ref/client/type/vignettedata)** \| **nil**

### {{% prop-heading "filmGrain" %}}

> **[FilmGrainData](/vext/ref/client/type/filmgraindata)** \| **nil**

### {{% prop-heading "lensScope" %}}

> **[LensScopeData](/vext/ref/client/type/lensscopedata)** \| **nil**

### {{% prop-heading "cameraParams" %}}

> **[CameraParamsData](/vext/ref/client/type/cameraparamsdata)** \| **nil**

### {{% prop-heading "screenEffect" %}}

> **[ScreenEffectData](/vext/ref/client/type/screeneffectdata)** \| **nil**

### {{% prop-heading "damageEffect" %}}

> **[DamageEffectData](/vext/ref/client/type/damageeffectdata)** \| **nil**

### {{% prop-heading "planarReflection" %}}

> **[PlanarReflectionData](/vext/ref/client/type/planarreflectiondata)** \| **nil**

### {{% prop-heading "dynamicEnvmap" %}}

> **[DynamicEnvmapData](/vext/ref/client/type/dynamicenvmapdata)** \| **nil**

### {{% prop-heading "characterLighting" %}}

> **[CharacterLightingData](/vext/ref/client/type/characterlightingdata)** \| **nil**

### {{% prop-heading "motionBlur" %}}

> **[MotionBlurData](/vext/ref/client/type/motionblurdata)** \| **nil**

### {{% prop-heading "debug" %}}

> **[DebugData](/vext/ref/client/type/debugdata)** \| **nil**

### {{% prop-heading "shaderParams" true %}}

> **[ShaderParamsData](/vext/ref/client/type/shaderparamsdata)**{}

## Methods

### AddShaderParams {#addshaderparams}

> **AddShaderParams**(params: [ShaderParamsData](/vext/ref/client/type/shaderparamsdata))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **params** | [ShaderParamsData](/vext/ref/client/type/shaderparamsdata) |  |

### RemoveShaderParamsAt {#removeshaderparamsat}

> **RemoveShaderParamsAt**(index: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **index** | int |  |

