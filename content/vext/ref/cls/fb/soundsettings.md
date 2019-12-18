---
title: SoundSettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| SoundSettings()                                                          | Create a new instance of this container type.                                                                     |
| SoundSettings(SoundSettings other)                                       | Create a reference copy of an instance of the same type.                                                          |
| SoundSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [SoundSettings](SoundSettings).                    |
| SoundSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoundSettings](SoundSettings). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| voEnglish      | string |             |
| audioSystemUri | string |             |
| voCommon       | string |             |
| voItalian      | string |             |
| voSpanish      | string |             |
| voFrench       | string |             |
| voGerman       | string |             |
| enable         | bool   |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [SoundSettings](SoundSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoundSettings](SoundSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
