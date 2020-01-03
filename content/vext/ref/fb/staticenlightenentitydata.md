---
title: StaticEnlightenEntityData
---
### Base Classes

[EnlightenEntityData](/vext/ref/fb/enlightenentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| StaticEnlightenEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| StaticEnlightenEntityData(StaticEnlightenEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| StaticEnlightenEntityData([EnlightenEntityData](/vext/ref/fb/enlightenentitydata/) other)          | Upcast an instance of type [EnlightenEntityData](/vext/ref/fb/enlightenentitydata/) to [StaticEnlightenEntityData](/vext/ref/fb/staticenlightenentitydata/).          |
| StaticEnlightenEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [StaticEnlightenEntityData](/vext/ref/fb/staticenlightenentitydata/).                            |
| StaticEnlightenEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StaticEnlightenEntityData](/vext/ref/fb/staticenlightenentitydata/).                    |
| StaticEnlightenEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StaticEnlightenEntityData](/vext/ref/fb/staticenlightenentitydata/).              |
| StaticEnlightenEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StaticEnlightenEntityData](/vext/ref/fb/staticenlightenentitydata/). |

## Properties

| Name                 | Type                                       | Description |
| -------------------- | ------------------------------------------ | ----------- |
| enlightenData        | [StaticEnlightenData](/vext/ref/fb/staticenlightendata/) |             |
| dynamicEnlightenData | [EnlightenDataAsset](/vext/ref/fb/enlightendataasset/)   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [StaticEnlightenEntityData](/vext/ref/fb/staticenlightenentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StaticEnlightenEntityData](/vext/ref/fb/staticenlightenentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
