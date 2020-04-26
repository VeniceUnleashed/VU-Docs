---
title: WorldRenderSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[WorldRenderSettings](#constructor-0)**() |
| **[WorldRenderSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WorldRenderSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dynamicEnvmapDefaultPosition" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "subSurfaceColor" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "viewportScale" >}} | float |
| {{< prop "shadowMinScreenArea" >}} | float |
| {{< prop "shadowViewportScale" >}} | float |
| {{< prop "fxaaQuality" >}} | int |
| {{< prop "cullScreenAreaScale" >}} | float |
| {{< prop "planarReflectionCullFOV" >}} | float |
| {{< prop "genericEntityMaxVisibleEntityCount" >}} | int |
| {{< prop "shadowmapSizeZScale" >}} | float |
| {{< prop "shadowmapResolution" >}} | int |
| {{< prop "shadowmapQuality" >}} | int |
| {{< prop "shadowmapPoissonFilterScale" >}} | float |
| {{< prop "shadowmapSliceCount" >}} | int |
| {{< prop "shadowmapSliceSchemeWeight" >}} | float |
| {{< prop "shadowmapFirstSliceScale" >}} | float |
| {{< prop "shadowmapViewDistance" >}} | float |
| {{< prop "planarReflectionWidth" >}} | int |
| {{< prop "shadowmapExtrusionLength" >}} | float |
| {{< prop "shadowmapMinScreenArea" >}} | float |
| {{< prop "tempPlanarReflectionY" >}} | float |
| {{< prop "subSurfaceRolloffKeyLight" >}} | float |
| {{< prop "fxaaForceVendor" >}} | int |
| {{< prop "planarReflectionHeight" >}} | int |
| {{< prop "lightIntensityScale" >}} | float |
| {{< prop "lightLodSpecularFadeAreaEnd" >}} | float |
| {{< prop "shadowmapMinFov" >}} | float |
| {{< prop "lightLodSpecularFadeAreaStart" >}} | float |
| {{< prop "lightLodRadiusFactor" >}} | float |
| {{< prop "lightForceIntensity" >}} | float |
| {{< prop "lightLodFadeArea" >}} | float |
| {{< prop "lightLodMinArea" >}} | float |
| {{< prop "drawDebugDynamicEnvmapMipLevel" >}} | int |
| {{< prop "maxDecalVolumeCount" >}} | int |
| {{< prop "motionBlurScale" >}} | float |
| {{< prop "motionBlurMax" >}} | float |
| {{< prop "motionBlurNoiseScale" >}} | float |
| {{< prop "motionBlurQuality" >}} | int |
| {{< prop "maxSpotLightShadowCount" >}} | int |
| {{< prop "dynamicEnvmapFilterMode" >}} | [MipmapFilterMode](/vext/ref/fb/mipmapfiltermode) |
| {{< prop "motionBlurMaxSampleCount" >}} | int |
| {{< prop "motionBlurFrameAverageCount" >}} | int |
| {{< prop "motionBlurMaxFrameTime" >}} | float |
| {{< prop "forceMotionBlurDepthCutoff" >}} | float |
| {{< prop "forceMotionBlurCutoffGradientScale" >}} | float |
| {{< prop "multisampleCount" >}} | int |
| {{< prop "multisampleThreshold" >}} | float |
| {{< prop "maxPointLightCount" >}} | int |
| {{< prop "reflectionEnvmapSize" >}} | int |
| {{< prop "spotLightNearPlane" >}} | float |
| {{< prop "spotLightShadowmapPoissonFilterScale" >}} | float |
| {{< prop "onlyShadowmapSlice" >}} | int |
| {{< prop "viewMode" >}} | [WorldViewMode](/vext/ref/fb/worldviewmode) |
| {{< prop "spotLightShadowmapResolution" >}} | int |
| {{< prop "spotLightShadomapLevel" >}} | [QualityLevel](/vext/ref/fb/qualitylevel) |
| {{< prop "spotLightShadowmapQuality" >}} | int |
| {{< prop "onlyLightTileY" >}} | int |
| {{< prop "onlyLightTileX" >}} | int |
| {{< prop "xenonHdrColorScale" >}} | float |
| {{< prop "xenonHdrColorScaleFactor" >}} | float |
| {{< prop "ps3LightTileJobMaxFbTileCount" >}} | int |
| {{< prop "onlyLightTileIndex" >}} | int |
| {{< prop "ps3LightTileJobCount" >}} | int |
| {{< prop "ps3LightTileJobPriority" >}} | int |
| {{< prop "xenonLightTileMaxLineLightCount" >}} | int |
| {{< prop "xenonLightTileMaxSpotLightCount" >}} | int |
| {{< prop "xenonLightTileConstantBufferSize" >}} | int |
| {{< prop "xenonLightTileMaxPointLightCount" >}} | int |
| {{< prop "maxDestructionVolumeCount" >}} | int |
| {{< prop "dynamicEnvmapFilterWidth" >}} | float |
| {{< prop "lightTileMinArea" >}} | float |
| {{< prop "dynamicEnvmapResolution" >}} | int |
| {{< prop "gBufferLayout" >}} | [ShaderGBufferLayout](/vext/ref/fb/shadergbufferlayout) |
| {{< prop "drawDebugSkyEnvmapMipLevel" >}} | int |
| {{< prop "decalVolumeScale" >}} | float |
| {{< prop "lightOverdrawMaxLayerCount" >}} | int |
| {{< prop "lightRadiusScale" >}} | float |
| {{< prop "lightAttenuationThreshold" >}} | float |
| {{< prop "ps3LightTileMethod" >}} | int |
| {{< prop "ps3LightTileJobYieldGranularity" >}} | float |
| {{< prop "outdoorLightTileBatchCount" >}} | int |
| {{< prop "xenonDrawDebugLightTileGridMode" >}} | int |
| {{< prop "lightStencilMinArea" >}} | float |
| {{< prop "maxSpotLightCount" >}} | int |
| {{< prop "skyEnvmapFilterMode" >}} | [MipmapFilterMode](/vext/ref/fb/mipmapfiltermode) |
| {{< prop "skyEnvmapFilterWidth" >}} | float |
| {{< prop "gBufferTestCount" >}} | int |
| {{< prop "skyEnvmapResolution" >}} | int |
| {{< prop "skyEnvmapSidesPerFrameCount" >}} | int |
| {{< prop "subSurfaceRolloffLocalLight" >}} | float |
| {{< prop "onlyTileIndex" >}} | int |
| {{< prop "occluderMeshZPrepassEnable" >}} | bool |
| {{< prop "occluderMeshZPrepassDebugEnable" >}} | bool |
| {{< prop "wireframeEnable" >}} | bool |
| {{< prop "halfResEnable" >}} | bool |
| {{< prop "halfResLensFlaresEnable" >}} | bool |
| {{< prop "zPassEnable" >}} | bool |
| {{< prop "foregroundEnable" >}} | bool |
| {{< prop "tiledHalfResCompositeEnable" >}} | bool |
| {{< prop "foregroundZPassEnable" >}} | bool |
| {{< prop "drawDebugVelocityBuffer" >}} | bool |
| {{< prop "foregroundDepthClearEnable" >}} | bool |
| {{< prop "foregroundAsMainEnable" >}} | bool |
| {{< prop "customEnvmapEnable" >}} | bool |
| {{< prop "skyEnvmapEnable" >}} | bool |
| {{< prop "drawDebugVisibleEntityTypes" >}} | bool |
| {{< prop "drawDebugHalfResEnvironment" >}} | bool |
| {{< prop "drawSolidBoundingBoxes" >}} | bool |
| {{< prop "bilateralHalfResCompositeEnable" >}} | bool |
| {{< prop "foregroundTransparentEnable" >}} | bool |
| {{< prop "tiledHalfResStencilOccludersEnable" >}} | bool |
| {{< prop "skyEnvmapUpdateEnable" >}} | bool |
| {{< prop "skyEnvmapForceUpdateEnable" >}} | bool |
| {{< prop "skyEnvmapUse8BitTexture" >}} | bool |
| {{< prop "dynamicEnvmapEnable" >}} | bool |
| {{< prop "screenEffectEnable" >}} | bool |
| {{< prop "drawDebugZBufferEnable" >}} | bool |
| {{< prop "motionBlurStencilPassEnable" >}} | bool |
| {{< prop "finalPostEnable" >}} | bool |
| {{< prop "drawDebugQuarterShadowmaps" >}} | bool |
| {{< prop "drawDebugSkyEnvmap" >}} | bool |
| {{< prop "dxShadowmap16BitEnable" >}} | bool |
| {{< prop "drawDebugTransShadowmap" >}} | bool |
| {{< prop "drawDebugSpotLightShadowmaps" >}} | bool |
| {{< prop "drawShadowFrustums" >}} | bool |
| {{< prop "drawDebugShadowmaps" >}} | bool |
| {{< prop "skyEnable" >}} | bool |
| {{< prop "drawBoundingSpheres" >}} | bool |
| {{< prop "drawFrustums" >}} | bool |
| {{< prop "staticEnvmapEnable" >}} | bool |
| {{< prop "skyFogEnable" >}} | bool |
| {{< prop "drawLineBoundingBoxes" >}} | bool |
| {{< prop "drawDebugDestructionVolumes" >}} | bool |
| {{< prop "lensFlaresEnable" >}} | bool |
| {{< prop "drawDebugLensFlareOccluders" >}} | bool |
| {{< prop "drawDebugLensFlares" >}} | bool |
| {{< prop "lensFlareOcclusionEnable" >}} | bool |
| {{< prop "drawDebugWorldOcclusions" >}} | bool |
| {{< prop "cloudShadowEnable" >}} | bool |
| {{< prop "overrideDynamicAO" >}} | bool |
| {{< prop "drawDebugDynamicAO" >}} | bool |
| {{< prop "emissiveEnable" >}} | bool |
| {{< prop "unlitEnable" >}} | bool |
| {{< prop "skyEnvmapMipmapGenEnable" >}} | bool |
| {{< prop "drawLightSources" >}} | bool |
| {{< prop "gBufferClearEnable" >}} | bool |
| {{< prop "dxGBufferLight16BitEnable" >}} | bool |
| {{< prop "dxGBufferNormal16BitEnable" >}} | bool |
| {{< prop "gBufferAlphaTestSimpleEnable" >}} | bool |
| {{< prop "specularLightingEnable" >}} | bool |
| {{< prop "skinLightingEnable" >}} | bool |
| {{< prop "translucencyLightingEnable" >}} | bool |
| {{< prop "dynamicEnvmapLightingEnable" >}} | bool |
| {{< prop "outdoorLightEnable" >}} | bool |
| {{< prop "pointLightsEnable" >}} | bool |
| {{< prop "lineLightsEnable" >}} | bool |
| {{< prop "coneLightsEnable" >}} | bool |
| {{< prop "spotLightsEnable" >}} | bool |
| {{< prop "lightProbesEnable" >}} | bool |
| {{< prop "lightStencilMethodEnable" >}} | bool |
| {{< prop "lightVolumeMethodEnable" >}} | bool |
| {{< prop "lightVolumeDepthTestEnable" >}} | bool |
| {{< prop "outputGammaCorrectionEnable" >}} | bool |
| {{< prop "drawDebugMultisampleClassify" >}} | bool |
| {{< prop "outdoorKeyLightEnable" >}} | bool |
| {{< prop "outdoorSkyLightEnable" >}} | bool |
| {{< prop "outdoorLightSpecularEnable" >}} | bool |
| {{< prop "outdoorLightTilingEnable" >}} | bool |
| {{< prop "outdoorLightTileRenderEnable" >}} | bool |
| {{< prop "outdoorLightTileBlendEnable" >}} | bool |
| {{< prop "outdoorLightTileSimpleShaderEnable" >}} | bool |
| {{< prop "ps3TiledHalfTargetEnable" >}} | bool |
| {{< prop "xenonOutdoorLightTilingEnable" >}} | bool |
| {{< prop "xenonPointLightsTilingEnable" >}} | bool |
| {{< prop "xenonSpotLightsTilingEnable" >}} | bool |
| {{< prop "xenonLineLightsTilingEnable" >}} | bool |
| {{< prop "xenonAsyncLightJobsEnable" >}} | bool |
| {{< prop "xenonLightTileDownsampleSpecularCheckEnable" >}} | bool |
| {{< prop "xenonLightTileCpuPointLightCullingEnable" >}} | bool |
| {{< prop "ps3TiledSSAOTargetsEnable" >}} | bool |
| {{< prop "ps3SCullEnable" >}} | bool |
| {{< prop "ps3ColorCompressionEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "ps3TilingEnable" >}} | bool |
| {{< prop "ps3DepthBoundsLightCullingEnable" >}} | bool |
| {{< prop "ps3ZCullEnable" >}} | bool |
| {{< prop "consoleRenderTargetPoolSharingEnable" >}} | bool |
| {{< prop "xenonFloatDepthBufferEnable" >}} | bool |
| {{< prop "ps3LightTileJobYieldEnable" >}} | bool |
| {{< prop "ps3HdrClearEnable" >}} | bool |
| {{< prop "xenonFastHdrEnable" >}} | bool |
| {{< prop "shadowmapViewDistanceScaleEnable" >}} | bool |
| {{< prop "ps3RenderTargetPoolGBufferOffsetEnable" >}} | bool |
| {{< prop "hdrEnable" >}} | bool |
| {{< prop "spotLightShadowmapEnable" >}} | bool |
| {{< prop "simpleShadowmapsEnable" >}} | bool |
| {{< prop "drawTransparent" >}} | bool |
| {{< prop "drawTransparentDecal" >}} | bool |
| {{< prop "shadowmapFixedDepthEnable" >}} | bool |
| {{< prop "drawDebugDynamicEnvmap" >}} | bool |
| {{< prop "motionBlurGeometryPassEnable" >}} | bool |
| {{< prop "dxLinearDepth32BitFormatEnable" >}} | bool |
| {{< prop "dynamicEnvmapMipmapGenEnable" >}} | bool |
| {{< prop "motionBlurEnable" >}} | bool |
| {{< prop "coloredShadowmapSlicesEnable" >}} | bool |
| {{< prop "dxDeferredCsPathEnable" >}} | bool |
| {{< prop "drawDebugGBuffer" >}} | bool |
| {{< prop "drawDebugLightSources" >}} | bool |
| {{< prop "drawDebugLightShadowSources" >}} | bool |
| {{< prop "drawDebugLightStats" >}} | bool |
| {{< prop "drawDebugLightTiles" >}} | bool |
| {{< prop "drawDebugLightTileVolumes" >}} | bool |
| {{< prop "drawDebugLightTileFbGrid" >}} | bool |
| {{< prop "drawDebugLightTileGrid" >}} | bool |
| {{< prop "drawDebugLightTileSources" >}} | bool |
| {{< prop "applyShadowmapsEnable" >}} | bool |
| {{< prop "generateShadowmapsEnable" >}} | bool |
| {{< prop "dxSpotLightShadowmap16BitEnable" >}} | bool |
| {{< prop "ps3Shadowmap16BitEnable" >}} | bool |
| {{< prop "ps3SpotLightShadowmap16BitEnable" >}} | bool |
| {{< prop "genericEntityRendererEnable" >}} | bool |
| {{< prop "setupJobEnable" >}} | bool |
| {{< prop "shadowmapAccumBilinearEnable" >}} | bool |
| {{< prop "lightWidthEnable" >}} | bool |
| {{< prop "lightIntensityNormalizationEnable" >}} | bool |
| {{< prop "lightCullEnable" >}} | bool |
| {{< prop "lightDepthCullEnable" >}} | bool |
| {{< prop "lightNormalCullEnable" >}} | bool |
| {{< prop "lightConeCullEnable" >}} | bool |
| {{< prop "lightTileOverlayEnable" >}} | bool |
| {{< prop "ps3ShadowmapTilingEnable" >}} | bool |
| {{< prop "lightAttenuationThresholdEnable" >}} | bool |
| {{< prop "skyVisibilityEnvmapScalingEnable" >}} | bool |
| {{< prop "zBufferShadowTestEnable" >}} | bool |
| {{< prop "shadowmapsEnable" >}} | bool |
| {{< prop "shadowmapAccumEnable" >}} | bool |
| {{< prop "shadowmapCullVolumeEnable" >}} | bool |
| {{< prop "opaqueSortBySolutionEnable" >}} | bool |
| {{< prop "mainOpaqueZPassEnable" >}} | bool |
| {{< prop "drawDebugDecalVolumes" >}} | bool |
| {{< prop "planarReflectionEnable" >}} | bool |
| {{< prop "transparencyShadowmapsEnable" >}} | bool |
| {{< prop "dynamicCullDrawOccludedBoxesEnable" >}} | bool |
| {{< prop "planarReflectionBlur" >}} | bool |
| {{< prop "drawDebugPlanarReflectionCullFrustum" >}} | bool |
| {{< prop "freezePlanarReflectionCullFrustum" >}} | bool |
| {{< prop "planarReflectionDebugCullMode" >}} | bool |
| {{< prop "shadowmapFixedMovementEnable" >}} | bool |
| {{< prop "decalVolumeEnable" >}} | bool |
| {{< prop "drawDebugPlanarReflection" >}} | bool |
| {{< prop "fxaaEnable" >}} | bool |
| {{< prop "dynamicCullSpuJobEnable" >}} | bool |
| {{< prop "dynamicCullZBufferTestEnable" >}} | bool |
| {{< prop "viewFxEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WorldRenderSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WorldRenderSettings {#constructor-0}
> **WorldRenderSettings**()

Creates a new [WorldRenderSettings](/vext/ref/fb/worldrendersettings) frostbite instance.

### WorldRenderSettings {#constructor-1}
> **WorldRenderSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WorldRenderSettings](/vext/ref/fb/worldrendersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WorldRenderSettings {#constructor-2}
> **WorldRenderSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldRenderSettings](/vext/ref/fb/worldrendersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WorldRenderSettings](/vext/ref/fb/worldrendersettings). |

## Properties
### {{% prop-heading "dynamicEnvmapDefaultPosition" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "subSurfaceColor" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "viewportScale" %}}
> **float**

### {{% prop-heading "shadowMinScreenArea" %}}
> **float**

### {{% prop-heading "shadowViewportScale" %}}
> **float**

### {{% prop-heading "fxaaQuality" %}}
> **int**

### {{% prop-heading "cullScreenAreaScale" %}}
> **float**

### {{% prop-heading "planarReflectionCullFOV" %}}
> **float**

### {{% prop-heading "genericEntityMaxVisibleEntityCount" %}}
> **int**

### {{% prop-heading "shadowmapSizeZScale" %}}
> **float**

### {{% prop-heading "shadowmapResolution" %}}
> **int**

### {{% prop-heading "shadowmapQuality" %}}
> **int**

### {{% prop-heading "shadowmapPoissonFilterScale" %}}
> **float**

### {{% prop-heading "shadowmapSliceCount" %}}
> **int**

### {{% prop-heading "shadowmapSliceSchemeWeight" %}}
> **float**

### {{% prop-heading "shadowmapFirstSliceScale" %}}
> **float**

### {{% prop-heading "shadowmapViewDistance" %}}
> **float**

### {{% prop-heading "planarReflectionWidth" %}}
> **int**

### {{% prop-heading "shadowmapExtrusionLength" %}}
> **float**

### {{% prop-heading "shadowmapMinScreenArea" %}}
> **float**

### {{% prop-heading "tempPlanarReflectionY" %}}
> **float**

### {{% prop-heading "subSurfaceRolloffKeyLight" %}}
> **float**

### {{% prop-heading "fxaaForceVendor" %}}
> **int**

### {{% prop-heading "planarReflectionHeight" %}}
> **int**

### {{% prop-heading "lightIntensityScale" %}}
> **float**

### {{% prop-heading "lightLodSpecularFadeAreaEnd" %}}
> **float**

### {{% prop-heading "shadowmapMinFov" %}}
> **float**

### {{% prop-heading "lightLodSpecularFadeAreaStart" %}}
> **float**

### {{% prop-heading "lightLodRadiusFactor" %}}
> **float**

### {{% prop-heading "lightForceIntensity" %}}
> **float**

### {{% prop-heading "lightLodFadeArea" %}}
> **float**

### {{% prop-heading "lightLodMinArea" %}}
> **float**

### {{% prop-heading "drawDebugDynamicEnvmapMipLevel" %}}
> **int**

### {{% prop-heading "maxDecalVolumeCount" %}}
> **int**

### {{% prop-heading "motionBlurScale" %}}
> **float**

### {{% prop-heading "motionBlurMax" %}}
> **float**

### {{% prop-heading "motionBlurNoiseScale" %}}
> **float**

### {{% prop-heading "motionBlurQuality" %}}
> **int**

### {{% prop-heading "maxSpotLightShadowCount" %}}
> **int**

### {{% prop-heading "dynamicEnvmapFilterMode" %}}
> **[MipmapFilterMode](/vext/ref/fb/mipmapfiltermode)**

### {{% prop-heading "motionBlurMaxSampleCount" %}}
> **int**

### {{% prop-heading "motionBlurFrameAverageCount" %}}
> **int**

### {{% prop-heading "motionBlurMaxFrameTime" %}}
> **float**

### {{% prop-heading "forceMotionBlurDepthCutoff" %}}
> **float**

### {{% prop-heading "forceMotionBlurCutoffGradientScale" %}}
> **float**

### {{% prop-heading "multisampleCount" %}}
> **int**

### {{% prop-heading "multisampleThreshold" %}}
> **float**

### {{% prop-heading "maxPointLightCount" %}}
> **int**

### {{% prop-heading "reflectionEnvmapSize" %}}
> **int**

### {{% prop-heading "spotLightNearPlane" %}}
> **float**

### {{% prop-heading "spotLightShadowmapPoissonFilterScale" %}}
> **float**

### {{% prop-heading "onlyShadowmapSlice" %}}
> **int**

### {{% prop-heading "viewMode" %}}
> **[WorldViewMode](/vext/ref/fb/worldviewmode)**

### {{% prop-heading "spotLightShadowmapResolution" %}}
> **int**

### {{% prop-heading "spotLightShadomapLevel" %}}
> **[QualityLevel](/vext/ref/fb/qualitylevel)**

### {{% prop-heading "spotLightShadowmapQuality" %}}
> **int**

### {{% prop-heading "onlyLightTileY" %}}
> **int**

### {{% prop-heading "onlyLightTileX" %}}
> **int**

### {{% prop-heading "xenonHdrColorScale" %}}
> **float**

### {{% prop-heading "xenonHdrColorScaleFactor" %}}
> **float**

### {{% prop-heading "ps3LightTileJobMaxFbTileCount" %}}
> **int**

### {{% prop-heading "onlyLightTileIndex" %}}
> **int**

### {{% prop-heading "ps3LightTileJobCount" %}}
> **int**

### {{% prop-heading "ps3LightTileJobPriority" %}}
> **int**

### {{% prop-heading "xenonLightTileMaxLineLightCount" %}}
> **int**

### {{% prop-heading "xenonLightTileMaxSpotLightCount" %}}
> **int**

### {{% prop-heading "xenonLightTileConstantBufferSize" %}}
> **int**

### {{% prop-heading "xenonLightTileMaxPointLightCount" %}}
> **int**

### {{% prop-heading "maxDestructionVolumeCount" %}}
> **int**

### {{% prop-heading "dynamicEnvmapFilterWidth" %}}
> **float**

### {{% prop-heading "lightTileMinArea" %}}
> **float**

### {{% prop-heading "dynamicEnvmapResolution" %}}
> **int**

### {{% prop-heading "gBufferLayout" %}}
> **[ShaderGBufferLayout](/vext/ref/fb/shadergbufferlayout)**

### {{% prop-heading "drawDebugSkyEnvmapMipLevel" %}}
> **int**

### {{% prop-heading "decalVolumeScale" %}}
> **float**

### {{% prop-heading "lightOverdrawMaxLayerCount" %}}
> **int**

### {{% prop-heading "lightRadiusScale" %}}
> **float**

### {{% prop-heading "lightAttenuationThreshold" %}}
> **float**

### {{% prop-heading "ps3LightTileMethod" %}}
> **int**

### {{% prop-heading "ps3LightTileJobYieldGranularity" %}}
> **float**

### {{% prop-heading "outdoorLightTileBatchCount" %}}
> **int**

### {{% prop-heading "xenonDrawDebugLightTileGridMode" %}}
> **int**

### {{% prop-heading "lightStencilMinArea" %}}
> **float**

### {{% prop-heading "maxSpotLightCount" %}}
> **int**

### {{% prop-heading "skyEnvmapFilterMode" %}}
> **[MipmapFilterMode](/vext/ref/fb/mipmapfiltermode)**

### {{% prop-heading "skyEnvmapFilterWidth" %}}
> **float**

### {{% prop-heading "gBufferTestCount" %}}
> **int**

### {{% prop-heading "skyEnvmapResolution" %}}
> **int**

### {{% prop-heading "skyEnvmapSidesPerFrameCount" %}}
> **int**

### {{% prop-heading "subSurfaceRolloffLocalLight" %}}
> **float**

### {{% prop-heading "onlyTileIndex" %}}
> **int**

### {{% prop-heading "occluderMeshZPrepassEnable" %}}
> **bool**

### {{% prop-heading "occluderMeshZPrepassDebugEnable" %}}
> **bool**

### {{% prop-heading "wireframeEnable" %}}
> **bool**

### {{% prop-heading "halfResEnable" %}}
> **bool**

### {{% prop-heading "halfResLensFlaresEnable" %}}
> **bool**

### {{% prop-heading "zPassEnable" %}}
> **bool**

### {{% prop-heading "foregroundEnable" %}}
> **bool**

### {{% prop-heading "tiledHalfResCompositeEnable" %}}
> **bool**

### {{% prop-heading "foregroundZPassEnable" %}}
> **bool**

### {{% prop-heading "drawDebugVelocityBuffer" %}}
> **bool**

### {{% prop-heading "foregroundDepthClearEnable" %}}
> **bool**

### {{% prop-heading "foregroundAsMainEnable" %}}
> **bool**

### {{% prop-heading "customEnvmapEnable" %}}
> **bool**

### {{% prop-heading "skyEnvmapEnable" %}}
> **bool**

### {{% prop-heading "drawDebugVisibleEntityTypes" %}}
> **bool**

### {{% prop-heading "drawDebugHalfResEnvironment" %}}
> **bool**

### {{% prop-heading "drawSolidBoundingBoxes" %}}
> **bool**

### {{% prop-heading "bilateralHalfResCompositeEnable" %}}
> **bool**

### {{% prop-heading "foregroundTransparentEnable" %}}
> **bool**

### {{% prop-heading "tiledHalfResStencilOccludersEnable" %}}
> **bool**

### {{% prop-heading "skyEnvmapUpdateEnable" %}}
> **bool**

### {{% prop-heading "skyEnvmapForceUpdateEnable" %}}
> **bool**

### {{% prop-heading "skyEnvmapUse8BitTexture" %}}
> **bool**

### {{% prop-heading "dynamicEnvmapEnable" %}}
> **bool**

### {{% prop-heading "screenEffectEnable" %}}
> **bool**

### {{% prop-heading "drawDebugZBufferEnable" %}}
> **bool**

### {{% prop-heading "motionBlurStencilPassEnable" %}}
> **bool**

### {{% prop-heading "finalPostEnable" %}}
> **bool**

### {{% prop-heading "drawDebugQuarterShadowmaps" %}}
> **bool**

### {{% prop-heading "drawDebugSkyEnvmap" %}}
> **bool**

### {{% prop-heading "dxShadowmap16BitEnable" %}}
> **bool**

### {{% prop-heading "drawDebugTransShadowmap" %}}
> **bool**

### {{% prop-heading "drawDebugSpotLightShadowmaps" %}}
> **bool**

### {{% prop-heading "drawShadowFrustums" %}}
> **bool**

### {{% prop-heading "drawDebugShadowmaps" %}}
> **bool**

### {{% prop-heading "skyEnable" %}}
> **bool**

### {{% prop-heading "drawBoundingSpheres" %}}
> **bool**

### {{% prop-heading "drawFrustums" %}}
> **bool**

### {{% prop-heading "staticEnvmapEnable" %}}
> **bool**

### {{% prop-heading "skyFogEnable" %}}
> **bool**

### {{% prop-heading "drawLineBoundingBoxes" %}}
> **bool**

### {{% prop-heading "drawDebugDestructionVolumes" %}}
> **bool**

### {{% prop-heading "lensFlaresEnable" %}}
> **bool**

### {{% prop-heading "drawDebugLensFlareOccluders" %}}
> **bool**

### {{% prop-heading "drawDebugLensFlares" %}}
> **bool**

### {{% prop-heading "lensFlareOcclusionEnable" %}}
> **bool**

### {{% prop-heading "drawDebugWorldOcclusions" %}}
> **bool**

### {{% prop-heading "cloudShadowEnable" %}}
> **bool**

### {{% prop-heading "overrideDynamicAO" %}}
> **bool**

### {{% prop-heading "drawDebugDynamicAO" %}}
> **bool**

### {{% prop-heading "emissiveEnable" %}}
> **bool**

### {{% prop-heading "unlitEnable" %}}
> **bool**

### {{% prop-heading "skyEnvmapMipmapGenEnable" %}}
> **bool**

### {{% prop-heading "drawLightSources" %}}
> **bool**

### {{% prop-heading "gBufferClearEnable" %}}
> **bool**

### {{% prop-heading "dxGBufferLight16BitEnable" %}}
> **bool**

### {{% prop-heading "dxGBufferNormal16BitEnable" %}}
> **bool**

### {{% prop-heading "gBufferAlphaTestSimpleEnable" %}}
> **bool**

### {{% prop-heading "specularLightingEnable" %}}
> **bool**

### {{% prop-heading "skinLightingEnable" %}}
> **bool**

### {{% prop-heading "translucencyLightingEnable" %}}
> **bool**

### {{% prop-heading "dynamicEnvmapLightingEnable" %}}
> **bool**

### {{% prop-heading "outdoorLightEnable" %}}
> **bool**

### {{% prop-heading "pointLightsEnable" %}}
> **bool**

### {{% prop-heading "lineLightsEnable" %}}
> **bool**

### {{% prop-heading "coneLightsEnable" %}}
> **bool**

### {{% prop-heading "spotLightsEnable" %}}
> **bool**

### {{% prop-heading "lightProbesEnable" %}}
> **bool**

### {{% prop-heading "lightStencilMethodEnable" %}}
> **bool**

### {{% prop-heading "lightVolumeMethodEnable" %}}
> **bool**

### {{% prop-heading "lightVolumeDepthTestEnable" %}}
> **bool**

### {{% prop-heading "outputGammaCorrectionEnable" %}}
> **bool**

### {{% prop-heading "drawDebugMultisampleClassify" %}}
> **bool**

### {{% prop-heading "outdoorKeyLightEnable" %}}
> **bool**

### {{% prop-heading "outdoorSkyLightEnable" %}}
> **bool**

### {{% prop-heading "outdoorLightSpecularEnable" %}}
> **bool**

### {{% prop-heading "outdoorLightTilingEnable" %}}
> **bool**

### {{% prop-heading "outdoorLightTileRenderEnable" %}}
> **bool**

### {{% prop-heading "outdoorLightTileBlendEnable" %}}
> **bool**

### {{% prop-heading "outdoorLightTileSimpleShaderEnable" %}}
> **bool**

### {{% prop-heading "ps3TiledHalfTargetEnable" %}}
> **bool**

### {{% prop-heading "xenonOutdoorLightTilingEnable" %}}
> **bool**

### {{% prop-heading "xenonPointLightsTilingEnable" %}}
> **bool**

### {{% prop-heading "xenonSpotLightsTilingEnable" %}}
> **bool**

### {{% prop-heading "xenonLineLightsTilingEnable" %}}
> **bool**

### {{% prop-heading "xenonAsyncLightJobsEnable" %}}
> **bool**

### {{% prop-heading "xenonLightTileDownsampleSpecularCheckEnable" %}}
> **bool**

### {{% prop-heading "xenonLightTileCpuPointLightCullingEnable" %}}
> **bool**

### {{% prop-heading "ps3TiledSSAOTargetsEnable" %}}
> **bool**

### {{% prop-heading "ps3SCullEnable" %}}
> **bool**

### {{% prop-heading "ps3ColorCompressionEnable" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

### {{% prop-heading "ps3TilingEnable" %}}
> **bool**

### {{% prop-heading "ps3DepthBoundsLightCullingEnable" %}}
> **bool**

### {{% prop-heading "ps3ZCullEnable" %}}
> **bool**

### {{% prop-heading "consoleRenderTargetPoolSharingEnable" %}}
> **bool**

### {{% prop-heading "xenonFloatDepthBufferEnable" %}}
> **bool**

### {{% prop-heading "ps3LightTileJobYieldEnable" %}}
> **bool**

### {{% prop-heading "ps3HdrClearEnable" %}}
> **bool**

### {{% prop-heading "xenonFastHdrEnable" %}}
> **bool**

### {{% prop-heading "shadowmapViewDistanceScaleEnable" %}}
> **bool**

### {{% prop-heading "ps3RenderTargetPoolGBufferOffsetEnable" %}}
> **bool**

### {{% prop-heading "hdrEnable" %}}
> **bool**

### {{% prop-heading "spotLightShadowmapEnable" %}}
> **bool**

### {{% prop-heading "simpleShadowmapsEnable" %}}
> **bool**

### {{% prop-heading "drawTransparent" %}}
> **bool**

### {{% prop-heading "drawTransparentDecal" %}}
> **bool**

### {{% prop-heading "shadowmapFixedDepthEnable" %}}
> **bool**

### {{% prop-heading "drawDebugDynamicEnvmap" %}}
> **bool**

### {{% prop-heading "motionBlurGeometryPassEnable" %}}
> **bool**

### {{% prop-heading "dxLinearDepth32BitFormatEnable" %}}
> **bool**

### {{% prop-heading "dynamicEnvmapMipmapGenEnable" %}}
> **bool**

### {{% prop-heading "motionBlurEnable" %}}
> **bool**

### {{% prop-heading "coloredShadowmapSlicesEnable" %}}
> **bool**

### {{% prop-heading "dxDeferredCsPathEnable" %}}
> **bool**

### {{% prop-heading "drawDebugGBuffer" %}}
> **bool**

### {{% prop-heading "drawDebugLightSources" %}}
> **bool**

### {{% prop-heading "drawDebugLightShadowSources" %}}
> **bool**

### {{% prop-heading "drawDebugLightStats" %}}
> **bool**

### {{% prop-heading "drawDebugLightTiles" %}}
> **bool**

### {{% prop-heading "drawDebugLightTileVolumes" %}}
> **bool**

### {{% prop-heading "drawDebugLightTileFbGrid" %}}
> **bool**

### {{% prop-heading "drawDebugLightTileGrid" %}}
> **bool**

### {{% prop-heading "drawDebugLightTileSources" %}}
> **bool**

### {{% prop-heading "applyShadowmapsEnable" %}}
> **bool**

### {{% prop-heading "generateShadowmapsEnable" %}}
> **bool**

### {{% prop-heading "dxSpotLightShadowmap16BitEnable" %}}
> **bool**

### {{% prop-heading "ps3Shadowmap16BitEnable" %}}
> **bool**

### {{% prop-heading "ps3SpotLightShadowmap16BitEnable" %}}
> **bool**

### {{% prop-heading "genericEntityRendererEnable" %}}
> **bool**

### {{% prop-heading "setupJobEnable" %}}
> **bool**

### {{% prop-heading "shadowmapAccumBilinearEnable" %}}
> **bool**

### {{% prop-heading "lightWidthEnable" %}}
> **bool**

### {{% prop-heading "lightIntensityNormalizationEnable" %}}
> **bool**

### {{% prop-heading "lightCullEnable" %}}
> **bool**

### {{% prop-heading "lightDepthCullEnable" %}}
> **bool**

### {{% prop-heading "lightNormalCullEnable" %}}
> **bool**

### {{% prop-heading "lightConeCullEnable" %}}
> **bool**

### {{% prop-heading "lightTileOverlayEnable" %}}
> **bool**

### {{% prop-heading "ps3ShadowmapTilingEnable" %}}
> **bool**

### {{% prop-heading "lightAttenuationThresholdEnable" %}}
> **bool**

### {{% prop-heading "skyVisibilityEnvmapScalingEnable" %}}
> **bool**

### {{% prop-heading "zBufferShadowTestEnable" %}}
> **bool**

### {{% prop-heading "shadowmapsEnable" %}}
> **bool**

### {{% prop-heading "shadowmapAccumEnable" %}}
> **bool**

### {{% prop-heading "shadowmapCullVolumeEnable" %}}
> **bool**

### {{% prop-heading "opaqueSortBySolutionEnable" %}}
> **bool**

### {{% prop-heading "mainOpaqueZPassEnable" %}}
> **bool**

### {{% prop-heading "drawDebugDecalVolumes" %}}
> **bool**

### {{% prop-heading "planarReflectionEnable" %}}
> **bool**

### {{% prop-heading "transparencyShadowmapsEnable" %}}
> **bool**

### {{% prop-heading "dynamicCullDrawOccludedBoxesEnable" %}}
> **bool**

### {{% prop-heading "planarReflectionBlur" %}}
> **bool**

### {{% prop-heading "drawDebugPlanarReflectionCullFrustum" %}}
> **bool**

### {{% prop-heading "freezePlanarReflectionCullFrustum" %}}
> **bool**

### {{% prop-heading "planarReflectionDebugCullMode" %}}
> **bool**

### {{% prop-heading "shadowmapFixedMovementEnable" %}}
> **bool**

### {{% prop-heading "decalVolumeEnable" %}}
> **bool**

### {{% prop-heading "drawDebugPlanarReflection" %}}
> **bool**

### {{% prop-heading "fxaaEnable" %}}
> **bool**

### {{% prop-heading "dynamicCullSpuJobEnable" %}}
> **bool**

### {{% prop-heading "dynamicCullZBufferTestEnable" %}}
> **bool**

### {{% prop-heading "viewFxEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WorldRenderSettings](/vext/ref/fb/worldrendersettings) type.

