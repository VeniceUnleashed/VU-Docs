---
title: SoundPatchAsset
---
### Base Classes

[SoundGraphAsset](/vext/ref/fb/soundgraphasset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| SoundPatchAsset()                                                          | Create a new instance of this container type.                                                                         |
| SoundPatchAsset(SoundPatchAsset other)                                     | Create a reference copy of an instance of the same type.                                                              |
| SoundPatchAsset([SoundGraphAsset](/vext/ref/fb/soundgraphasset/) other)                  | Upcast an instance of type [SoundGraphAsset](/vext/ref/fb/soundgraphasset/) to [SoundPatchAsset](/vext/ref/fb/soundpatchasset/).                  |
| SoundPatchAsset([SoundAsset](/vext/ref/fb/soundasset/) other)                            | Upcast an instance of type [SoundAsset](/vext/ref/fb/soundasset/) to [SoundPatchAsset](/vext/ref/fb/soundpatchasset/).                            |
| SoundPatchAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SoundPatchAsset](/vext/ref/fb/soundpatchasset/).                                      |
| SoundPatchAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPatchAsset](/vext/ref/fb/soundpatchasset/). |

## Properties

| Name                   | Type                                         | Description |
| ---------------------- | -------------------------------------------- | ----------- |
| outputNodes            | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)\[\] |             |
| loudness               | number                                       |             |
| aiLoudness             | number                                       |             |
| radius                 | number                                       |             |
| dopplerFactor          | number                                       |             |
| masterPitch            | number                                       |             |
| mixGroup               | [MixGroup](/vext/ref/fb/mixgroup/)                         |             |
| defaultStopEvent       | [AudioGraphEvent](/vext/ref/fb/audiographevent/)           |             |
| defaultStartEvent      | [AudioGraphEvent](/vext/ref/fb/audiographevent/)           |             |
| defaultForceInitEvent  | [AudioGraphEvent](/vext/ref/fb/audiographevent/)           |             |
| defaultEnterScopeEvent | [AudioGraphEvent](/vext/ref/fb/audiographevent/)           |             |
| isPersistent           | bool                                         |             |
| isLooping              | bool                                         |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [SoundPatchAsset](/vext/ref/fb/soundpatchasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoundPatchAsset](/vext/ref/fb/soundpatchasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
