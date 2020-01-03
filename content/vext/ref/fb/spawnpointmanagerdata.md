---
title: SpawnPointManagerData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SpawnPointManagerData()                                                          | Create a new instance of this container type.                                                                                     |
| SpawnPointManagerData(SpawnPointManagerData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SpawnPointManagerData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SpawnPointManagerData](/vext/ref/fb/spawnpointmanagerdata/).                                      |
| SpawnPointManagerData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnPointManagerData](/vext/ref/fb/spawnpointmanagerdata/). |

## Properties

| Name           | Type | Description |
| -------------- | ---- | ----------- |
| useAiLodSystem | bool |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnPointManagerData](/vext/ref/fb/spawnpointmanagerdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpawnPointManagerData](/vext/ref/fb/spawnpointmanagerdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
