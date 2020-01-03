---
title: TrackComponentData
---
### Base Classes

[MeshComponentData](MeshComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| TrackComponentData()                                                          | Create a new instance of this container type.                                                                               |
| TrackComponentData(TrackComponentData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| TrackComponentData([MeshComponentData](MeshComponentData) other)              | Upcast an instance of type [MeshComponentData](MeshComponentData) to [TrackComponentData](TrackComponentData).              |
| TrackComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [TrackComponentData](TrackComponentData).                      |
| TrackComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TrackComponentData](TrackComponentData).                    |
| TrackComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TrackComponentData](TrackComponentData).              |
| TrackComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TrackComponentData](TrackComponentData). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| scrollFactor | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [TrackComponentData](TrackComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TrackComponentData](TrackComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
