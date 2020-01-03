---
title: HealthComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| HealthComponentData()                                                          | Create a new instance of this container type.                                                                                 |
| HealthComponentData(HealthComponentData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| HealthComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [HealthComponentData](HealthComponentData).                      |
| HealthComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [HealthComponentData](HealthComponentData).                    |
| HealthComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [HealthComponentData](HealthComponentData).              |
| HealthComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HealthComponentData](HealthComponentData). |

## Properties

| Name         | Type                                           | Description |
| ------------ | ---------------------------------------------- | ----------- |
| health       | number                                         |             |
| materialPair | [MaterialContainerPair](MaterialContainerPair) |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [HealthComponentData](HealthComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HealthComponentData](HealthComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
