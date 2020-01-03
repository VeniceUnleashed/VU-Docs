---
title: ScriptEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ScriptEntityData()                                                          | Create a new instance of this container type.                                                                           |
| ScriptEntityData(ScriptEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| ScriptEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ScriptEntityData](/vext/ref/fb/scriptentitydata/).                            |
| ScriptEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ScriptEntityData](/vext/ref/fb/scriptentitydata/).                    |
| ScriptEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ScriptEntityData](/vext/ref/fb/scriptentitydata/).              |
| ScriptEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScriptEntityData](/vext/ref/fb/scriptentitydata/). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| code  | string         |             |
| realm | [Realm](/vext/ref/fb/realm/) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ScriptEntityData](/vext/ref/fb/scriptentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ScriptEntityData](/vext/ref/fb/scriptentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
