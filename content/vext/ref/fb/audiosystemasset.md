---
title: AudioSystemAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| AudioSystemAsset()                                                          | Create a new instance of this container type.                                                                           |
| AudioSystemAsset(AudioSystemAsset other)                                    | Create a reference copy of an instance of the same type.                                                                |
| AudioSystemAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AudioSystemAsset](AudioSystemAsset).                                      |
| AudioSystemAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioSystemAsset](AudioSystemAsset). |

## Properties

| Name             | Type                                                 | Description |
| ---------------- | ---------------------------------------------------- | ----------- |
| masterPatch      | [SoundMasterPatchAsset](SoundMasterPatchAsset)       |             |
| defaultWave      | [SoundWaveAsset](SoundWaveAsset)                     |             |
| streamPools      | [StreamPoolAsset](StreamPoolAsset)\[\]               |             |
| sampleRate       | number                                               |             |
| soundSpeed       | number                                               |             |
| dopplerFactor    | number                                               |             |
| tests            | [SoundTestAsset](SoundTestAsset)                     |             |
| mixerSystem      | [MixerSystemAsset](MixerSystemAsset)                 |             |
| languages        | [AudioLanguage](AudioLanguage)\[\]                   |             |
| languageSettings | [AudioLanguageSetting](AudioLanguageSetting)\[\]     |             |
| defaultLanguage  | [AudioLanguage](AudioLanguage)                       |             |
| scopes           | [SoundScopeData](SoundScopeData)\[\]                 |             |
| scopeStrategies  | [SoundScopeStrategyData](SoundScopeStrategyData)\[\] |             |
| scopeSetups      | [SoundScopeSetupData](SoundScopeSetupData)\[\]       |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [AudioSystemAsset](AudioSystemAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioSystemAsset](AudioSystemAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
