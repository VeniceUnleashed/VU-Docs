---
title: AudioGraphParameter (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| AudioGraphParameter()                                                          | Create a new instance of this container type.                                                                                 |
| AudioGraphParameter(AudioGraphParameter other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| AudioGraphParameter([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AudioGraphParameter](AudioGraphParameter). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| defaultValue | number |             |
| nameHash     | number |             |
| valueIndex   | number |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [AudioGraphParameter](AudioGraphParameter) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AudioGraphParameter](AudioGraphParameter) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
