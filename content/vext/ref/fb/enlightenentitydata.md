---
title: EnlightenEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| EnlightenEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| EnlightenEntityData(EnlightenEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| EnlightenEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [EnlightenEntityData](/vext/ref/fb/enlightenentitydata/).                            |
| EnlightenEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EnlightenEntityData](/vext/ref/fb/enlightenentitydata/).                    |
| EnlightenEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EnlightenEntityData](/vext/ref/fb/enlightenentitydata/).              |
| EnlightenEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenEntityData](/vext/ref/fb/enlightenentitydata/). |

## Properties

| Name     | Type           | Description |
| -------- | -------------- | ----------- |
| priority | number         |             |
| realm    | [Realm](/vext/ref/fb/realm/) |             |
| enable   | bool           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenEntityData](/vext/ref/fb/enlightenentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenEntityData](/vext/ref/fb/enlightenentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
