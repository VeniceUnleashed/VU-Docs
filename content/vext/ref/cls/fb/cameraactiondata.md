---
title: CameraActionData (Frostbite Container)
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
| CameraActionData([DataContainer](/vext/ref/cls/shr/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CameraActionData](CameraActionData).          |

## Properties

| Name       | Type                                                 | Description |
| ---------- | ---------------------------------------------------- | ----------- |
| actionMode | [CameraMovementActionMode](CameraMovementActionMode) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraActionData](CameraActionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CameraActionData](CameraActionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
