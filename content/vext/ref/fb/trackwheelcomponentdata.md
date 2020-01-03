---
title: TrackWheelComponentData
---
### Base Classes

[WheelComponentData](WheelComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| TrackWheelComponentData()                                                          | Create a new instance of this container type.                                                                                         |
| TrackWheelComponentData(TrackWheelComponentData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| TrackWheelComponentData([WheelComponentData](WheelComponentData) other)            | Upcast an instance of type [WheelComponentData](WheelComponentData) to [TrackWheelComponentData](TrackWheelComponentData).            |
| TrackWheelComponentData([PartComponentData](PartComponentData) other)              | Upcast an instance of type [PartComponentData](PartComponentData) to [TrackWheelComponentData](TrackWheelComponentData).              |
| TrackWheelComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [TrackWheelComponentData](TrackWheelComponentData).                      |
| TrackWheelComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TrackWheelComponentData](TrackWheelComponentData).                    |
| TrackWheelComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TrackWheelComponentData](TrackWheelComponentData).              |
| TrackWheelComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TrackWheelComponentData](TrackWheelComponentData). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| boneName | string |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TrackWheelComponentData](TrackWheelComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TrackWheelComponentData](TrackWheelComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
