---
title: UIInputEventNodePort
---
### Base Classes

[UINodePort](/vext/ref/fb/uinodeport/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIInputEventNodePort()                                                          | Create a new instance of this container type.                                                                                   |
| UIInputEventNodePort(UIInputEventNodePort other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIInputEventNodePort([UINodePort](/vext/ref/fb/uinodeport/) other)                            | Upcast an instance of type [UINodePort](/vext/ref/fb/uinodeport/) to [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport/).                            |
| UIInputEventNodePort([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport/). |

## Properties

| Name           | Type                           | Description |
| -------------- | ------------------------------ | ----------- |
| inputEventType | [UIInputAction](/vext/ref/fb/uiinputaction/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIInputEventNodePort](/vext/ref/fb/uiinputeventnodeport/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
