---
title: MotionControllerInputActionData
---
### Base Classes

[AxesInputActionData](AxesInputActionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| MotionControllerInputActionData()                                                          | Create a new instance of this container type.                                                                                                         |
| MotionControllerInputActionData(MotionControllerInputActionData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| MotionControllerInputActionData([AxesInputActionData](AxesInputActionData) other)          | Upcast an instance of type [AxesInputActionData](AxesInputActionData) to [MotionControllerInputActionData](MotionControllerInputActionData).          |
| MotionControllerInputActionData([InputActionData](InputActionData) other)                  | Upcast an instance of type [InputActionData](InputActionData) to [MotionControllerInputActionData](MotionControllerInputActionData).                  |
| MotionControllerInputActionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MotionControllerInputActionData](MotionControllerInputActionData). |

## Properties

| Name   | Type                                                                     | Description |
| ------ | ------------------------------------------------------------------------ | ----------- |
| button | [InputDeviceMotionControllerButtons](InputDeviceMotionControllerButtons) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MotionControllerInputActionData](MotionControllerInputActionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MotionControllerInputActionData](MotionControllerInputActionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
