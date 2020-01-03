---
title: ConsoleCommandTriggerEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ConsoleCommandTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| ConsoleCommandTriggerEntityData(ConsoleCommandTriggerEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| ConsoleCommandTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ConsoleCommandTriggerEntityData](/vext/ref/fb/consolecommandtriggerentitydata/).                            |
| ConsoleCommandTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ConsoleCommandTriggerEntityData](/vext/ref/fb/consolecommandtriggerentitydata/).                    |
| ConsoleCommandTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ConsoleCommandTriggerEntityData](/vext/ref/fb/consolecommandtriggerentitydata/).              |
| ConsoleCommandTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConsoleCommandTriggerEntityData](/vext/ref/fb/consolecommandtriggerentitydata/). |

## Properties

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| commandName | string         |             |
| realm       | [Realm](/vext/ref/fb/realm/) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ConsoleCommandTriggerEntityData](/vext/ref/fb/consolecommandtriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConsoleCommandTriggerEntityData](/vext/ref/fb/consolecommandtriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
