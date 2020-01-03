---
title: ShaderSystemSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ShaderSystemSettings()                                                          | Create a new instance of this container type.                                                                                   |
| ShaderSystemSettings(ShaderSystemSettings other)                                | Create a reference copy of an instance of the same type.                                                                        |
| ShaderSystemSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ShaderSystemSettings](ShaderSystemSettings). |

## Properties

| Name                                   | Type                              | Description |
| -------------------------------------- | --------------------------------- | ----------- |
| debugNonFiniteColor                    | [Vec3](/vext/ref/shared/class/Vec3) |             |
| dxInstancingBufferHandlingMethod       | number                            |             |
| frameMemoryBufferSize                  | number                            |             |
| xenonDispatchCmdBufferSize             | number                            |             |
| xenonDispatchCmdBufferSegmentSize      | number                            |             |
| dxDispatchJobBlocksPerCommandList      | number                            |             |
| dxDispatchJobMinBlockCount             | number                            |             |
| dxFrameVertexBufferPoolSize            | number                            |             |
| xenonDispatchOnlyJob                   | number                            |             |
| dxVsExternalConstantBufferSize         | number                            |             |
| dxVsFunctionConstantBufferSize         | number                            |             |
| dxPsFunctionConstantBufferSize         | number                            |             |
| ps3GeometryYieldGranularity            | number                            |             |
| xenonDispatchJobCount                  | number                            |             |
| dispatchPrepareJobCount                | number                            |             |
| ps3MinMipmap                           | number                            |             |
| ps3ZCullInFrontLimit                   | number                            |             |
| ps3ZCullBehindLimit                    | number                            |             |
| ps3DispatchOnlyJob                     | number                            |             |
| ps3DispatchJobSpuCount                 | number                            |             |
| dxMaxInstructionCount                  | number                            |             |
| overdrawMaxLayerCount                  | number                            |             |
| ps3GeometryJobCount                    | number                            |             |
| dxMaxInstanceCount                     | number                            |             |
| ps3DispatchYieldGranularity            | number                            |             |
| dxPsExternalConstantBufferSize         | number                            |             |
| xenonDispatchBlocksPerJob              | number                            |             |
| ps3DispatchJobCount                    | number                            |             |
| dxDispatchJobCount                     | number                            |             |
| drawCallMultiplier                     | number                            |             |
| ps3MaxMipmap                           | number                            |             |
| mipmapBias                             | number                            |             |
| maxAnisotropy                          | number                            |             |
| zOnlyMaxAnisotropy                     | number                            |             |
| xenonTrilinearThreshold                | number                            |             |
| ps3DispatchJobPriority                 | number                            |             |
| xenonDispatchMinJobBlockCount          | number                            |             |
| ps3GeometryJobSpuCount                 | number                            |             |
| ps3DispatchBlocksPerJob                | number                            |             |
| ps3GeometryJobPriority                 | number                            |             |
| singlePrimitiveEnable                  | bool                              |             |
| sortBlocksEnable                       | bool                              |             |
| drawCallEnable                         | bool                              |             |
| gcmReplayMarkersEnable                 | bool                              |             |
| clipPlanesEnable                       | bool                              |             |
| depthTestEnable                        | bool                              |             |
| stencilEnable                          | bool                              |             |
| shaderPixScopeEnable                   | bool                              |             |
| singleFrameBlockLogEnable              | bool                              |             |
| alphaBlendEnable                       | bool                              |             |
| pixBlockEventsEnable                   | bool                              |             |
| simpleTexturesEnable                   | bool                              |             |
| simpleVertexShaderEnable               | bool                              |             |
| pseudoInstancingEnable                 | bool                              |             |
| statesEnable                           | bool                              |             |
| pixelConstantsEnable                   | bool                              |             |
| vertexConstantsEnable                  | bool                              |             |
| pixelConstantRedundancyCheckingEnable  | bool                              |             |
| vertexConstantRedundancyCheckingEnable | bool                              |             |
| simpleTextureFilteringEnable           | bool                              |             |
| depthWriteEnable                       | bool                              |             |
| dispatchDirectEnable                   | bool                              |             |
| drawTileClassifiedBlocks               | bool                              |             |
| depthEnable                            | bool                              |             |
| drawStreamedTextureBlocks              | bool                              |             |
| forcePointFiltering                    | bool                              |             |
| logEnable                              | bool                              |             |
| zeroViewportEnable                     | bool                              |             |
| drawTransparentDecal                   | bool                              |             |
| singleFrameLogEnable                   | bool                              |             |
| singleFrameLogOverwrite                | bool                              |             |
| forceDoubleSided                       | bool                              |             |
| onDemandMonitoringEnable               | bool                              |             |
| ps3PixelShaderRedundancyCheckingEnable | bool                              |             |
| ps3PixelShaderHashStoreEnable          | bool                              |             |
| ps3DispatchPrepareSpuJobEnable         | bool                              |             |
| ps3DispatchSetupSpuJobEnable           | bool                              |             |
| ps3GeometryJobEnable                   | bool                              |             |
| databaseLoadingEnable                  | bool                              |             |
| simplePixelShaderEnable                | bool                              |             |
| ps3GeometryJobWithoutDispatchJobEnable | bool                              |             |
| ps3GeometryDebugRenderEnable           | bool                              |             |
| boneConstantOptimizationEnable         | bool                              |             |
| ps3DrawEdgeGeometryEnable              | bool                              |             |
| ps3DrawNonEdgeGeometryEnable           | bool                              |             |
| ps3TriangleCullEnable                  | bool                              |             |
| ps3TriangleFrustumCullEnable           | bool                              |             |
| ps3TriangleBackfaceCullEnable          | bool                              |             |
| ps3TriangleCullZPassEnable             | bool                              |             |
| ps3TriangleCullDoubleSidedEnable       | bool                              |             |
| ps3TriangleCull1BoneSkinningEnable     | bool                              |             |
| ps3TriangleCull4BoneSkinningEnable     | bool                              |             |
| ps3TrianglePartCullEnable              | bool                              |             |
| ps3DrawBlockCullEnable                 | bool                              |             |
| ps3PartitionFrustumCullEnable          | bool                              |             |
| ps3PartitionClipPlaneCullEnable        | bool                              |             |
| ps3PartitionVolumeCullEnable           | bool                              |             |
| ps3SpuInstancingEnable                 | bool                              |             |
| ps3SpuClipPlaneRejectEnable            | bool                              |             |
| ps3SpuCullVolumesEnable                | bool                              |             |
| ps3DispatchJobEnable                   | bool                              |             |
| onDemandBuildingEnable                 | bool                              |             |
| onDemandPrimingEnable                  | bool                              |             |
| dispatchExecuteEnable                  | bool                              |             |
| textureGammaCorrectionEnable           | bool                              |             |
| tileClassificationEnable               | bool                              |             |
| ps3DispatchSpuBufferLinkingEnable      | bool                              |             |
| ps3DispatchFrameBlockEnable            | bool                              |             |
| ps3SCullEnable                         | bool                              |             |
| ps3ZCullEnable                         | bool                              |             |
| drawInstancedBlocks                    | bool                              |             |
| dispatchPrepareBlockEnable             | bool                              |             |
| drawNonInstancedBlocks                 | bool                              |             |
| drawNonStreamedTextureBlocks           | bool                              |             |
| ps3TxpDemotionEnable                   | bool                              |             |
| ps3CmdBufVertexShaderInlineEnable      | bool                              |             |
| ps3CmdBufClearEnable                   | bool                              |             |
| ps3SpuYieldingEnable                   | bool                              |             |
| xenonDispatchJobEnable                 | bool                              |             |
| drawInlineBlocks                       | bool                              |             |
| ps3FlushEnable                         | bool                              |             |
| ps3FinishEnable                        | bool                              |             |
| dxMultisampleEnable                    | bool                              |             |
| dxTransparencySupersamplingEnable      | bool                              |             |
| dxSamplerStatesEnable                  | bool                              |             |
| dxBatchedSamplerStatesEnable           | bool                              |             |
| dxBatchedTexturesEnable                | bool                              |             |
| dxStatesEnable                         | bool                              |             |
| drawOpaqueAlphaTestSimple              | bool                              |             |
| flushEnable                            | bool                              |             |
| drawTransparent                        | bool                              |             |
| drawAdvancedStats                      | bool                              |             |
| dxParallelShaderLoadingEnable          | bool                              |             |
| dxDelayedShaderLoadingEnable           | bool                              |             |
| drawOpaque                             | bool                              |             |
| drawOpaqueAlphaTest                    | bool                              |             |
| xenonHiZEnable                         | bool                              |             |
| drawZOnly                              | bool                              |             |
| drawStats                              | bool                              |             |
| xenonDispatchBlockOnCmdBufEnable       | bool                              |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [ShaderSystemSettings](ShaderSystemSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ShaderSystemSettings](ShaderSystemSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
