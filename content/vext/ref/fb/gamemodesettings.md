---
title: GameModeSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GameModeSettings()                                                          | Create a new instance of this container type.                                                                           |
| GameModeSettings(GameModeSettings other)                                    | Create a reference copy of an instance of the same type.                                                                |
| GameModeSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [GameModeSettings](/vext/ref/fb/gamemodesettings/).                    |
| GameModeSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameModeSettings](/vext/ref/fb/gamemodesettings/). |

## Properties

| Name        | Type                                           | Description |
| ----------- | ---------------------------------------------- | ----------- |
| information | [GameModeInformation](/vext/ref/fb/gamemodeinformation/)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [GameModeSettings](/vext/ref/fb/gamemodesettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameModeSettings](/vext/ref/fb/gamemodesettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
