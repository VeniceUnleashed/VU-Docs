---
title: AudioSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AudioSettings()                                                          | Create a new instance of this container type.                                                                     |
| AudioSettings(AudioSettings other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AudioSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AudioSettings](/vext/ref/fb/audiosettings/). |

## Properties

| Name                                | Type   | Description |
| ----------------------------------- | ------ | ----------- |
| waveCacheSize                       | number |             |
| waveCacheHeadroom                   | number |             |
| waveCachePruneTimeLimit             | number |             |
| waveCacheRsxSize                    | number |             |
| waveCacheRsxPruneTimeLimit          | number |             |
| waveCacheMaxReadIssueCount          | number |             |
| waveCacheMaxReadActiveCount         | number |             |
| audioCoreCpuLoadLimit               | number |             |
| audioCoreCpuLoadRecovery            | number |             |
| audioCoreThread                     | number |             |
| audioCoreMixJobThreadCount          | number |             |
| audioCoreMaxMixJobThreadCount       | number |             |
| maxAudibleSoundCount                | number |             |
| audioCoreMinProcStageVoicesToGoWide | number |             |
| delayLineAllocSize                  | number |             |
| reverbAllocSize                     | number |             |
| audioCoreMultipleMixJobsEnabled     | bool   |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [AudioSettings](/vext/ref/fb/audiosettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AudioSettings](/vext/ref/fb/audiosettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
