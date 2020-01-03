---
title: PadInputActionData
---
### Base Classes

[AxesInputActionData](AxesInputActionData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| PadInputActionData()                                                          | Create a new instance of this container type.                                                                               |
| PadInputActionData(PadInputActionData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| PadInputActionData([AxesInputActionData](AxesInputActionData) other)          | Upcast an instance of type [AxesInputActionData](AxesInputActionData) to [PadInputActionData](PadInputActionData).          |
| PadInputActionData([InputActionData](InputActionData) other)                  | Upcast an instance of type [InputActionData](InputActionData) to [PadInputActionData](PadInputActionData).                  |
| PadInputActionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PadInputActionData](PadInputActionData). |

## Properties

| Name                 | Type                                           | Description |
| -------------------- | ---------------------------------------------- | ----------- |
| button               | [InputDevicePadButtons](InputDevicePadButtons) |             |
| pov                  | [InputDevicePOVs](InputDevicePOVs)             |             |
| pS3AlternativeButton | [InputDevicePadButtons](InputDevicePadButtons) |             |
| useSquareInput       | bool                                           |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [PadInputActionData](PadInputActionData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PadInputActionData](PadInputActionData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
