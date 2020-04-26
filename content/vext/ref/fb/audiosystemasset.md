---
title: AudioSystemAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[AudioSystemAsset](#constructor-0)**() |
| **[AudioSystemAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AudioSystemAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AudioSystemAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "masterPatch" >}} | [SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset) \| nil |
| {{< prop "defaultWave" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset) \| nil |
| {{< prop "streamPools" >}} | [StreamPoolAsset](/vext/ref/fb/streampoolasset)[] |
| {{< prop "sampleRate" >}} | int |
| {{< prop "soundSpeed" >}} | float |
| {{< prop "dopplerFactor" >}} | float |
| {{< prop "tests" >}} | [SoundTestAsset](/vext/ref/fb/soundtestasset) \| nil |
| {{< prop "mixerSystem" >}} | [MixerSystemAsset](/vext/ref/fb/mixersystemasset) \| nil |
| {{< prop "languages" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage)[] |
| {{< prop "languageSettings" >}} | [AudioLanguageSetting](/vext/ref/fb/audiolanguagesetting)[] |
| {{< prop "defaultLanguage" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "scopes" >}} | [SoundScopeData](/vext/ref/fb/soundscopedata)[] |
| {{< prop "scopeStrategies" >}} | [SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)[] |
| {{< prop "scopeSetups" >}} | [SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioSystemAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioSystemAsset {#constructor-0}

> **AudioSystemAsset**()

Creates a new [AudioSystemAsset](/vext/ref/fb/audiosystemasset) frostbite instance.

### AudioSystemAsset {#constructor-1}

> **AudioSystemAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioSystemAsset](/vext/ref/fb/audiosystemasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AudioSystemAsset {#constructor-2}

> **AudioSystemAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AudioSystemAsset](/vext/ref/fb/audiosystemasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AudioSystemAsset](/vext/ref/fb/audiosystemasset). |

### AudioSystemAsset {#constructor-3}

> **AudioSystemAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AudioSystemAsset](/vext/ref/fb/audiosystemasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AudioSystemAsset](/vext/ref/fb/audiosystemasset). |

## Properties

### {{% prop-heading "masterPatch" %}}

> **[SoundMasterPatchAsset](/vext/ref/fb/soundmasterpatchasset)** \| **nil**

### {{% prop-heading "defaultWave" %}}

> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)** \| **nil**

### {{% prop-heading "streamPools" %}}

> **[StreamPoolAsset](/vext/ref/fb/streampoolasset)**[]

### {{% prop-heading "sampleRate" %}}

> **int**

### {{% prop-heading "soundSpeed" %}}

> **float**

### {{% prop-heading "dopplerFactor" %}}

> **float**

### {{% prop-heading "tests" %}}

> **[SoundTestAsset](/vext/ref/fb/soundtestasset)** \| **nil**

### {{% prop-heading "mixerSystem" %}}

> **[MixerSystemAsset](/vext/ref/fb/mixersystemasset)** \| **nil**

### {{% prop-heading "languages" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)**[]

### {{% prop-heading "languageSettings" %}}

> **[AudioLanguageSetting](/vext/ref/fb/audiolanguagesetting)**[]

### {{% prop-heading "defaultLanguage" %}}

> **[AudioLanguage](/vext/ref/fb/audiolanguage)** \| **nil**

### {{% prop-heading "scopes" %}}

> **[SoundScopeData](/vext/ref/fb/soundscopedata)**[]

### {{% prop-heading "scopeStrategies" %}}

> **[SoundScopeStrategyData](/vext/ref/fb/soundscopestrategydata)**[]

### {{% prop-heading "scopeSetups" %}}

> **[SoundScopeSetupData](/vext/ref/fb/soundscopesetupdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioSystemAsset](/vext/ref/fb/audiosystemasset) type.

