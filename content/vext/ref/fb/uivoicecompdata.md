---
title: UIVoiceCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UIVoiceCompData()                                                          | Create a new instance of this container type.                                                                         |
| UIVoiceCompData(UIVoiceCompData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UIVoiceCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIVoiceCompData](/vext/ref/fb/uivoicecompdata/).                  |
| UIVoiceCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIVoiceCompData](/vext/ref/fb/uivoicecompdata/).                                      |
| UIVoiceCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIVoiceCompData](/vext/ref/fb/uivoicecompdata/). |

## Properties

| Name           | Type   | Description |
| -------------- | ------ | ----------- |
| hudMaxSpeakers | number |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UIVoiceCompData](/vext/ref/fb/uivoicecompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIVoiceCompData](/vext/ref/fb/uivoicecompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
