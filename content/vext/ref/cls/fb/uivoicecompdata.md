---
title: UIVoiceCompData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UIVoiceCompData()                                                          | Create a new instance of this container type.                                                                         |
| UIVoiceCompData(UIVoiceCompData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UIVoiceCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIVoiceCompData](UIVoiceCompData).                  |
| UIVoiceCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIVoiceCompData](UIVoiceCompData).                                      |
| UIVoiceCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIVoiceCompData](UIVoiceCompData). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| hudMaxSpeakers | number |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UIVoiceCompData](UIVoiceCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIVoiceCompData](UIVoiceCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
