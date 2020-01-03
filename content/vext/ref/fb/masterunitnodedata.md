---
title: MasterUnitNodeData
---
### Base Classes

[AudioGraphNodeData](/vext/ref/fb/audiographnodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| MasterUnitNodeData()                                                          | Create a new instance of this container type.                                                                               |
| MasterUnitNodeData(MasterUnitNodeData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| MasterUnitNodeData([AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) other)            | Upcast an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata/) to [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata/).            |
| MasterUnitNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata/). |

## Properties

| Name                   | Type                                         | Description |
| ---------------------- | -------------------------------------------- | ----------- |
| settingsIndex          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| amplitude              | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| masterGain             | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| masterLfeGain          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| masterDialogGain       | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| mainMixGain            | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| postEffectsGain        | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| reverbGain             | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| fadeTime               | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| highPassFreq           | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| lowShelfFreq           | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| lowShelfGain           | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| highShelfFreq          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| highShelfGain          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| compThreshold          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| compRatio              | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| compAttack             | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| compRelease            | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| distClipLevel          | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| parallelDistortionGain | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport/)     |             |
| settings               | [MasterUnitSettings](/vext/ref/fb/masterunitsettings/)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MasterUnitNodeData](/vext/ref/fb/masterunitnodedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
