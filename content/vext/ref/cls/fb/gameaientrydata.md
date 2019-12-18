---
title: GameAIEntryData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| GameAIEntryData()                                                          | Create a new instance of this container type.                                                                         |
| GameAIEntryData(GameAIEntryData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| GameAIEntryData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GameAIEntryData](GameAIEntryData).                                      |
| GameAIEntryData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameAIEntryData](GameAIEntryData). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [GameAIEntryData](GameAIEntryData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameAIEntryData](GameAIEntryData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
