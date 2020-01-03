---
title: DynamicEnlightenEntityData
---
### Base Classes

[EnlightenEntityData](/vext/ref/fb/enlightenentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicEnlightenEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| DynamicEnlightenEntityData(DynamicEnlightenEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DynamicEnlightenEntityData([EnlightenEntityData](/vext/ref/fb/enlightenentitydata/) other)          | Upcast an instance of type [EnlightenEntityData](/vext/ref/fb/enlightenentitydata/) to [DynamicEnlightenEntityData](/vext/ref/fb/dynamicenlightenentitydata/).          |
| DynamicEnlightenEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DynamicEnlightenEntityData](/vext/ref/fb/dynamicenlightenentitydata/).                            |
| DynamicEnlightenEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DynamicEnlightenEntityData](/vext/ref/fb/dynamicenlightenentitydata/).                    |
| DynamicEnlightenEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DynamicEnlightenEntityData](/vext/ref/fb/dynamicenlightenentitydata/).              |
| DynamicEnlightenEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicEnlightenEntityData](/vext/ref/fb/dynamicenlightenentitydata/). |

## Properties

| Name          | Type                                     | Description |
| ------------- | ---------------------------------------- | ----------- |
| enlightenData | [EnlightenDataAsset](/vext/ref/fb/enlightendataasset/) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicEnlightenEntityData](/vext/ref/fb/dynamicenlightenentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicEnlightenEntityData](/vext/ref/fb/dynamicenlightenentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
