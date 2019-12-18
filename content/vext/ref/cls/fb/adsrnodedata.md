---
title: AdsrNodeData (Frostbite Container)
---
### Base Classes

[AudioGraphNodeData](AudioGraphNodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| AdsrNodeData()                                                          | Create a new instance of this container type.                                                                   |
| AdsrNodeData(AdsrNodeData other)                                        | Create a reference copy of an instance of the same type.                                                        |
| AdsrNodeData([AudioGraphNodeData](AudioGraphNodeData) other)            | Upcast an instance of type [AudioGraphNodeData](AudioGraphNodeData) to [AdsrNodeData](AdsrNodeData).            |
| AdsrNodeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AdsrNodeData](AdsrNodeData). |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| trigger  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| release  | [AudioGraphNodePort](AudioGraphNodePort) |             |
| a        | [AudioGraphNodePort](AudioGraphNodePort) |             |
| d        | [AudioGraphNodePort](AudioGraphNodePort) |             |
| s        | [AudioGraphNodePort](AudioGraphNodePort) |             |
| r        | [AudioGraphNodePort](AudioGraphNodePort) |             |
| value    | [AudioGraphNodePort](AudioGraphNodePort) |             |
| finished | [AudioGraphNodePort](AudioGraphNodePort) |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [AdsrNodeData](AdsrNodeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AdsrNodeData](AdsrNodeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
