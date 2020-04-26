---
title: AudioSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AudioSettings](#constructor-0)**() |
| **[AudioSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AudioSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "waveCacheSize" >}} | int |
| {{< prop "waveCacheHeadroom" >}} | int |
| {{< prop "waveCachePruneTimeLimit" >}} | float |
| {{< prop "waveCacheRsxSize" >}} | int |
| {{< prop "waveCacheRsxPruneTimeLimit" >}} | float |
| {{< prop "waveCacheMaxReadIssueCount" >}} | int |
| {{< prop "waveCacheMaxReadActiveCount" >}} | int |
| {{< prop "audioCoreCpuLoadLimit" >}} | float |
| {{< prop "audioCoreCpuLoadRecovery" >}} | float |
| {{< prop "audioCoreThread" >}} | int |
| {{< prop "audioCoreMixJobThreadCount" >}} | int |
| {{< prop "audioCoreMaxMixJobThreadCount" >}} | int |
| {{< prop "maxAudibleSoundCount" >}} | int |
| {{< prop "audioCoreMinProcStageVoicesToGoWide" >}} | int |
| {{< prop "delayLineAllocSize" >}} | int |
| {{< prop "reverbAllocSize" >}} | int |
| {{< prop "audioCoreMultipleMixJobsEnabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioSettings {#constructor-0}

> **AudioSettings**()

Creates a new [AudioSettings](/vext/ref/fb/audiosettings) frostbite instance.

### AudioSettings {#constructor-1}

> **AudioSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioSettings](/vext/ref/fb/audiosettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AudioSettings {#constructor-2}

> **AudioSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AudioSettings](/vext/ref/fb/audiosettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AudioSettings](/vext/ref/fb/audiosettings). |

## Properties

### {{% prop-heading "waveCacheSize" %}}

> **int**

### {{% prop-heading "waveCacheHeadroom" %}}

> **int**

### {{% prop-heading "waveCachePruneTimeLimit" %}}

> **float**

### {{% prop-heading "waveCacheRsxSize" %}}

> **int**

### {{% prop-heading "waveCacheRsxPruneTimeLimit" %}}

> **float**

### {{% prop-heading "waveCacheMaxReadIssueCount" %}}

> **int**

### {{% prop-heading "waveCacheMaxReadActiveCount" %}}

> **int**

### {{% prop-heading "audioCoreCpuLoadLimit" %}}

> **float**

### {{% prop-heading "audioCoreCpuLoadRecovery" %}}

> **float**

### {{% prop-heading "audioCoreThread" %}}

> **int**

### {{% prop-heading "audioCoreMixJobThreadCount" %}}

> **int**

### {{% prop-heading "audioCoreMaxMixJobThreadCount" %}}

> **int**

### {{% prop-heading "maxAudibleSoundCount" %}}

> **int**

### {{% prop-heading "audioCoreMinProcStageVoicesToGoWide" %}}

> **int**

### {{% prop-heading "delayLineAllocSize" %}}

> **int**

### {{% prop-heading "reverbAllocSize" %}}

> **int**

### {{% prop-heading "audioCoreMultipleMixJobsEnabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioSettings](/vext/ref/fb/audiosettings) type.

