---
title: FrequencyShiftSsbNodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| FrequencyShiftSsbNodeData()                                                          | Create a new instance of this container type.                                                                                             |
| FrequencyShiftSsbNodeData(FrequencyShiftSsbNodeData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| FrequencyShiftSsbNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [FrequencyShiftSsbNodeData](FrequencyShiftSsbNodeData).            |
| FrequencyShiftSsbNodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FrequencyShiftSsbNodeData](FrequencyShiftSsbNodeData). |

## Properties

| Name      | Type                                               | Description |
| --------- | -------------------------------------------------- | ----------- |
| inValue   | [AudioGraphNodePort](AudioGraphNodePort)           |             |
| frequency | [AudioGraphNodePort](AudioGraphNodePort)           |             |
| out       | [AudioGraphNodePort](AudioGraphNodePort)           |             |
| filter    | [FrequencyShiftSsbFilter](FrequencyShiftSsbFilter) |             |
| plugin    | [SoundGraphPluginRef](SoundGraphPluginRef)         |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FrequencyShiftSsbNodeData](FrequencyShiftSsbNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FrequencyShiftSsbNodeData](FrequencyShiftSsbNodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
