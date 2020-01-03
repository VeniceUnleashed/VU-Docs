---
title: MotionControllerInputActionData
---
### Base Classes

[AxesInputActionData](/vext/ref/fb/axesinputactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| MotionControllerInputActionData()                                                          | Create a new instance of this container type.                                                                                                         |
| MotionControllerInputActionData(MotionControllerInputActionData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| MotionControllerInputActionData([AxesInputActionData](/vext/ref/fb/axesinputactiondata/) other)          | Upcast an instance of type [AxesInputActionData](/vext/ref/fb/axesinputactiondata/) to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata/).          |
| MotionControllerInputActionData([InputActionData](/vext/ref/fb/inputactiondata/) other)                  | Upcast an instance of type [InputActionData](/vext/ref/fb/inputactiondata/) to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata/).                  |
| MotionControllerInputActionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata/). |

## Properties

| Name   | Type                                                                     | Description |
| ------ | ------------------------------------------------------------------------ | ----------- |
| button | [InputDeviceMotionControllerButtons](/vext/ref/fb/inputdevicemotioncontrollerbuttons/) |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MotionControllerInputActionData](/vext/ref/fb/motioncontrollerinputactiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
