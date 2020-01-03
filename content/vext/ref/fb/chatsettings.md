---
title: ChatSettings
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ChatSettings()                                                          | Create a new instance of this container type.                                                                   |
| ChatSettings(ChatSettings other)                                        | Create a reference copy of an instance of the same type.                                                        |
| ChatSettings([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [ChatSettings](/vext/ref/fb/chatsettings/).                                      |
| ChatSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChatSettings](/vext/ref/fb/chatsettings/). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| channels | [ChatChannelType](/vext/ref/fb/chatchanneltype/)\[\] |             |
| antiSpam | [AntiSpamConfig](/vext/ref/fb/antispamconfig/)       |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [ChatSettings](/vext/ref/fb/chatsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChatSettings](/vext/ref/fb/chatsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
