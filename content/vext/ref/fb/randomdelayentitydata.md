---
title: RandomDelayEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| RandomDelayEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| RandomDelayEntityData(RandomDelayEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| RandomDelayEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata/).                            |
| RandomDelayEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata/).                    |
| RandomDelayEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata/).              |
| RandomDelayEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata/). |

## Properties

| Name      | Type           | Description |
| --------- | -------------- | ----------- |
| minDelay  | number         |             |
| maxDelay  | number         |             |
| realm     | [Realm](/vext/ref/fb/realm/) |             |
| autoStart | bool           |             |
| runOnce   | bool           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RandomDelayEntityData](/vext/ref/fb/randomdelayentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
