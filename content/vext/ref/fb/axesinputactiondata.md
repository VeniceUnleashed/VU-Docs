---
title: AxesInputActionData
---
### Base Classes

[InputActionData](/vext/ref/fb/inputactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| AxesInputActionData()                                                          | Create a new instance of this container type.                                                                                 |
| AxesInputActionData(AxesInputActionData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| AxesInputActionData([InputActionData](/vext/ref/fb/inputactiondata/) other)                  | Upcast an instance of type [InputActionData](/vext/ref/fb/inputactiondata/) to [AxesInputActionData](/vext/ref/fb/axesinputactiondata/).                  |
| AxesInputActionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AxesInputActionData](/vext/ref/fb/axesinputactiondata/). |

## Properties

| Name           | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| axis           | [InputDeviceAxes](/vext/ref/fb/inputdeviceaxes/) |             |
| normalizeInput | bool                               |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [AxesInputActionData](/vext/ref/fb/axesinputactiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AxesInputActionData](/vext/ref/fb/axesinputactiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
