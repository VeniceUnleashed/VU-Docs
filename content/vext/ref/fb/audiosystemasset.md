---
title: AudioSystemAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| AudioSystemAsset()                                                          | Create a new instance of this container type.                                                                           |
| AudioSystemAsset(AudioSystemAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| AudioSystemAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AudioSystemAsset](/vext/ref/fb/audiosystemasset/).                                      |
| AudioSystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioSystemAsset](/vext/ref/fb/audiosystemasset/). |

## Properties

| Name             | Type                                                 | Description |
| ---------------- | ---------------------------------------------------- | ----------- |
| masterPatch      | [SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset/)       |             |
| defaultWave      | [SoundWaveAsset](/vext/ref/fb/soundwaveasset/)                     |             |
| streamPools      | [StreamPoolAsset](/vext/ref/fb/streampoolasset/)\[\]               |             |
| sampleRate       | number                                               |             |
| soundSpeed       | number                                               |             |
| dopplerFactor    | number                                               |             |
| tests            | [SoundTestAsset](/vext/ref/fb/soundtestasset/)                     |             |
| mixerSystem      | [MixerSystemAsset](/vext/ref/fb/mixersystemasset/)                 |             |
| languages        | [AudioLanguage](/vext/ref/fb/audiolanguage/)\[\]                   |             |
| languageSettings | [AudioLanguageSetting](/vext/ref/fb/audiolanguagesetting/)\[\]     |             |
| defaultLanguage  | [AudioLanguage](/vext/ref/fb/audiolanguage/)                       |             |
| scopes           | [SoundScopeData](/vext/ref/fb/soundscopedata/)\[\]                 |             |
| scopeStrategies  | [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata/)\[\] |             |
| scopeSetups      | [SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata/)\[\]       |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [AudioSystemAsset](/vext/ref/fb/audiosystemasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioSystemAsset](/vext/ref/fb/audiosystemasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
