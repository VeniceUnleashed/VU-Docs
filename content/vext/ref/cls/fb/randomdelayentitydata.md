---
title: RandomDelayEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| RandomDelayEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| RandomDelayEntityData(RandomDelayEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| RandomDelayEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [RandomDelayEntityData](RandomDelayEntityData).                            |
| RandomDelayEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RandomDelayEntityData](RandomDelayEntityData).                    |
| RandomDelayEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RandomDelayEntityData](RandomDelayEntityData).              |
| RandomDelayEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RandomDelayEntityData](RandomDelayEntityData). |

## Properties

| Name      | Type           | Description |
| --------- | -------------- | ----------- |
| minDelay  | number         |             |
| maxDelay  | number         |             |
| realm     | [Realm](Realm) |             |
| autoStart | bool           |             |
| runOnce   | bool           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [RandomDelayEntityData](RandomDelayEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RandomDelayEntityData](RandomDelayEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
