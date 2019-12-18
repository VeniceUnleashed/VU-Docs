---
title: MouseInputActionData (Frostbite Container)
---
### Base Classes

[AxesInputActionData](AxesInputActionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| MouseInputActionData()                                                          | Create a new instance of this container type.                                                                                   |
| MouseInputActionData(MouseInputActionData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| MouseInputActionData([AxesInputActionData](AxesInputActionData) other)          | Upcast an instance of type [AxesInputActionData](AxesInputActionData) to [MouseInputActionData](MouseInputActionData).          |
| MouseInputActionData([InputActionData](InputActionData) other)                  | Upcast an instance of type [InputActionData](InputActionData) to [MouseInputActionData](MouseInputActionData).                  |
| MouseInputActionData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MouseInputActionData](MouseInputActionData). |

## Properties

| Name                      | Type                                               | Description |
| ------------------------- | -------------------------------------------------- | ----------- |
| button                    | [InputDeviceMouseButtons](InputDeviceMouseButtons) |             |
| simulateJoystickAxis      | bool                                               |             |
| rememberExcessInput       | bool                                               |             |
| scaleScrollWheelAxisInput | bool                                               |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [MouseInputActionData](MouseInputActionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MouseInputActionData](MouseInputActionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
