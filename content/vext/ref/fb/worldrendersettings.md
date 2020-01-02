---
title: WorldRenderSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| WorldRenderSettings()                                                          | Create a new instance of this container type.                                                                                 |
| WorldRenderSettings(WorldRenderSettings other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| WorldRenderSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldRenderSettings](WorldRenderSettings). |

## Properties

| Name                                        | Type                                       | Description |
| ------------------------------------------- | ------------------------------------------ | ----------- |
| dynamicEnvmapDefaultPosition                | [Vec3](/vext/ref/shared/class/Vec3)          |             |
| subSurfaceColor                             | [Vec3](/vext/ref/shared/class/Vec3)          |             |
| viewportScale                               | number                                     |             |
| shadowMinScreenArea                         | number                                     |             |
| shadowViewportScale                         | number                                     |             |
| fxaaQuality                                 | number                                     |             |
| cullScreenAreaScale                         | number                                     |             |
| planarReflectionCullFOV                     | number                                     |             |
| genericEntityMaxVisibleEntityCount          | number                                     |             |
| shadowmapSizeZScale                         | number                                     |             |
| shadowmapResolution                         | number                                     |             |
| shadowmapQuality                            | number                                     |             |
| shadowmapPoissonFilterScale                 | number                                     |             |
| shadowmapSliceCount                         | number                                     |             |
| shadowmapSliceSchemeWeight                  | number                                     |             |
| shadowmapFirstSliceScale                    | number                                     |             |
| shadowmapViewDistance                       | number                                     |             |
| planarReflectionWidth                       | number                                     |             |
| shadowmapExtrusionLength                    | number                                     |             |
| shadowmapMinScreenArea                      | number                                     |             |
| tempPlanarReflectionY                       | number                                     |             |
| subSurfaceRolloffKeyLight                   | number                                     |             |
| fxaaForceVendor                             | number                                     |             |
| planarReflectionHeight                      | number                                     |             |
| lightIntensityScale                         | number                                     |             |
| lightLodSpecularFadeAreaEnd                 | number                                     |             |
| shadowmapMinFov                             | number                                     |             |
| lightLodSpecularFadeAreaStart               | number                                     |             |
| lightLodRadiusFactor                        | number                                     |             |
| lightForceIntensity                         | number                                     |             |
| lightLodFadeArea                            | number                                     |             |
| lightLodMinArea                             | number                                     |             |
| drawDebugDynamicEnvmapMipLevel              | number                                     |             |
| maxDecalVolumeCount                         | number                                     |             |
| motionBlurScale                             | number                                     |             |
| motionBlurMax                               | number                                     |             |
| motionBlurNoiseScale                        | number                                     |             |
| motionBlurQuality                           | number                                     |             |
| maxSpotLightShadowCount                     | number                                     |             |
| dynamicEnvmapFilterMode                     | [MipmapFilterMode](MipmapFilterMode)       |             |
| motionBlurMaxSampleCount                    | number                                     |             |
| motionBlurFrameAverageCount                 | number                                     |             |
| motionBlurMaxFrameTime                      | number                                     |             |
| forceMotionBlurDepthCutoff                  | number                                     |             |
| forceMotionBlurCutoffGradientScale          | number                                     |             |
| multisampleCount                            | number                                     |             |
| multisampleThreshold                        | number                                     |             |
| maxPointLightCount                          | number                                     |             |
| reflectionEnvmapSize                        | number                                     |             |
| spotLightNearPlane                          | number                                     |             |
| spotLightShadowmapPoissonFilterScale        | number                                     |             |
| onlyShadowmapSlice                          | number                                     |             |
| viewMode                                    | [WorldViewMode](WorldViewMode)             |             |
| spotLightShadowmapResolution                | number                                     |             |
| spotLightShadomapLevel                      | [QualityLevel](QualityLevel)               |             |
| spotLightShadowmapQuality                   | number                                     |             |
| onlyLightTileY                              | number                                     |             |
| onlyLightTileX                              | number                                     |             |
| xenonHdrColorScale                          | number                                     |             |
| xenonHdrColorScaleFactor                    | number                                     |             |
| ps3LightTileJobMaxFbTileCount               | number                                     |             |
| onlyLightTileIndex                          | number                                     |             |
| ps3LightTileJobCount                        | number                                     |             |
| ps3LightTileJobPriority                     | number                                     |             |
| xenonLightTileMaxLineLightCount             | number                                     |             |
| xenonLightTileMaxSpotLightCount             | number                                     |             |
| xenonLightTileConstantBufferSize            | number                                     |             |
| xenonLightTileMaxPointLightCount            | number                                     |             |
| maxDestructionVolumeCount                   | number                                     |             |
| dynamicEnvmapFilterWidth                    | number                                     |             |
| lightTileMinArea                            | number                                     |             |
| dynamicEnvmapResolution                     | number                                     |             |
| gBufferLayout                               | [ShaderGBufferLayout](ShaderGBufferLayout) |             |
| drawDebugSkyEnvmapMipLevel                  | number                                     |             |
| decalVolumeScale                            | number                                     |             |
| lightOverdrawMaxLayerCount                  | number                                     |             |
| lightRadiusScale                            | number                                     |             |
| lightAttenuationThreshold                   | number                                     |             |
| ps3LightTileMethod                          | number                                     |             |
| ps3LightTileJobYieldGranularity             | number                                     |             |
| outdoorLightTileBatchCount                  | number                                     |             |
| xenonDrawDebugLightTileGridMode             | number                                     |             |
| lightStencilMinArea                         | number                                     |             |
| maxSpotLightCount                           | number                                     |             |
| skyEnvmapFilterMode                         | [MipmapFilterMode](MipmapFilterMode)       |             |
| skyEnvmapFilterWidth                        | number                                     |             |
| gBufferTestCount                            | number                                     |             |
| skyEnvmapResolution                         | number                                     |             |
| skyEnvmapSidesPerFrameCount                 | number                                     |             |
| subSurfaceRolloffLocalLight                 | number                                     |             |
| onlyTileIndex                               | number                                     |             |
| occluderMeshZPrepassEnable                  | bool                                       |             |
| occluderMeshZPrepassDebugEnable             | bool                                       |             |
| wireframeEnable                             | bool                                       |             |
| halfResEnable                               | bool                                       |             |
| halfResLensFlaresEnable                     | bool                                       |             |
| zPassEnable                                 | bool                                       |             |
| foregroundEnable                            | bool                                       |             |
| tiledHalfResCompositeEnable                 | bool                                       |             |
| foregroundZPassEnable                       | bool                                       |             |
| drawDebugVelocityBuffer                     | bool                                       |             |
| foregroundDepthClearEnable                  | bool                                       |             |
| foregroundAsMainEnable                      | bool                                       |             |
| customEnvmapEnable                          | bool                                       |             |
| skyEnvmapEnable                             | bool                                       |             |
| drawDebugVisibleEntityTypes                 | bool                                       |             |
| drawDebugHalfResEnvironment                 | bool                                       |             |
| drawSolidBoundingBoxes                      | bool                                       |             |
| bilateralHalfResCompositeEnable             | bool                                       |             |
| foregroundTransparentEnable                 | bool                                       |             |
| tiledHalfResStencilOccludersEnable          | bool                                       |             |
| skyEnvmapUpdateEnable                       | bool                                       |             |
| skyEnvmapForceUpdateEnable                  | bool                                       |             |
| skyEnvmapUse8BitTexture                     | bool                                       |             |
| dynamicEnvmapEnable                         | bool                                       |             |
| screenEffectEnable                          | bool                                       |             |
| drawDebugZBufferEnable                      | bool                                       |             |
| motionBlurStencilPassEnable                 | bool                                       |             |
| finalPostEnable                             | bool                                       |             |
| drawDebugQuarterShadowmaps                  | bool                                       |             |
| drawDebugSkyEnvmap                          | bool                                       |             |
| dxShadowmap16BitEnable                      | bool                                       |             |
| drawDebugTransShadowmap                     | bool                                       |             |
| drawDebugSpotLightShadowmaps                | bool                                       |             |
| drawShadowFrustums                          | bool                                       |             |
| drawDebugShadowmaps                         | bool                                       |             |
| skyEnable                                   | bool                                       |             |
| drawBoundingSpheres                         | bool                                       |             |
| drawFrustums                                | bool                                       |             |
| staticEnvmapEnable                          | bool                                       |             |
| skyFogEnable                                | bool                                       |             |
| drawLineBoundingBoxes                       | bool                                       |             |
| drawDebugDestructionVolumes                 | bool                                       |             |
| lensFlaresEnable                            | bool                                       |             |
| drawDebugLensFlareOccluders                 | bool                                       |             |
| drawDebugLensFlares                         | bool                                       |             |
| lensFlareOcclusionEnable                    | bool                                       |             |
| drawDebugWorldOcclusions                    | bool                                       |             |
| cloudShadowEnable                           | bool                                       |             |
| overrideDynamicAO                           | bool                                       |             |
| drawDebugDynamicAO                          | bool                                       |             |
| emissiveEnable                              | bool                                       |             |
| unlitEnable                                 | bool                                       |             |
| skyEnvmapMipmapGenEnable                    | bool                                       |             |
| drawLightSources                            | bool                                       |             |
| gBufferClearEnable                          | bool                                       |             |
| dxGBufferLight16BitEnable                   | bool                                       |             |
| dxGBufferNormal16BitEnable                  | bool                                       |             |
| gBufferAlphaTestSimpleEnable                | bool                                       |             |
| specularLightingEnable                      | bool                                       |             |
| skinLightingEnable                          | bool                                       |             |
| translucencyLightingEnable                  | bool                                       |             |
| dynamicEnvmapLightingEnable                 | bool                                       |             |
| outdoorLightEnable                          | bool                                       |             |
| pointLightsEnable                           | bool                                       |             |
| lineLightsEnable                            | bool                                       |             |
| coneLightsEnable                            | bool                                       |             |
| spotLightsEnable                            | bool                                       |             |
| lightProbesEnable                           | bool                                       |             |
| lightStencilMethodEnable                    | bool                                       |             |
| lightVolumeMethodEnable                     | bool                                       |             |
| lightVolumeDepthTestEnable                  | bool                                       |             |
| outputGammaCorrectionEnable                 | bool                                       |             |
| drawDebugMultisampleClassify                | bool                                       |             |
| outdoorKeyLightEnable                       | bool                                       |             |
| outdoorSkyLightEnable                       | bool                                       |             |
| outdoorLightSpecularEnable                  | bool                                       |             |
| outdoorLightTilingEnable                    | bool                                       |             |
| outdoorLightTileRenderEnable                | bool                                       |             |
| outdoorLightTileBlendEnable                 | bool                                       |             |
| outdoorLightTileSimpleShaderEnable          | bool                                       |             |
| ps3TiledHalfTargetEnable                    | bool                                       |             |
| xenonOutdoorLightTilingEnable               | bool                                       |             |
| xenonPointLightsTilingEnable                | bool                                       |             |
| xenonSpotLightsTilingEnable                 | bool                                       |             |
| xenonLineLightsTilingEnable                 | bool                                       |             |
| xenonAsyncLightJobsEnable                   | bool                                       |             |
| xenonLightTileDownsampleSpecularCheckEnable | bool                                       |             |
| xenonLightTileCpuPointLightCullingEnable    | bool                                       |             |
| ps3TiledSSAOTargetsEnable                   | bool                                       |             |
| ps3SCullEnable                              | bool                                       |             |
| ps3ColorCompressionEnable                   | bool                                       |             |
| enable                                      | bool                                       |             |
| ps3TilingEnable                             | bool                                       |             |
| ps3DepthBoundsLightCullingEnable            | bool                                       |             |
| ps3ZCullEnable                              | bool                                       |             |
| consoleRenderTargetPoolSharingEnable        | bool                                       |             |
| xenonFloatDepthBufferEnable                 | bool                                       |             |
| ps3LightTileJobYieldEnable                  | bool                                       |             |
| ps3HdrClearEnable                           | bool                                       |             |
| xenonFastHdrEnable                          | bool                                       |             |
| shadowmapViewDistanceScaleEnable            | bool                                       |             |
| ps3RenderTargetPoolGBufferOffsetEnable      | bool                                       |             |
| hdrEnable                                   | bool                                       |             |
| spotLightShadowmapEnable                    | bool                                       |             |
| simpleShadowmapsEnable                      | bool                                       |             |
| drawTransparent                             | bool                                       |             |
| drawTransparentDecal                        | bool                                       |             |
| shadowmapFixedDepthEnable                   | bool                                       |             |
| drawDebugDynamicEnvmap                      | bool                                       |             |
| motionBlurGeometryPassEnable                | bool                                       |             |
| dxLinearDepth32BitFormatEnable              | bool                                       |             |
| dynamicEnvmapMipmapGenEnable                | bool                                       |             |
| motionBlurEnable                            | bool                                       |             |
| coloredShadowmapSlicesEnable                | bool                                       |             |
| dxDeferredCsPathEnable                      | bool                                       |             |
| drawDebugGBuffer                            | bool                                       |             |
| drawDebugLightSources                       | bool                                       |             |
| drawDebugLightShadowSources                 | bool                                       |             |
| drawDebugLightStats                         | bool                                       |             |
| drawDebugLightTiles                         | bool                                       |             |
| drawDebugLightTileVolumes                   | bool                                       |             |
| drawDebugLightTileFbGrid                    | bool                                       |             |
| drawDebugLightTileGrid                      | bool                                       |             |
| drawDebugLightTileSources                   | bool                                       |             |
| applyShadowmapsEnable                       | bool                                       |             |
| generateShadowmapsEnable                    | bool                                       |             |
| dxSpotLightShadowmap16BitEnable             | bool                                       |             |
| ps3Shadowmap16BitEnable                     | bool                                       |             |
| ps3SpotLightShadowmap16BitEnable            | bool                                       |             |
| genericEntityRendererEnable                 | bool                                       |             |
| setupJobEnable                              | bool                                       |             |
| shadowmapAccumBilinearEnable                | bool                                       |             |
| lightWidthEnable                            | bool                                       |             |
| lightIntensityNormalizationEnable           | bool                                       |             |
| lightCullEnable                             | bool                                       |             |
| lightDepthCullEnable                        | bool                                       |             |
| lightNormalCullEnable                       | bool                                       |             |
| lightConeCullEnable                         | bool                                       |             |
| lightTileOverlayEnable                      | bool                                       |             |
| ps3ShadowmapTilingEnable                    | bool                                       |             |
| lightAttenuationThresholdEnable             | bool                                       |             |
| skyVisibilityEnvmapScalingEnable            | bool                                       |             |
| zBufferShadowTestEnable                     | bool                                       |             |
| shadowmapsEnable                            | bool                                       |             |
| shadowmapAccumEnable                        | bool                                       |             |
| shadowmapCullVolumeEnable                   | bool                                       |             |
| opaqueSortBySolutionEnable                  | bool                                       |             |
| mainOpaqueZPassEnable                       | bool                                       |             |
| drawDebugDecalVolumes                       | bool                                       |             |
| planarReflectionEnable                      | bool                                       |             |
| transparencyShadowmapsEnable                | bool                                       |             |
| dynamicCullDrawOccludedBoxesEnable          | bool                                       |             |
| planarReflectionBlur                        | bool                                       |             |
| drawDebugPlanarReflectionCullFrustum        | bool                                       |             |
| freezePlanarReflectionCullFrustum           | bool                                       |             |
| planarReflectionDebugCullMode               | bool                                       |             |
| shadowmapFixedMovementEnable                | bool                                       |             |
| decalVolumeEnable                           | bool                                       |             |
| drawDebugPlanarReflection                   | bool                                       |             |
| fxaaEnable                                  | bool                                       |             |
| dynamicCullSpuJobEnable                     | bool                                       |             |
| dynamicCullZBufferTestEnable                | bool                                       |             |
| viewFxEnable                                | bool                                       |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [WorldRenderSettings](WorldRenderSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldRenderSettings](WorldRenderSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
