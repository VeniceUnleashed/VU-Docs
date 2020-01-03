---
title: KeyboardInputActionData
---
### Base Classes

[InputActionData](/vext/ref/fb/inputactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| KeyboardInputActionData()                                                          | Create a new instance of this container type.                                                                                         |
| KeyboardInputActionData(KeyboardInputActionData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| KeyboardInputActionData([InputActionData](/vext/ref/fb/inputactiondata/) other)                  | Upcast an instance of type [InputActionData](/vext/ref/fb/inputactiondata/) to [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata/).                  |
| KeyboardInputActionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata/). |

## Properties

| Name | Type                               | Description |
| ---- | ---------------------------------- | ----------- |
| key  | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys/) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
