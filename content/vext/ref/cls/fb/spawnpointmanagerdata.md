---
title: SpawnPointManagerData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| SpawnPointManagerData()                                                          | Create a new instance of this container type.                                                                                     |
| SpawnPointManagerData(SpawnPointManagerData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| SpawnPointManagerData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SpawnPointManagerData](SpawnPointManagerData).                                      |
| SpawnPointManagerData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpawnPointManagerData](SpawnPointManagerData). |

## Properties

| Name           | Type | Description |
| -------------- | ---- | ----------- |
| useAiLodSystem | bool |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpawnPointManagerData](SpawnPointManagerData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpawnPointManagerData](SpawnPointManagerData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
