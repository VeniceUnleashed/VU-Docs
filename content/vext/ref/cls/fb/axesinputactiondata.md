---
title: AxesInputActionData (Frostbite Container)
---
### Base Classes

[InputActionData](InputActionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| AxesInputActionData()                                                          | Create a new instance of this container type.                                                                                 |
| AxesInputActionData(AxesInputActionData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| AxesInputActionData([InputActionData](InputActionData) other)                  | Upcast an instance of type [InputActionData](InputActionData) to [AxesInputActionData](AxesInputActionData).                  |
| AxesInputActionData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AxesInputActionData](AxesInputActionData). |

## Properties

| Name           | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| axis           | [InputDeviceAxes](InputDeviceAxes) |             |
| normalizeInput | bool                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [AxesInputActionData](AxesInputActionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AxesInputActionData](AxesInputActionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
