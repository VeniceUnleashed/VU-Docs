---
title: MasterUnitNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MasterUnitNodeData()                                                          | Create a new instance of this container type.                                                                               |
| MasterUnitNodeData(MasterUnitNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MasterUnitNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [MasterUnitNodeData](MasterUnitNodeData).            |
| MasterUnitNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MasterUnitNodeData](MasterUnitNodeData). |

## Properties

| Name                   | Type                                         | Description |
| ---------------------- | -------------------------------------------- | ----------- |
| settingsIndex          | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| amplitude              | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| masterGain             | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| masterLfeGain          | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| masterDialogGain       | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| mainMixGain            | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| postEffectsGain        | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| reverbGain             | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| fadeTime               | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| highPassFreq           | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| lowShelfFreq           | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| lowShelfGain           | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| highShelfFreq          | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| highShelfGain          | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| compThreshold          | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| compRatio              | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| compAttack             | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| compRelease            | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| distClipLevel          | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| parallelDistortionGain | [AudioGraphNodePort](AudioGraphNodePort)     |             |
| settings               | [MasterUnitSettings](MasterUnitSettings)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MasterUnitNodeData](MasterUnitNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MasterUnitNodeData](MasterUnitNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
