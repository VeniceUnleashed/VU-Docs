---
title: LowShelfIir2NodeData
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LowShelfIir2NodeData()                                                          | Create a new instance of this container type.                                                                                   |
| LowShelfIir2NodeData(LowShelfIir2NodeData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LowShelfIir2NodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [LowShelfIir2NodeData](LowShelfIir2NodeData).            |
| LowShelfIir2NodeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LowShelfIir2NodeData](LowShelfIir2NodeData). |

## Properties

| Name      | Type                                       | Description |
| --------- | ------------------------------------------ | ----------- |
| inValue   | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| frequency | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| amplitude | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| out       | [AudioGraphNodePort](AudioGraphNodePort)   |             |
| plugin    | [SoundGraphPluginRef](SoundGraphPluginRef) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LowShelfIir2NodeData](LowShelfIir2NodeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LowShelfIir2NodeData](LowShelfIir2NodeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
