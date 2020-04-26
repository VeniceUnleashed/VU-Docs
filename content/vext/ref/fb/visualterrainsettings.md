---
title: VisualTerrainSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VisualTerrainSettings](#constructor-0)**() |
| **[VisualTerrainSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VisualTerrainSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "debugOverlayBrushCoverageMin" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "renderMode" >}} | [TerrainRenderMode](/vext/ref/fb/terrainrendermode) |
| {{< prop "meshScatteringInstanceCullJobCount" >}} | int |
| {{< prop "patchErrorFov" >}} | float |
| {{< prop "triangleSizeMin" >}} | float |
| {{< prop "lodScale" >}} | float |
| {{< prop "lodCenterExtrapolationDistanceMax" >}} | float |
| {{< prop "lodCenterExtrapolationTime" >}} | float |
| {{< prop "meshScatteringDensityScaleFactor" >}} | float |
| {{< prop "dxTessellatedTriWidth" >}} | float |
| {{< prop "dxTessellationPatchShrink" >}} | float |
| {{< prop "dxTessellationPatchFacesPerSide" >}} | int |
| {{< prop "zPassDistance" >}} | float |
| {{< prop "debugOverlayGridSize" >}} | float |
| {{< prop "textureAtlasSampleCountXFactor" >}} | int |
| {{< prop "textureAtlasSampleCountYFactor" >}} | int |
| {{< prop "textureSamplesPerMeterMax" >}} | float |
| {{< prop "textureDetailFalloffFactor" >}} | float |
| {{< prop "textureDetailFalloffDistance" >}} | float |
| {{< prop "textureDetailFalloffCurve" >}} | float |
| {{< prop "textureInvisibleDetailReductionFactor" >}} | float |
| {{< prop "textureOccludedDetailReductionFactor" >}} | float |
| {{< prop "textureRenderJobCount" >}} | int |
| {{< prop "meshScatteringDistanceScaleFactor" >}} | float |
| {{< prop "debugOverlayIsolineSpacing" >}} | float |
| {{< prop "textureRenderJobsLaunchedPerFrameCountMax" >}} | int |
| {{< prop "textureTileSamplesPerSide" >}} | int |
| {{< prop "textureTileBorderWidth" >}} | int |
| {{< prop "textureLevelOffset" >}} | int |
| {{< prop "textureClodFrameCount" >}} | int |
| {{< prop "meshScatteringDensityMarginFactor" >}} | float |
| {{< prop "textureClodCutoffPriority" >}} | float |
| {{< prop "meshScatteringWindSpeed" >}} | float |
| {{< prop "textureCompressJobCount" >}} | int |
| {{< prop "meshScatteringInstancesPerCellMax" >}} | int |
| {{< prop "textureCompressionQuality" >}} | int |
| {{< prop "textureDetailSlopeBoost" >}} | float |
| {{< prop "textureGenerationMipBias" >}} | float |
| {{< prop "debugOverlayBrushSize" >}} | float |
| {{< prop "meshScatteringBuildChannelCount" >}} | int |
| {{< prop "meshScatteringTreeNodePoolCapacity" >}} | int |
| {{< prop "meshScatteringInvisibleCellFovFactor" >}} | float |
| {{< prop "meshScatteringInstanceCullListCount" >}} | int |
| {{< prop "meshScatteringPregenerationDistanceRatio" >}} | float |
| {{< prop "tessellationFacesPerSideMin" >}} | int |
| {{< prop "maxNonVisibleTextureUpdateCount" >}} | int |
| {{< prop "textureQuadsPerTileLevel" >}} | int |
| {{< prop "waterDepthMetersPerSample" >}} | float |
| {{< prop "dynamicMaskDecalWidthScale" >}} | float |
| {{< prop "drawQuadtreeZoomIndex" >}} | int |
| {{< prop "meshScatteringClodFrameCount" >}} | int |
| {{< prop "meshScatteringBuildChannelsLaunchedPerFrameCountMax" >}} | int |
| {{< prop "slotReuseWaitCount" >}} | int |
| {{< prop "meshScatteringCellPoolCapacity" >}} | int |
| {{< prop "meshScatteringCullRecordCount" >}} | int |
| {{< prop "patchSlotCount" >}} | int |
| {{< prop "buildJobCount" >}} | int |
| {{< prop "occluderLodBoostLevelCount" >}} | int |
| {{< prop "decalZPassDrawDistance" >}} | float |
| {{< prop "decalOffsetY" >}} | float |
| {{< prop "decal3dFarDrawDistanceScaleFactor" >}} | float |
| {{< prop "occludedMinDistance" >}} | float |
| {{< prop "patchFacesPerSide" >}} | int |
| {{< prop "drawOnlyDecalZPassEnable" >}} | bool |
| {{< prop "drawDecal3dEnable" >}} | bool |
| {{< prop "drawTextureTileBoxesEnable" >}} | bool |
| {{< prop "drawEnable" >}} | bool |
| {{< prop "drawPatchBoxesEnable" >}} | bool |
| {{< prop "drawDebugTextEnable" >}} | bool |
| {{< prop "drawWaterEnable" >}} | bool |
| {{< prop "prioritizationSpuJobEnable" >}} | bool |
| {{< prop "drawDecalZPassEnable" >}} | bool |
| {{< prop "drawQuadtreesEnable" >}} | bool |
| {{< prop "textureVtIndirectionJobEnable" >}} | bool |
| {{< prop "vertexBufferHeightsEnable" >}} | bool |
| {{< prop "drawDebugTexturesEnable" >}} | bool |
| {{< prop "forceDecalReducedQuality" >}} | bool |
| {{< prop "debugOverlayIsolinesEnable" >}} | bool |
| {{< prop "textureClodEnable" >}} | bool |
| {{< prop "debugOverlayWireframeEnable" >}} | bool |
| {{< prop "debugOverlaySketchTextureEnable" >}} | bool |
| {{< prop "drawDecal2dEnable" >}} | bool |
| {{< prop "detailOverlayEnable" >}} | bool |
| {{< prop "decalEnable" >}} | bool |
| {{< prop "drawPatchesEnable" >}} | bool |
| {{< prop "drawQuadtreeStatsEnable" >}} | bool |
| {{< prop "destroyAll" >}} | bool |
| {{< prop "drawQuadtreeAtlasTexturesEnable" >}} | bool |
| {{< prop "slotDebugOutputEnable" >}} | bool |
| {{< prop "updateJobsEnable" >}} | bool |
| {{< prop "prioritizationOcclusionEnable" >}} | bool |
| {{< prop "cullSpuJobEnable" >}} | bool |
| {{< prop "prepareBuildSpuJobEnable" >}} | bool |
| {{< prop "buildSpuJobEnable" >}} | bool |
| {{< prop "regenerateTexturesEnable" >}} | bool |
| {{< prop "dynamicMaskEnable" >}} | bool |
| {{< prop "gpuTextureCompressionEnable" >}} | bool |
| {{< prop "textureBlockOnStreamingEnable" >}} | bool |
| {{< prop "patchErrorFovEnable" >}} | bool |
| {{< prop "dxDisplacementMappingEnable" >}} | bool |
| {{< prop "textureKeepPoolFullEnable" >}} | bool |
| {{< prop "patchLodTransitionsEnable" >}} | bool |
| {{< prop "patchMaterialSortingEnable" >}} | bool |
| {{< prop "cullSampleBoundingBoxHeightEnable" >}} | bool |
| {{< prop "castShadowsEnable" >}} | bool |
| {{< prop "globalColormapEnable" >}} | bool |
| {{< prop "occluderEnable" >}} | bool |
| {{< prop "occluderJobEnable" >}} | bool |
| {{< prop "occluderSpuJobEnable" >}} | bool |
| {{< prop "textureLayerCullingEnable" >}} | bool |
| {{< prop "occludedEnable" >}} | bool |
| {{< prop "drawTextureDebugDepthComplexity" >}} | bool |
| {{< prop "meshScatteringEnable" >}} | bool |
| {{< prop "meshScatteringJobsEnable" >}} | bool |
| {{< prop "meshScatteringCastShadowsEnable" >}} | bool |
| {{< prop "drawMeshScatteringEnable" >}} | bool |
| {{< prop "drawMeshScatteringCellBoxesEnable" >}} | bool |
| {{< prop "drawMeshScatteringNodeBoxesEnable" >}} | bool |
| {{< prop "drawMeshScatteringCulledCellBoxesEnable" >}} | bool |
| {{< prop "drawMeshScatteringDebugMaskScaleTexturesEnable" >}} | bool |
| {{< prop "drawMeshScatteringStatsEnable" >}} | bool |
| {{< prop "drawMeshScatteringQuadtreeEnable" >}} | bool |
| {{< prop "textureDrawTerrainLayersEnable" >}} | bool |
| {{< prop "textureForceUpdateEnable" >}} | bool |
| {{< prop "textureCompressFastAlgorithmEnable" >}} | bool |
| {{< prop "meshScatteringForceUpdateEnable" >}} | bool |
| {{< prop "textureCompressSpuJobsEnable" >}} | bool |
| {{< prop "drawTextureDebugColors" >}} | bool |
| {{< prop "forceGraphicsDriverCrash" >}} | bool |
| {{< prop "meshScatteringBuildVisibleFirst" >}} | bool |
| {{< prop "forcePatchRebuildEnable" >}} | bool |
| {{< prop "debugOverlayBrushEnable" >}} | bool |
| {{< prop "wireframeEnable" >}} | bool |
| {{< prop "textureVtIndirectionSpuJobEnable" >}} | bool |
| {{< prop "drawVertexYTextureEnable" >}} | bool |
| {{< prop "meshScatteringInstanceCountLodEnable" >}} | bool |
| {{< prop "meshScatteringCullSpuJobEnable" >}} | bool |
| {{< prop "meshScatteringInstanceCullSpuJobEnable" >}} | bool |
| {{< prop "meshScatteringPrioritizationSpuJobEnable" >}} | bool |
| {{< prop "meshScatteringSpuJobEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "editServiceEnable" >}} | bool |
| {{< prop "meshScatteringInstanceCullEnable" >}} | bool |
| {{< prop "zeroViewportEnable" >}} | bool |
| {{< prop "debugOverlayGridEnable" >}} | bool |
| {{< prop "meshScatteringInstanceCullBoxTestEnable" >}} | bool |
| {{< prop "meshScatteringInstanceFrustumCullEnable" >}} | bool |
| {{< prop "meshScatteringInstanceOcclusionCullEnable" >}} | bool |
| {{< prop "meshScatteringInstanceAdditionalCullEnable" >}} | bool |
| {{< prop "drawMeshScatteringInstanceBoxesEnable" >}} | bool |
| {{< prop "meshScatteringInstanceCullDynamicAllocEnable" >}} | bool |
| {{< prop "ps3MeshScatteringInstanceCellMemoryEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VisualTerrainSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VisualTerrainSettings {#constructor-0}
> **VisualTerrainSettings**()

Creates a new [VisualTerrainSettings](/vext/ref/fb/visualterrainsettings) frostbite instance.

### VisualTerrainSettings {#constructor-1}
> **VisualTerrainSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VisualTerrainSettings](/vext/ref/fb/visualterrainsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VisualTerrainSettings {#constructor-2}
> **VisualTerrainSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualTerrainSettings](/vext/ref/fb/visualterrainsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VisualTerrainSettings](/vext/ref/fb/visualterrainsettings). |

## Properties
### {{% prop-heading "debugOverlayBrushCoverageMin" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "renderMode" %}}
> **[TerrainRenderMode](/vext/ref/fb/terrainrendermode)**

### {{% prop-heading "meshScatteringInstanceCullJobCount" %}}
> **int**

### {{% prop-heading "patchErrorFov" %}}
> **float**

### {{% prop-heading "triangleSizeMin" %}}
> **float**

### {{% prop-heading "lodScale" %}}
> **float**

### {{% prop-heading "lodCenterExtrapolationDistanceMax" %}}
> **float**

### {{% prop-heading "lodCenterExtrapolationTime" %}}
> **float**

### {{% prop-heading "meshScatteringDensityScaleFactor" %}}
> **float**

### {{% prop-heading "dxTessellatedTriWidth" %}}
> **float**

### {{% prop-heading "dxTessellationPatchShrink" %}}
> **float**

### {{% prop-heading "dxTessellationPatchFacesPerSide" %}}
> **int**

### {{% prop-heading "zPassDistance" %}}
> **float**

### {{% prop-heading "debugOverlayGridSize" %}}
> **float**

### {{% prop-heading "textureAtlasSampleCountXFactor" %}}
> **int**

### {{% prop-heading "textureAtlasSampleCountYFactor" %}}
> **int**

### {{% prop-heading "textureSamplesPerMeterMax" %}}
> **float**

### {{% prop-heading "textureDetailFalloffFactor" %}}
> **float**

### {{% prop-heading "textureDetailFalloffDistance" %}}
> **float**

### {{% prop-heading "textureDetailFalloffCurve" %}}
> **float**

### {{% prop-heading "textureInvisibleDetailReductionFactor" %}}
> **float**

### {{% prop-heading "textureOccludedDetailReductionFactor" %}}
> **float**

### {{% prop-heading "textureRenderJobCount" %}}
> **int**

### {{% prop-heading "meshScatteringDistanceScaleFactor" %}}
> **float**

### {{% prop-heading "debugOverlayIsolineSpacing" %}}
> **float**

### {{% prop-heading "textureRenderJobsLaunchedPerFrameCountMax" %}}
> **int**

### {{% prop-heading "textureTileSamplesPerSide" %}}
> **int**

### {{% prop-heading "textureTileBorderWidth" %}}
> **int**

### {{% prop-heading "textureLevelOffset" %}}
> **int**

### {{% prop-heading "textureClodFrameCount" %}}
> **int**

### {{% prop-heading "meshScatteringDensityMarginFactor" %}}
> **float**

### {{% prop-heading "textureClodCutoffPriority" %}}
> **float**

### {{% prop-heading "meshScatteringWindSpeed" %}}
> **float**

### {{% prop-heading "textureCompressJobCount" %}}
> **int**

### {{% prop-heading "meshScatteringInstancesPerCellMax" %}}
> **int**

### {{% prop-heading "textureCompressionQuality" %}}
> **int**

### {{% prop-heading "textureDetailSlopeBoost" %}}
> **float**

### {{% prop-heading "textureGenerationMipBias" %}}
> **float**

### {{% prop-heading "debugOverlayBrushSize" %}}
> **float**

### {{% prop-heading "meshScatteringBuildChannelCount" %}}
> **int**

### {{% prop-heading "meshScatteringTreeNodePoolCapacity" %}}
> **int**

### {{% prop-heading "meshScatteringInvisibleCellFovFactor" %}}
> **float**

### {{% prop-heading "meshScatteringInstanceCullListCount" %}}
> **int**

### {{% prop-heading "meshScatteringPregenerationDistanceRatio" %}}
> **float**

### {{% prop-heading "tessellationFacesPerSideMin" %}}
> **int**

### {{% prop-heading "maxNonVisibleTextureUpdateCount" %}}
> **int**

### {{% prop-heading "textureQuadsPerTileLevel" %}}
> **int**

### {{% prop-heading "waterDepthMetersPerSample" %}}
> **float**

### {{% prop-heading "dynamicMaskDecalWidthScale" %}}
> **float**

### {{% prop-heading "drawQuadtreeZoomIndex" %}}
> **int**

### {{% prop-heading "meshScatteringClodFrameCount" %}}
> **int**

### {{% prop-heading "meshScatteringBuildChannelsLaunchedPerFrameCountMax" %}}
> **int**

### {{% prop-heading "slotReuseWaitCount" %}}
> **int**

### {{% prop-heading "meshScatteringCellPoolCapacity" %}}
> **int**

### {{% prop-heading "meshScatteringCullRecordCount" %}}
> **int**

### {{% prop-heading "patchSlotCount" %}}
> **int**

### {{% prop-heading "buildJobCount" %}}
> **int**

### {{% prop-heading "occluderLodBoostLevelCount" %}}
> **int**

### {{% prop-heading "decalZPassDrawDistance" %}}
> **float**

### {{% prop-heading "decalOffsetY" %}}
> **float**

### {{% prop-heading "decal3dFarDrawDistanceScaleFactor" %}}
> **float**

### {{% prop-heading "occludedMinDistance" %}}
> **float**

### {{% prop-heading "patchFacesPerSide" %}}
> **int**

### {{% prop-heading "drawOnlyDecalZPassEnable" %}}
> **bool**

### {{% prop-heading "drawDecal3dEnable" %}}
> **bool**

### {{% prop-heading "drawTextureTileBoxesEnable" %}}
> **bool**

### {{% prop-heading "drawEnable" %}}
> **bool**

### {{% prop-heading "drawPatchBoxesEnable" %}}
> **bool**

### {{% prop-heading "drawDebugTextEnable" %}}
> **bool**

### {{% prop-heading "drawWaterEnable" %}}
> **bool**

### {{% prop-heading "prioritizationSpuJobEnable" %}}
> **bool**

### {{% prop-heading "drawDecalZPassEnable" %}}
> **bool**

### {{% prop-heading "drawQuadtreesEnable" %}}
> **bool**

### {{% prop-heading "textureVtIndirectionJobEnable" %}}
> **bool**

### {{% prop-heading "vertexBufferHeightsEnable" %}}
> **bool**

### {{% prop-heading "drawDebugTexturesEnable" %}}
> **bool**

### {{% prop-heading "forceDecalReducedQuality" %}}
> **bool**

### {{% prop-heading "debugOverlayIsolinesEnable" %}}
> **bool**

### {{% prop-heading "textureClodEnable" %}}
> **bool**

### {{% prop-heading "debugOverlayWireframeEnable" %}}
> **bool**

### {{% prop-heading "debugOverlaySketchTextureEnable" %}}
> **bool**

### {{% prop-heading "drawDecal2dEnable" %}}
> **bool**

### {{% prop-heading "detailOverlayEnable" %}}
> **bool**

### {{% prop-heading "decalEnable" %}}
> **bool**

### {{% prop-heading "drawPatchesEnable" %}}
> **bool**

### {{% prop-heading "drawQuadtreeStatsEnable" %}}
> **bool**

### {{% prop-heading "destroyAll" %}}
> **bool**

### {{% prop-heading "drawQuadtreeAtlasTexturesEnable" %}}
> **bool**

### {{% prop-heading "slotDebugOutputEnable" %}}
> **bool**

### {{% prop-heading "updateJobsEnable" %}}
> **bool**

### {{% prop-heading "prioritizationOcclusionEnable" %}}
> **bool**

### {{% prop-heading "cullSpuJobEnable" %}}
> **bool**

### {{% prop-heading "prepareBuildSpuJobEnable" %}}
> **bool**

### {{% prop-heading "buildSpuJobEnable" %}}
> **bool**

### {{% prop-heading "regenerateTexturesEnable" %}}
> **bool**

### {{% prop-heading "dynamicMaskEnable" %}}
> **bool**

### {{% prop-heading "gpuTextureCompressionEnable" %}}
> **bool**

### {{% prop-heading "textureBlockOnStreamingEnable" %}}
> **bool**

### {{% prop-heading "patchErrorFovEnable" %}}
> **bool**

### {{% prop-heading "dxDisplacementMappingEnable" %}}
> **bool**

### {{% prop-heading "textureKeepPoolFullEnable" %}}
> **bool**

### {{% prop-heading "patchLodTransitionsEnable" %}}
> **bool**

### {{% prop-heading "patchMaterialSortingEnable" %}}
> **bool**

### {{% prop-heading "cullSampleBoundingBoxHeightEnable" %}}
> **bool**

### {{% prop-heading "castShadowsEnable" %}}
> **bool**

### {{% prop-heading "globalColormapEnable" %}}
> **bool**

### {{% prop-heading "occluderEnable" %}}
> **bool**

### {{% prop-heading "occluderJobEnable" %}}
> **bool**

### {{% prop-heading "occluderSpuJobEnable" %}}
> **bool**

### {{% prop-heading "textureLayerCullingEnable" %}}
> **bool**

### {{% prop-heading "occludedEnable" %}}
> **bool**

### {{% prop-heading "drawTextureDebugDepthComplexity" %}}
> **bool**

### {{% prop-heading "meshScatteringEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringJobsEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringCastShadowsEnable" %}}
> **bool**

### {{% prop-heading "drawMeshScatteringEnable" %}}
> **bool**

### {{% prop-heading "drawMeshScatteringCellBoxesEnable" %}}
> **bool**

### {{% prop-heading "drawMeshScatteringNodeBoxesEnable" %}}
> **bool**

### {{% prop-heading "drawMeshScatteringCulledCellBoxesEnable" %}}
> **bool**

### {{% prop-heading "drawMeshScatteringDebugMaskScaleTexturesEnable" %}}
> **bool**

### {{% prop-heading "drawMeshScatteringStatsEnable" %}}
> **bool**

### {{% prop-heading "drawMeshScatteringQuadtreeEnable" %}}
> **bool**

### {{% prop-heading "textureDrawTerrainLayersEnable" %}}
> **bool**

### {{% prop-heading "textureForceUpdateEnable" %}}
> **bool**

### {{% prop-heading "textureCompressFastAlgorithmEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringForceUpdateEnable" %}}
> **bool**

### {{% prop-heading "textureCompressSpuJobsEnable" %}}
> **bool**

### {{% prop-heading "drawTextureDebugColors" %}}
> **bool**

### {{% prop-heading "forceGraphicsDriverCrash" %}}
> **bool**

### {{% prop-heading "meshScatteringBuildVisibleFirst" %}}
> **bool**

### {{% prop-heading "forcePatchRebuildEnable" %}}
> **bool**

### {{% prop-heading "debugOverlayBrushEnable" %}}
> **bool**

### {{% prop-heading "wireframeEnable" %}}
> **bool**

### {{% prop-heading "textureVtIndirectionSpuJobEnable" %}}
> **bool**

### {{% prop-heading "drawVertexYTextureEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringInstanceCountLodEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringCullSpuJobEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringInstanceCullSpuJobEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringPrioritizationSpuJobEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringSpuJobEnable" %}}
> **bool**

### {{% prop-heading "enable" %}}
> **bool**

### {{% prop-heading "editServiceEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringInstanceCullEnable" %}}
> **bool**

### {{% prop-heading "zeroViewportEnable" %}}
> **bool**

### {{% prop-heading "debugOverlayGridEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringInstanceCullBoxTestEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringInstanceFrustumCullEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringInstanceOcclusionCullEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringInstanceAdditionalCullEnable" %}}
> **bool**

### {{% prop-heading "drawMeshScatteringInstanceBoxesEnable" %}}
> **bool**

### {{% prop-heading "meshScatteringInstanceCullDynamicAllocEnable" %}}
> **bool**

### {{% prop-heading "ps3MeshScatteringInstanceCellMemoryEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VisualTerrainSettings](/vext/ref/fb/visualterrainsettings) type.

