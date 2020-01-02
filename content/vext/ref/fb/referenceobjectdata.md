---
title: ReferenceObjectData
---
### Base Classes

[GameObjectData](GameObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ReferenceObjectData()                                                          | Create a new instance of this container type.                                                                                 |
| ReferenceObjectData(ReferenceObjectData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ReferenceObjectData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ReferenceObjectData](ReferenceObjectData).                    |
| ReferenceObjectData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ReferenceObjectData](ReferenceObjectData).              |
| ReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ReferenceObjectData](ReferenceObjectData). |

## Properties

| Name                | Type                                                    | Description |
| ------------------- | ------------------------------------------------------- | ----------- |
| blueprintTransform  | [LinearTransform](/vext/ref/shared/class/LinearTransform) |             |
| blueprint           | [Blueprint](Blueprint)                                  |             |
| objectVariation     | [ObjectVariation](ObjectVariation)                      |             |
| streamRealm         | [StreamRealm](StreamRealm)                              |             |
| castSunShadowEnable | bool                                                    |             |
| excluded            | bool                                                    |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ReferenceObjectData](ReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ReferenceObjectData](ReferenceObjectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
