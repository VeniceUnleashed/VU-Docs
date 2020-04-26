---
title: ShaderSystemSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[ShaderSystemSettings](#constructor-0)**() |
| **[ShaderSystemSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ShaderSystemSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "debugNonFiniteColor" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "dxInstancingBufferHandlingMethod" >}} | int |
| {{< prop "frameMemoryBufferSize" >}} | int |
| {{< prop "xenonDispatchCmdBufferSize" >}} | int |
| {{< prop "xenonDispatchCmdBufferSegmentSize" >}} | int |
| {{< prop "dxDispatchJobBlocksPerCommandList" >}} | int |
| {{< prop "dxDispatchJobMinBlockCount" >}} | int |
| {{< prop "dxFrameVertexBufferPoolSize" >}} | int |
| {{< prop "xenonDispatchOnlyJob" >}} | int |
| {{< prop "dxVsExternalConstantBufferSize" >}} | int |
| {{< prop "dxVsFunctionConstantBufferSize" >}} | int |
| {{< prop "dxPsFunctionConstantBufferSize" >}} | int |
| {{< prop "ps3GeometryYieldGranularity" >}} | float |
| {{< prop "xenonDispatchJobCount" >}} | int |
| {{< prop "dispatchPrepareJobCount" >}} | int |
| {{< prop "ps3MinMipmap" >}} | int |
| {{< prop "ps3ZCullInFrontLimit" >}} | int |
| {{< prop "ps3ZCullBehindLimit" >}} | int |
| {{< prop "ps3DispatchOnlyJob" >}} | int |
| {{< prop "ps3DispatchJobSpuCount" >}} | int |
| {{< prop "dxMaxInstructionCount" >}} | int |
| {{< prop "overdrawMaxLayerCount" >}} | int |
| {{< prop "ps3GeometryJobCount" >}} | int |
| {{< prop "dxMaxInstanceCount" >}} | int |
| {{< prop "ps3DispatchYieldGranularity" >}} | float |
| {{< prop "dxPsExternalConstantBufferSize" >}} | int |
| {{< prop "xenonDispatchBlocksPerJob" >}} | int |
| {{< prop "ps3DispatchJobCount" >}} | int |
| {{< prop "dxDispatchJobCount" >}} | int |
| {{< prop "drawCallMultiplier" >}} | int |
| {{< prop "ps3MaxMipmap" >}} | int |
| {{< prop "mipmapBias" >}} | float |
| {{< prop "maxAnisotropy" >}} | int |
| {{< prop "zOnlyMaxAnisotropy" >}} | int |
| {{< prop "xenonTrilinearThreshold" >}} | int |
| {{< prop "ps3DispatchJobPriority" >}} | int |
| {{< prop "xenonDispatchMinJobBlockCount" >}} | int |
| {{< prop "ps3GeometryJobSpuCount" >}} | int |
| {{< prop "ps3DispatchBlocksPerJob" >}} | int |
| {{< prop "ps3GeometryJobPriority" >}} | int |
| {{< prop "singlePrimitiveEnable" >}} | bool |
| {{< prop "sortBlocksEnable" >}} | bool |
| {{< prop "drawCallEnable" >}} | bool |
| {{< prop "gcmReplayMarkersEnable" >}} | bool |
| {{< prop "clipPlanesEnable" >}} | bool |
| {{< prop "depthTestEnable" >}} | bool |
| {{< prop "stencilEnable" >}} | bool |
| {{< prop "shaderPixScopeEnable" >}} | bool |
| {{< prop "singleFrameBlockLogEnable" >}} | bool |
| {{< prop "alphaBlendEnable" >}} | bool |
| {{< prop "pixBlockEventsEnable" >}} | bool |
| {{< prop "simpleTexturesEnable" >}} | bool |
| {{< prop "simpleVertexShaderEnable" >}} | bool |
| {{< prop "pseudoInstancingEnable" >}} | bool |
| {{< prop "statesEnable" >}} | bool |
| {{< prop "pixelConstantsEnable" >}} | bool |
| {{< prop "vertexConstantsEnable" >}} | bool |
| {{< prop "pixelConstantRedundancyCheckingEnable" >}} | bool |
| {{< prop "vertexConstantRedundancyCheckingEnable" >}} | bool |
| {{< prop "simpleTextureFilteringEnable" >}} | bool |
| {{< prop "depthWriteEnable" >}} | bool |
| {{< prop "dispatchDirectEnable" >}} | bool |
| {{< prop "drawTileClassifiedBlocks" >}} | bool |
| {{< prop "depthEnable" >}} | bool |
| {{< prop "drawStreamedTextureBlocks" >}} | bool |
| {{< prop "forcePointFiltering" >}} | bool |
| {{< prop "logEnable" >}} | bool |
| {{< prop "zeroViewportEnable" >}} | bool |
| {{< prop "drawTransparentDecal" >}} | bool |
| {{< prop "singleFrameLogEnable" >}} | bool |
| {{< prop "singleFrameLogOverwrite" >}} | bool |
| {{< prop "forceDoubleSided" >}} | bool |
| {{< prop "onDemandMonitoringEnable" >}} | bool |
| {{< prop "ps3PixelShaderRedundancyCheckingEnable" >}} | bool |
| {{< prop "ps3PixelShaderHashStoreEnable" >}} | bool |
| {{< prop "ps3DispatchPrepareSpuJobEnable" >}} | bool |
| {{< prop "ps3DispatchSetupSpuJobEnable" >}} | bool |
| {{< prop "ps3GeometryJobEnable" >}} | bool |
| {{< prop "databaseLoadingEnable" >}} | bool |
| {{< prop "simplePixelShaderEnable" >}} | bool |
| {{< prop "ps3GeometryJobWithoutDispatchJobEnable" >}} | bool |
| {{< prop "ps3GeometryDebugRenderEnable" >}} | bool |
| {{< prop "boneConstantOptimizationEnable" >}} | bool |
| {{< prop "ps3DrawEdgeGeometryEnable" >}} | bool |
| {{< prop "ps3DrawNonEdgeGeometryEnable" >}} | bool |
| {{< prop "ps3TriangleCullEnable" >}} | bool |
| {{< prop "ps3TriangleFrustumCullEnable" >}} | bool |
| {{< prop "ps3TriangleBackfaceCullEnable" >}} | bool |
| {{< prop "ps3TriangleCullZPassEnable" >}} | bool |
| {{< prop "ps3TriangleCullDoubleSidedEnable" >}} | bool |
| {{< prop "ps3TriangleCull1BoneSkinningEnable" >}} | bool |
| {{< prop "ps3TriangleCull4BoneSkinningEnable" >}} | bool |
| {{< prop "ps3TrianglePartCullEnable" >}} | bool |
| {{< prop "ps3DrawBlockCullEnable" >}} | bool |
| {{< prop "ps3PartitionFrustumCullEnable" >}} | bool |
| {{< prop "ps3PartitionClipPlaneCullEnable" >}} | bool |
| {{< prop "ps3PartitionVolumeCullEnable" >}} | bool |
| {{< prop "ps3SpuInstancingEnable" >}} | bool |
| {{< prop "ps3SpuClipPlaneRejectEnable" >}} | bool |
| {{< prop "ps3SpuCullVolumesEnable" >}} | bool |
| {{< prop "ps3DispatchJobEnable" >}} | bool |
| {{< prop "onDemandBuildingEnable" >}} | bool |
| {{< prop "onDemandPrimingEnable" >}} | bool |
| {{< prop "dispatchExecuteEnable" >}} | bool |
| {{< prop "textureGammaCorrectionEnable" >}} | bool |
| {{< prop "tileClassificationEnable" >}} | bool |
| {{< prop "ps3DispatchSpuBufferLinkingEnable" >}} | bool |
| {{< prop "ps3DispatchFrameBlockEnable" >}} | bool |
| {{< prop "ps3SCullEnable" >}} | bool |
| {{< prop "ps3ZCullEnable" >}} | bool |
| {{< prop "drawInstancedBlocks" >}} | bool |
| {{< prop "dispatchPrepareBlockEnable" >}} | bool |
| {{< prop "drawNonInstancedBlocks" >}} | bool |
| {{< prop "drawNonStreamedTextureBlocks" >}} | bool |
| {{< prop "ps3TxpDemotionEnable" >}} | bool |
| {{< prop "ps3CmdBufVertexShaderInlineEnable" >}} | bool |
| {{< prop "ps3CmdBufClearEnable" >}} | bool |
| {{< prop "ps3SpuYieldingEnable" >}} | bool |
| {{< prop "xenonDispatchJobEnable" >}} | bool |
| {{< prop "drawInlineBlocks" >}} | bool |
| {{< prop "ps3FlushEnable" >}} | bool |
| {{< prop "ps3FinishEnable" >}} | bool |
| {{< prop "dxMultisampleEnable" >}} | bool |
| {{< prop "dxTransparencySupersamplingEnable" >}} | bool |
| {{< prop "dxSamplerStatesEnable" >}} | bool |
| {{< prop "dxBatchedSamplerStatesEnable" >}} | bool |
| {{< prop "dxBatchedTexturesEnable" >}} | bool |
| {{< prop "dxStatesEnable" >}} | bool |
| {{< prop "drawOpaqueAlphaTestSimple" >}} | bool |
| {{< prop "flushEnable" >}} | bool |
| {{< prop "drawTransparent" >}} | bool |
| {{< prop "drawAdvancedStats" >}} | bool |
| {{< prop "dxParallelShaderLoadingEnable" >}} | bool |
| {{< prop "dxDelayedShaderLoadingEnable" >}} | bool |
| {{< prop "drawOpaque" >}} | bool |
| {{< prop "drawOpaqueAlphaTest" >}} | bool |
| {{< prop "xenonHiZEnable" >}} | bool |
| {{< prop "drawZOnly" >}} | bool |
| {{< prop "drawStats" >}} | bool |
| {{< prop "xenonDispatchBlockOnCmdBufEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ShaderSystemSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ShaderSystemSettings {#constructor-0}

> **ShaderSystemSettings**()

Creates a new [ShaderSystemSettings](/vext/ref/fb/shadersystemsettings) frostbite instance.

### ShaderSystemSettings {#constructor-1}

> **ShaderSystemSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ShaderSystemSettings](/vext/ref/fb/shadersystemsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ShaderSystemSettings {#constructor-2}

> **ShaderSystemSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ShaderSystemSettings](/vext/ref/fb/shadersystemsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ShaderSystemSettings](/vext/ref/fb/shadersystemsettings). |

## Properties

### {{% prop-heading "debugNonFiniteColor" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "dxInstancingBufferHandlingMethod" %}}

> **int**

### {{% prop-heading "frameMemoryBufferSize" %}}

> **int**

### {{% prop-heading "xenonDispatchCmdBufferSize" %}}

> **int**

### {{% prop-heading "xenonDispatchCmdBufferSegmentSize" %}}

> **int**

### {{% prop-heading "dxDispatchJobBlocksPerCommandList" %}}

> **int**

### {{% prop-heading "dxDispatchJobMinBlockCount" %}}

> **int**

### {{% prop-heading "dxFrameVertexBufferPoolSize" %}}

> **int**

### {{% prop-heading "xenonDispatchOnlyJob" %}}

> **int**

### {{% prop-heading "dxVsExternalConstantBufferSize" %}}

> **int**

### {{% prop-heading "dxVsFunctionConstantBufferSize" %}}

> **int**

### {{% prop-heading "dxPsFunctionConstantBufferSize" %}}

> **int**

### {{% prop-heading "ps3GeometryYieldGranularity" %}}

> **float**

### {{% prop-heading "xenonDispatchJobCount" %}}

> **int**

### {{% prop-heading "dispatchPrepareJobCount" %}}

> **int**

### {{% prop-heading "ps3MinMipmap" %}}

> **int**

### {{% prop-heading "ps3ZCullInFrontLimit" %}}

> **int**

### {{% prop-heading "ps3ZCullBehindLimit" %}}

> **int**

### {{% prop-heading "ps3DispatchOnlyJob" %}}

> **int**

### {{% prop-heading "ps3DispatchJobSpuCount" %}}

> **int**

### {{% prop-heading "dxMaxInstructionCount" %}}

> **int**

### {{% prop-heading "overdrawMaxLayerCount" %}}

> **int**

### {{% prop-heading "ps3GeometryJobCount" %}}

> **int**

### {{% prop-heading "dxMaxInstanceCount" %}}

> **int**

### {{% prop-heading "ps3DispatchYieldGranularity" %}}

> **float**

### {{% prop-heading "dxPsExternalConstantBufferSize" %}}

> **int**

### {{% prop-heading "xenonDispatchBlocksPerJob" %}}

> **int**

### {{% prop-heading "ps3DispatchJobCount" %}}

> **int**

### {{% prop-heading "dxDispatchJobCount" %}}

> **int**

### {{% prop-heading "drawCallMultiplier" %}}

> **int**

### {{% prop-heading "ps3MaxMipmap" %}}

> **int**

### {{% prop-heading "mipmapBias" %}}

> **float**

### {{% prop-heading "maxAnisotropy" %}}

> **int**

### {{% prop-heading "zOnlyMaxAnisotropy" %}}

> **int**

### {{% prop-heading "xenonTrilinearThreshold" %}}

> **int**

### {{% prop-heading "ps3DispatchJobPriority" %}}

> **int**

### {{% prop-heading "xenonDispatchMinJobBlockCount" %}}

> **int**

### {{% prop-heading "ps3GeometryJobSpuCount" %}}

> **int**

### {{% prop-heading "ps3DispatchBlocksPerJob" %}}

> **int**

### {{% prop-heading "ps3GeometryJobPriority" %}}

> **int**

### {{% prop-heading "singlePrimitiveEnable" %}}

> **bool**

### {{% prop-heading "sortBlocksEnable" %}}

> **bool**

### {{% prop-heading "drawCallEnable" %}}

> **bool**

### {{% prop-heading "gcmReplayMarkersEnable" %}}

> **bool**

### {{% prop-heading "clipPlanesEnable" %}}

> **bool**

### {{% prop-heading "depthTestEnable" %}}

> **bool**

### {{% prop-heading "stencilEnable" %}}

> **bool**

### {{% prop-heading "shaderPixScopeEnable" %}}

> **bool**

### {{% prop-heading "singleFrameBlockLogEnable" %}}

> **bool**

### {{% prop-heading "alphaBlendEnable" %}}

> **bool**

### {{% prop-heading "pixBlockEventsEnable" %}}

> **bool**

### {{% prop-heading "simpleTexturesEnable" %}}

> **bool**

### {{% prop-heading "simpleVertexShaderEnable" %}}

> **bool**

### {{% prop-heading "pseudoInstancingEnable" %}}

> **bool**

### {{% prop-heading "statesEnable" %}}

> **bool**

### {{% prop-heading "pixelConstantsEnable" %}}

> **bool**

### {{% prop-heading "vertexConstantsEnable" %}}

> **bool**

### {{% prop-heading "pixelConstantRedundancyCheckingEnable" %}}

> **bool**

### {{% prop-heading "vertexConstantRedundancyCheckingEnable" %}}

> **bool**

### {{% prop-heading "simpleTextureFilteringEnable" %}}

> **bool**

### {{% prop-heading "depthWriteEnable" %}}

> **bool**

### {{% prop-heading "dispatchDirectEnable" %}}

> **bool**

### {{% prop-heading "drawTileClassifiedBlocks" %}}

> **bool**

### {{% prop-heading "depthEnable" %}}

> **bool**

### {{% prop-heading "drawStreamedTextureBlocks" %}}

> **bool**

### {{% prop-heading "forcePointFiltering" %}}

> **bool**

### {{% prop-heading "logEnable" %}}

> **bool**

### {{% prop-heading "zeroViewportEnable" %}}

> **bool**

### {{% prop-heading "drawTransparentDecal" %}}

> **bool**

### {{% prop-heading "singleFrameLogEnable" %}}

> **bool**

### {{% prop-heading "singleFrameLogOverwrite" %}}

> **bool**

### {{% prop-heading "forceDoubleSided" %}}

> **bool**

### {{% prop-heading "onDemandMonitoringEnable" %}}

> **bool**

### {{% prop-heading "ps3PixelShaderRedundancyCheckingEnable" %}}

> **bool**

### {{% prop-heading "ps3PixelShaderHashStoreEnable" %}}

> **bool**

### {{% prop-heading "ps3DispatchPrepareSpuJobEnable" %}}

> **bool**

### {{% prop-heading "ps3DispatchSetupSpuJobEnable" %}}

> **bool**

### {{% prop-heading "ps3GeometryJobEnable" %}}

> **bool**

### {{% prop-heading "databaseLoadingEnable" %}}

> **bool**

### {{% prop-heading "simplePixelShaderEnable" %}}

> **bool**

### {{% prop-heading "ps3GeometryJobWithoutDispatchJobEnable" %}}

> **bool**

### {{% prop-heading "ps3GeometryDebugRenderEnable" %}}

> **bool**

### {{% prop-heading "boneConstantOptimizationEnable" %}}

> **bool**

### {{% prop-heading "ps3DrawEdgeGeometryEnable" %}}

> **bool**

### {{% prop-heading "ps3DrawNonEdgeGeometryEnable" %}}

> **bool**

### {{% prop-heading "ps3TriangleCullEnable" %}}

> **bool**

### {{% prop-heading "ps3TriangleFrustumCullEnable" %}}

> **bool**

### {{% prop-heading "ps3TriangleBackfaceCullEnable" %}}

> **bool**

### {{% prop-heading "ps3TriangleCullZPassEnable" %}}

> **bool**

### {{% prop-heading "ps3TriangleCullDoubleSidedEnable" %}}

> **bool**

### {{% prop-heading "ps3TriangleCull1BoneSkinningEnable" %}}

> **bool**

### {{% prop-heading "ps3TriangleCull4BoneSkinningEnable" %}}

> **bool**

### {{% prop-heading "ps3TrianglePartCullEnable" %}}

> **bool**

### {{% prop-heading "ps3DrawBlockCullEnable" %}}

> **bool**

### {{% prop-heading "ps3PartitionFrustumCullEnable" %}}

> **bool**

### {{% prop-heading "ps3PartitionClipPlaneCullEnable" %}}

> **bool**

### {{% prop-heading "ps3PartitionVolumeCullEnable" %}}

> **bool**

### {{% prop-heading "ps3SpuInstancingEnable" %}}

> **bool**

### {{% prop-heading "ps3SpuClipPlaneRejectEnable" %}}

> **bool**

### {{% prop-heading "ps3SpuCullVolumesEnable" %}}

> **bool**

### {{% prop-heading "ps3DispatchJobEnable" %}}

> **bool**

### {{% prop-heading "onDemandBuildingEnable" %}}

> **bool**

### {{% prop-heading "onDemandPrimingEnable" %}}

> **bool**

### {{% prop-heading "dispatchExecuteEnable" %}}

> **bool**

### {{% prop-heading "textureGammaCorrectionEnable" %}}

> **bool**

### {{% prop-heading "tileClassificationEnable" %}}

> **bool**

### {{% prop-heading "ps3DispatchSpuBufferLinkingEnable" %}}

> **bool**

### {{% prop-heading "ps3DispatchFrameBlockEnable" %}}

> **bool**

### {{% prop-heading "ps3SCullEnable" %}}

> **bool**

### {{% prop-heading "ps3ZCullEnable" %}}

> **bool**

### {{% prop-heading "drawInstancedBlocks" %}}

> **bool**

### {{% prop-heading "dispatchPrepareBlockEnable" %}}

> **bool**

### {{% prop-heading "drawNonInstancedBlocks" %}}

> **bool**

### {{% prop-heading "drawNonStreamedTextureBlocks" %}}

> **bool**

### {{% prop-heading "ps3TxpDemotionEnable" %}}

> **bool**

### {{% prop-heading "ps3CmdBufVertexShaderInlineEnable" %}}

> **bool**

### {{% prop-heading "ps3CmdBufClearEnable" %}}

> **bool**

### {{% prop-heading "ps3SpuYieldingEnable" %}}

> **bool**

### {{% prop-heading "xenonDispatchJobEnable" %}}

> **bool**

### {{% prop-heading "drawInlineBlocks" %}}

> **bool**

### {{% prop-heading "ps3FlushEnable" %}}

> **bool**

### {{% prop-heading "ps3FinishEnable" %}}

> **bool**

### {{% prop-heading "dxMultisampleEnable" %}}

> **bool**

### {{% prop-heading "dxTransparencySupersamplingEnable" %}}

> **bool**

### {{% prop-heading "dxSamplerStatesEnable" %}}

> **bool**

### {{% prop-heading "dxBatchedSamplerStatesEnable" %}}

> **bool**

### {{% prop-heading "dxBatchedTexturesEnable" %}}

> **bool**

### {{% prop-heading "dxStatesEnable" %}}

> **bool**

### {{% prop-heading "drawOpaqueAlphaTestSimple" %}}

> **bool**

### {{% prop-heading "flushEnable" %}}

> **bool**

### {{% prop-heading "drawTransparent" %}}

> **bool**

### {{% prop-heading "drawAdvancedStats" %}}

> **bool**

### {{% prop-heading "dxParallelShaderLoadingEnable" %}}

> **bool**

### {{% prop-heading "dxDelayedShaderLoadingEnable" %}}

> **bool**

### {{% prop-heading "drawOpaque" %}}

> **bool**

### {{% prop-heading "drawOpaqueAlphaTest" %}}

> **bool**

### {{% prop-heading "xenonHiZEnable" %}}

> **bool**

### {{% prop-heading "drawZOnly" %}}

> **bool**

### {{% prop-heading "drawStats" %}}

> **bool**

### {{% prop-heading "xenonDispatchBlockOnCmdBufEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ShaderSystemSettings](/vext/ref/fb/shadersystemsettings) type.

