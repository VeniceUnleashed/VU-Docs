---
title: PadInputActionData
---
### Base Classes

[AxesInputActionData](/vext/ref/fb/axesinputactiondata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| PadInputActionData()                                                          | Create a new instance of this container type.                                                                               |
| PadInputActionData(PadInputActionData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| PadInputActionData([AxesInputActionData](/vext/ref/fb/axesinputactiondata/) other)          | Upcast an instance of type [AxesInputActionData](/vext/ref/fb/axesinputactiondata/) to [PadInputActionData](/vext/ref/fb/padinputactiondata/).          |
| PadInputActionData([InputActionData](/vext/ref/fb/inputactiondata/) other)                  | Upcast an instance of type [InputActionData](/vext/ref/fb/inputactiondata/) to [PadInputActionData](/vext/ref/fb/padinputactiondata/).                  |
| PadInputActionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PadInputActionData](/vext/ref/fb/padinputactiondata/). |

## Properties

| Name                 | Type                                           | Description |
| -------------------- | ---------------------------------------------- | ----------- |
| button               | [InputDevicePadButtons](/vext/ref/fb/inputdevicepadbuttons/) |             |
| pov                  | [InputDevicePOVs](/vext/ref/fb/inputdevicepovs/)             |             |
| pS3AlternativeButton | [InputDevicePadButtons](/vext/ref/fb/inputdevicepadbuttons/) |             |
| useSquareInput       | bool                                           |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [PadInputActionData](/vext/ref/fb/padinputactiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PadInputActionData](/vext/ref/fb/padinputactiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
