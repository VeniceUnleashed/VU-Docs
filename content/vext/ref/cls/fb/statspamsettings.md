---
title: StatSpamSettings (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| StatSpamSettings()                                                          | Create a new instance of this container type.                                                                           |
| StatSpamSettings(StatSpamSettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| StatSpamSettings([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [StatSpamSettings](StatSpamSettings).                                      |
| StatSpamSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatSpamSettings](StatSpamSettings). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| spamList | [StatSpamSetting](StatSpamSetting)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [StatSpamSettings](StatSpamSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatSpamSettings](StatSpamSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
