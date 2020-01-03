---
title: ConsoleCommandEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ConsoleCommandEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| ConsoleCommandEntityData(ConsoleCommandEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ConsoleCommandEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata/).                            |
| ConsoleCommandEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata/).                    |
| ConsoleCommandEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata/).              |
| ConsoleCommandEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata/). |

## Properties

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| commands | string\[\]     |             |
| realm    | [Realm](/vext/ref/fb/realm/) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
