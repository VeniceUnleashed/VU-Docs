---
title: PartComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PartComponentData()                                                          | Create a new instance of this container type.                                                                             |
| PartComponentData(PartComponentData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PartComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [PartComponentData](PartComponentData).                      |
| PartComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PartComponentData](PartComponentData).                    |
| PartComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PartComponentData](PartComponentData).              |
| PartComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PartComponentData](PartComponentData). |

## Properties

| Name           | Type                                   | Description |
| -------------- | -------------------------------------- | ----------- |
| healthStates   | [HealthStateData](HealthStateData)\[\] |             |
| partLinks      | [PartLinkData](PartLinkData)\[\]       |             |
| isSupported    | bool                                   |             |
| isFragile      | bool                                   |             |
| isNetworkable  | bool                                   |             |
| isWindow       | bool                                   |             |
| animatePhysics | bool                                   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PartComponentData](PartComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PartComponentData](PartComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
