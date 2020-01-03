---
title: SoundGraphAsset
---
### Base Classes

[SoundAsset](/vext/ref/fb/soundasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SoundGraphAsset()                                                          | Create a new instance of this container type.                                                                         |
| SoundGraphAsset(SoundGraphAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| SoundGraphAsset([SoundAsset](/vext/ref/fb/soundasset/) other)                            | Upcast an instance of type [SoundAsset](/vext/ref/fb/soundasset/) to [SoundGraphAsset](/vext/ref/fb/soundgraphasset/).                            |
| SoundGraphAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoundGraphAsset](/vext/ref/fb/soundgraphasset/).                                      |
| SoundGraphAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundGraphAsset](/vext/ref/fb/soundgraphasset/). |

## Properties

| Name  | Type                             | Description |
| ----- | -------------------------------- | ----------- |
| graph | [SoundGraphData](/vext/ref/fb/soundgraphdata/) |             |
| mixer | [MixerAsset](/vext/ref/fb/mixerasset/)         |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [SoundGraphAsset](/vext/ref/fb/soundgraphasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundGraphAsset](/vext/ref/fb/soundgraphasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
