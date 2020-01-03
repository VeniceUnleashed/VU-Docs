---
title: SaveEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| SaveEntityData()                                                          | Create a new instance of this container type.                                                                       |
| SaveEntityData(SaveEntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| SaveEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SaveEntityData](/vext/ref/fb/saveentitydata/).                            |
| SaveEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SaveEntityData](/vext/ref/fb/saveentitydata/).                    |
| SaveEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SaveEntityData](/vext/ref/fb/saveentitydata/).              |
| SaveEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SaveEntityData](/vext/ref/fb/saveentitydata/). |

## Properties

| Name                | Type                         | Description |
| ------------------- | ---------------------------- | ----------- |
| saveScreenTexture   | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| levelName           | string                       |             |
| saveFileName        | string                       |             |
| saveNameSID         | string                       |             |
| checkForHumanPlayer | bool                         |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [SaveEntityData](/vext/ref/fb/saveentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SaveEntityData](/vext/ref/fb/saveentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
