---
title: CameraActionData
---
### Base Classes

[SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                      |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| CameraActionData()                                                                   | Create a new instance of this container type.                                                                                    |
| CameraActionData(CameraActionData other)                                             | Create a reference copy of an instance of the same type.                                                                         |
| CameraActionData([SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/) other) | Upcast an instance of type [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata/) to [CameraActionData](/vext/ref/fb/cameraactiondata/). |
| CameraActionData([MovementActionData](/vext/ref/fb/movementactiondata/) other)                     | Upcast an instance of type [MovementActionData](/vext/ref/fb/movementactiondata/) to [CameraActionData](/vext/ref/fb/cameraactiondata/).                     |
| CameraActionData([DataContainer](/vext/ref/shared/class/datacontainer) other)          | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraActionData](/vext/ref/fb/cameraactiondata/).          |

## Properties

| Name       | Type                                                 | Description |
| ---------- | ---------------------------------------------------- | ----------- |
| actionMode | [CameraMovementActionMode](/vext/ref/fb/cameramovementactionmode/) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [CameraActionData](/vext/ref/fb/cameraactiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CameraActionData](/vext/ref/fb/cameraactiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
