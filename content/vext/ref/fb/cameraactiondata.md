---
title: CameraActionData
---
### Base Classes

[SimpleMovementActionBaseData](SimpleMovementActionBaseData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                      |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| CameraActionData()                                                                   | Create a new instance of this container type.                                                                                    |
| CameraActionData(CameraActionData other)                                             | Create a reference copy of an instance of the same type.                                                                         |
| CameraActionData([SimpleMovementActionBaseData](SimpleMovementActionBaseData) other) | Upcast an instance of type [SimpleMovementActionBaseData](SimpleMovementActionBaseData) to [CameraActionData](CameraActionData). |
| CameraActionData([MovementActionData](MovementActionData) other)                     | Upcast an instance of type [MovementActionData](MovementActionData) to [CameraActionData](CameraActionData).                     |
| CameraActionData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraActionData](CameraActionData).          |

## Properties

| Name       | Type                                                 | Description |
| ---------- | ---------------------------------------------------- | ----------- |
| actionMode | [CameraMovementActionMode](CameraMovementActionMode) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraActionData](CameraActionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraActionData](CameraActionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
