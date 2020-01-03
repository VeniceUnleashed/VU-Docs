---
title: ChatSettings
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ChatSettings()                                                          | Create a new instance of this container type.                                                                   |
| ChatSettings(ChatSettings other)                                        | Create a reference copy of an instance of the same type.                                                        |
| ChatSettings([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [ChatSettings](ChatSettings).                                      |
| ChatSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChatSettings](ChatSettings). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| channels | [ChatChannelType](ChatChannelType)\[\] |             |
| antiSpam | [AntiSpamConfig](AntiSpamConfig)       |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [ChatSettings](ChatSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChatSettings](ChatSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
