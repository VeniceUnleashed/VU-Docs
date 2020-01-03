---
title: MouseInputActionData
---
### Base Classes

[AxesInputActionData](/vext/ref/fb/axesinputactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| MouseInputActionData()                                                          | Create a new instance of this container type.                                                                                   |
| MouseInputActionData(MouseInputActionData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| MouseInputActionData([AxesInputActionData](/vext/ref/fb/axesinputactiondata/) other)          | Upcast an instance of type [AxesInputActionData](/vext/ref/fb/axesinputactiondata/) to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata/).          |
| MouseInputActionData([InputActionData](/vext/ref/fb/inputactiondata/) other)                  | Upcast an instance of type [InputActionData](/vext/ref/fb/inputactiondata/) to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata/).                  |
| MouseInputActionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata/). |

## Properties

| Name                      | Type                                               | Description |
| ------------------------- | -------------------------------------------------- | ----------- |
| button                    | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons/) |             |
| simulateJoystickAxis      | bool                                               |             |
| rememberExcessInput       | bool                                               |             |
| scaleScrollWheelAxisInput | bool                                               |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [MouseInputActionData](/vext/ref/fb/mouseinputactiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MouseInputActionData](/vext/ref/fb/mouseinputactiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
