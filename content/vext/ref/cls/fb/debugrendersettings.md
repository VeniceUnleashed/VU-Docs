---
title: DebugRenderSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| DebugRenderSettings()                                                          | Create a new instance of this container type.                                                                                 |
| DebugRenderSettings(DebugRenderSettings other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| DebugRenderSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DebugRenderSettings](DebugRenderSettings). |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| textQueueTimeVisible       | number |             |
| ps3SpuFrameBufferSize      | number |             |
| textViewDistance           | number |             |
| textQueueMaxLineCount      | number |             |
| dxMaxVertexCount           | number |             |
| processJobCount            | number |             |
| drawStatsEnable            | bool   |             |
| ps3SpuEnable               | bool   |             |
| enable                     | bool   |             |
| textQueueLocationTop       | bool   |             |
| dxLine2dAntialiasingEnable | bool   |             |
| dxLine3dAntialiasingEnable | bool   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [DebugRenderSettings](DebugRenderSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DebugRenderSettings](DebugRenderSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
