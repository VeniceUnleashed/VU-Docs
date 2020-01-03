---
title: BusNodeData
---
### Base Classes

[SoundBusData](/vext/ref/fb/soundbusdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                            | Description                                                                                                   |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| BusNodeData()                                                          | Create a new instance of this container type.                                                                 |
| BusNodeData(BusNodeData other)                                         | Create a reference copy of an instance of the same type.                                                      |
| BusNodeData([SoundBusData](/vext/ref/fb/soundbusdata/) other)                        | Upcast an instance of type [SoundBusData](/vext/ref/fb/soundbusdata/) to [BusNodeData](/vext/ref/fb/busnodedata/).                        |
| BusNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [BusNodeData](/vext/ref/fb/busnodedata/).            |
| BusNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BusNodeData](/vext/ref/fb/busnodedata/). |

## Properties

| Name     | Type                                       | Description |
| -------- | ------------------------------------------ | ----------- |
| out      | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| vuPlugin | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                       | Name            | Parameters                                     |
| -------------------------- | --------------- | ---------------------------------------------- |
| [BusNodeData](/vext/ref/fb/busnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BusNodeData](/vext/ref/fb/busnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
