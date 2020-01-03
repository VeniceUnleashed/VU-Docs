---
title: GainNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| GainNodeData()                                                          | Create a new instance of this container type.                                                                   |
| GainNodeData(GainNodeData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| GainNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [GainNodeData](/vext/ref/fb/gainnodedata/).            |
| GainNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GainNodeData](/vext/ref/fb/gainnodedata/). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| inValue   | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| amplitude | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| out       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)   |             |
| plugin    | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref/) |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [GainNodeData](/vext/ref/fb/gainnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GainNodeData](/vext/ref/fb/gainnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
