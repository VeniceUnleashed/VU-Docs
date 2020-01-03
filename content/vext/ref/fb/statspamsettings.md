---
title: StatSpamSettings
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| StatSpamSettings()                                                          | Create a new instance of this container type.                                                                           |
| StatSpamSettings(StatSpamSettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| StatSpamSettings([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [StatSpamSettings](/vext/ref/fb/statspamsettings/).                                      |
| StatSpamSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StatSpamSettings](/vext/ref/fb/statspamsettings/). |

## Properties

| Name     | Type                                   | Description |
| -------- | -------------------------------------- | ----------- |
| spamList | [StatSpamSetting](/vext/ref/fb/statspamsetting/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [StatSpamSettings](/vext/ref/fb/statspamsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StatSpamSettings](/vext/ref/fb/statspamsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
