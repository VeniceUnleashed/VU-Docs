---
title: VisualTerrainSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VisualTerrainSettings()                                                          | Create a new instance of this container type.                                                                                     |
| VisualTerrainSettings(VisualTerrainSettings other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VisualTerrainSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VisualTerrainSettings](VisualTerrainSettings). |

## Properties

| Name                                                | Type                                   | Description |
| --------------------------------------------------- | -------------------------------------- | ----------- |
| debugOverlayBrushCoverageMin                        | [Vec2](/vext/ref/cls/shr/Vec2)      |             |
| renderMode                                          | [TerrainRenderMode](TerrainRenderMode) |             |
| meshScatteringInstanceCullJobCount                  | number                                 |             |
| patchErrorFov                                       | number                                 |             |
| triangleSizeMin                                     | number                                 |             |
| lodScale                                            | number                                 |             |
| lodCenterExtrapolationDistanceMax                   | number                                 |             |
| lodCenterExtrapolationTime                          | number                                 |             |
| meshScatteringDensityScaleFactor                    | number                                 |             |
| dxTessellatedTriWidth                               | number                                 |             |
| dxTessellationPatchShrink                           | number                                 |             |
| dxTessellationPatchFacesPerSide                     | number                                 |             |
| zPassDistance                                       | number                                 |             |
| debugOverlayGridSize                                | number                                 |             |
| textureAtlasSampleCountXFactor                      | number                                 |             |
| textureAtlasSampleCountYFactor                      | number                                 |             |
| textureSamplesPerMeterMax                           | number                                 |             |
| textureDetailFalloffFactor                          | number                                 |             |
| textureDetailFalloffDistance                        | number                                 |             |
| textureDetailFalloffCurve                           | number                                 |             |
| textureInvisibleDetailReductionFactor               | number                                 |             |
| textureOccludedDetailReductionFactor                | number                                 |             |
| textureRenderJobCount                               | number                                 |             |
| meshScatteringDistanceScaleFactor                   | number                                 |             |
| debugOverlayIsolineSpacing                          | number                                 |             |
| textureRenderJobsLaunchedPerFrameCountMax           | number                                 |             |
| textureTileSamplesPerSide                           | number                                 |             |
| textureTileBorderWidth                              | number                                 |             |
| textureLevelOffset                                  | number                                 |             |
| textureClodFrameCount                               | number                                 |             |
| meshScatteringDensityMarginFactor                   | number                                 |             |
| textureClodCutoffPriority                           | number                                 |             |
| meshScatteringWindSpeed                             | number                                 |             |
| textureCompressJobCount                             | number                                 |             |
| meshScatteringInstancesPerCellMax                   | number                                 |             |
| textureCompressionQuality                           | number                                 |             |
| textureDetailSlopeBoost                             | number                                 |             |
| textureGenerationMipBias                            | number                                 |             |
| debugOverlayBrushSize                               | number                                 |             |
| meshScatteringBuildChannelCount                     | number                                 |             |
| meshScatteringTreeNodePoolCapacity                  | number                                 |             |
| meshScatteringInvisibleCellFovFactor                | number                                 |             |
| meshScatteringInstanceCullListCount                 | number                                 |             |
| meshScatteringPregenerationDistanceRatio            | number                                 |             |
| tessellationFacesPerSideMin                         | number                                 |             |
| maxNonVisibleTextureUpdateCount                     | number                                 |             |
| textureQuadsPerTileLevel                            | number                                 |             |
| waterDepthMetersPerSample                           | number                                 |             |
| dynamicMaskDecalWidthScale                          | number                                 |             |
| drawQuadtreeZoomIndex                               | number                                 |             |
| meshScatteringClodFrameCount                        | number                                 |             |
| meshScatteringBuildChannelsLaunchedPerFrameCountMax | number                                 |             |
| slotReuseWaitCount                                  | number                                 |             |
| meshScatteringCellPoolCapacity                      | number                                 |             |
| meshScatteringCullRecordCount                       | number                                 |             |
| patchSlotCount                                      | number                                 |             |
| buildJobCount                                       | number                                 |             |
| occluderLodBoostLevelCount                          | number                                 |             |
| decalZPassDrawDistance                              | number                                 |             |
| decalOffsetY                                        | number                                 |             |
| decal3dFarDrawDistanceScaleFactor                   | number                                 |             |
| occludedMinDistance                                 | number                                 |             |
| patchFacesPerSide                                   | number                                 |             |
| drawOnlyDecalZPassEnable                            | bool                                   |             |
| drawDecal3dEnable                                   | bool                                   |             |
| drawTextureTileBoxesEnable                          | bool                                   |             |
| drawEnable                                          | bool                                   |             |
| drawPatchBoxesEnable                                | bool                                   |             |
| drawDebugTextEnable                                 | bool                                   |             |
| drawWaterEnable                                     | bool                                   |             |
| prioritizationSpuJobEnable                          | bool                                   |             |
| drawDecalZPassEnable                                | bool                                   |             |
| drawQuadtreesEnable                                 | bool                                   |             |
| textureVtIndirectionJobEnable                       | bool                                   |             |
| vertexBufferHeightsEnable                           | bool                                   |             |
| drawDebugTexturesEnable                             | bool                                   |             |
| forceDecalReducedQuality                            | bool                                   |             |
| debugOverlayIsolinesEnable                          | bool                                   |             |
| textureClodEnable                                   | bool                                   |             |
| debugOverlayWireframeEnable                         | bool                                   |             |
| debugOverlaySketchTextureEnable                     | bool                                   |             |
| drawDecal2dEnable                                   | bool                                   |             |
| detailOverlayEnable                                 | bool                                   |             |
| decalEnable                                         | bool                                   |             |
| drawPatchesEnable                                   | bool                                   |             |
| drawQuadtreeStatsEnable                             | bool                                   |             |
| destroyAll                                          | bool                                   |             |
| drawQuadtreeAtlasTexturesEnable                     | bool                                   |             |
| slotDebugOutputEnable                               | bool                                   |             |
| updateJobsEnable                                    | bool                                   |             |
| prioritizationOcclusionEnable                       | bool                                   |             |
| cullSpuJobEnable                                    | bool                                   |             |
| prepareBuildSpuJobEnable                            | bool                                   |             |
| buildSpuJobEnable                                   | bool                                   |             |
| regenerateTexturesEnable                            | bool                                   |             |
| dynamicMaskEnable                                   | bool                                   |             |
| gpuTextureCompressionEnable                         | bool                                   |             |
| textureBlockOnStreamingEnable                       | bool                                   |             |
| patchErrorFovEnable                                 | bool                                   |             |
| dxDisplacementMappingEnable                         | bool                                   |             |
| textureKeepPoolFullEnable                           | bool                                   |             |
| patchLodTransitionsEnable                           | bool                                   |             |
| patchMaterialSortingEnable                          | bool                                   |             |
| cullSampleBoundingBoxHeightEnable                   | bool                                   |             |
| castShadowsEnable                                   | bool                                   |             |
| globalColormapEnable                                | bool                                   |             |
| occluderEnable                                      | bool                                   |             |
| occluderJobEnable                                   | bool                                   |             |
| occluderSpuJobEnable                                | bool                                   |             |
| textureLayerCullingEnable                           | bool                                   |             |
| occludedEnable                                      | bool                                   |             |
| drawTextureDebugDepthComplexity                     | bool                                   |             |
| meshScatteringEnable                                | bool                                   |             |
| meshScatteringJobsEnable                            | bool                                   |             |
| meshScatteringCastShadowsEnable                     | bool                                   |             |
| drawMeshScatteringEnable                            | bool                                   |             |
| drawMeshScatteringCellBoxesEnable                   | bool                                   |             |
| drawMeshScatteringNodeBoxesEnable                   | bool                                   |             |
| drawMeshScatteringCulledCellBoxesEnable             | bool                                   |             |
| drawMeshScatteringDebugMaskScaleTexturesEnable      | bool                                   |             |
| drawMeshScatteringStatsEnable                       | bool                                   |             |
| drawMeshScatteringQuadtreeEnable                    | bool                                   |             |
| textureDrawTerrainLayersEnable                      | bool                                   |             |
| textureForceUpdateEnable                            | bool                                   |             |
| textureCompressFastAlgorithmEnable                  | bool                                   |             |
| meshScatteringForceUpdateEnable                     | bool                                   |             |
| textureCompressSpuJobsEnable                        | bool                                   |             |
| drawTextureDebugColors                              | bool                                   |             |
| forceGraphicsDriverCrash                            | bool                                   |             |
| meshScatteringBuildVisibleFirst                     | bool                                   |             |
| forcePatchRebuildEnable                             | bool                                   |             |
| debugOverlayBrushEnable                             | bool                                   |             |
| wireframeEnable                                     | bool                                   |             |
| textureVtIndirectionSpuJobEnable                    | bool                                   |             |
| drawVertexYTextureEnable                            | bool                                   |             |
| meshScatteringInstanceCountLodEnable                | bool                                   |             |
| meshScatteringCullSpuJobEnable                      | bool                                   |             |
| meshScatteringInstanceCullSpuJobEnable              | bool                                   |             |
| meshScatteringPrioritizationSpuJobEnable            | bool                                   |             |
| meshScatteringSpuJobEnable                          | bool                                   |             |
| enable                                              | bool                                   |             |
| editServiceEnable                                   | bool                                   |             |
| meshScatteringInstanceCullEnable                    | bool                                   |             |
| zeroViewportEnable                                  | bool                                   |             |
| debugOverlayGridEnable                              | bool                                   |             |
| meshScatteringInstanceCullBoxTestEnable             | bool                                   |             |
| meshScatteringInstanceFrustumCullEnable             | bool                                   |             |
| meshScatteringInstanceOcclusionCullEnable           | bool                                   |             |
| meshScatteringInstanceAdditionalCullEnable          | bool                                   |             |
| drawMeshScatteringInstanceBoxesEnable               | bool                                   |             |
| meshScatteringInstanceCullDynamicAllocEnable        | bool                                   |             |
| ps3MeshScatteringInstanceCellMemoryEnable           | bool                                   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualTerrainSettings](VisualTerrainSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VisualTerrainSettings](VisualTerrainSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
