---
title: EmitterSystemSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| EmitterSystemSettings()                                                          | Create a new instance of this container type.                                                                                     |
| EmitterSystemSettings(EmitterSystemSettings other)                               | Create a reference copy of an instance of the same type.                                                                          |
| EmitterSystemSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterSystemSettings](EmitterSystemSettings). |

## Properties

| Name                            | Type   | Description |
| ------------------------------- | ------ | ----------- |
| meshDrawCountLimit              | number |             |
| timeScale                       | number |             |
| globalResetStartTimeInterval    | number |             |
| quadHalfResSlice2ThresholdLow   | number |             |
| quadHalfResSlice2ThresholdHigh  | number |             |
| quadHalfResSlice1ThresholdLow   | number |             |
| quadHalfResSlice1ThresholdHigh  | number |             |
| debugOverdrawCount              | number |             |
| drawStats                       | number |             |
| meshStreamingPriorityMultiplier | number |             |
| quadZOcclusionBias              | number |             |
| drawBoundingBoxes               | number |             |
| minScreenArea                   | number |             |
| quadNearFadeDistance            | number |             |
| quadTechnique                   | number |             |
| meshCullingDistance             | number |             |
| enableFixedTimeStep             | bool   |             |
| zBufferCullEnable               | bool   |             |
| quadEnableOverdrawRendering     | bool   |             |
| quadColorShaderCostsEnable      | bool   |             |
| drawProjectedBoxes              | bool   |             |
| quadSimpleRenderingEnable       | bool   |             |
| enableJobs                      | bool   |             |
| enableRendering                 | bool   |             |
| quadHalfResEnable               | bool   |             |
| quadEnableRendering             | bool   |             |
| enableFixedDelta                | bool   |             |
| quadClipScaleEnable             | bool   |             |
| quadNiceRenderingEnable         | bool   |             |
| quadGroupsJoinAll               | bool   |             |
| quadGroupsJoinNone              | bool   |             |
| quadGroupsJoinNiceAndSimple     | bool   |             |
| quadEnableOpaque                | bool   |             |
| quadVertexShadowsEnable         | bool   |             |
| quadPointLightsEnable           | bool   |             |
| quadSpotLightsEnable            | bool   |             |
| quadEnableSorting               | bool   |             |
| meshRenderingEnable             | bool   |             |
| meshDrawTransforms              | bool   |             |
| meshDrawBoundingBoxes           | bool   |             |
| meshShadowEnable                | bool   |             |
| quadEnableWireframe             | bool   |             |
| enable                          | bool   |             |
| quadEnableZOcclusion            | bool   |             |
| meshDrawCullStats               | bool   |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [EmitterSystemSettings](EmitterSystemSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EmitterSystemSettings](EmitterSystemSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
