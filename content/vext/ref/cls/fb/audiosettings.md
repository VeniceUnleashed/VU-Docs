---
title: AudioSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| AudioSettings()                                                          | Create a new instance of this container type.                                                                     |
| AudioSettings(AudioSettings other)                                       | Create a reference copy of an instance of the same type.                                                          |
| AudioSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AudioSettings](AudioSettings). |

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
| [AudioSettings](AudioSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AudioSettings](AudioSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
