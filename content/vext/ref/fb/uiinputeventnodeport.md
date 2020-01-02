---
title: UIInputEventNodePort
---
### Base Classes

[UINodePort](UINodePort)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIInputEventNodePort()                                                          | Create a new instance of this container type.                                                                                   |
| UIInputEventNodePort(UIInputEventNodePort other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIInputEventNodePort([UINodePort](UINodePort) other)                            | Upcast an instance of type [UINodePort](UINodePort) to [UIInputEventNodePort](UIInputEventNodePort).                            |
| UIInputEventNodePort([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIInputEventNodePort](UIInputEventNodePort). |

## Properties

| Name           | Type                           | Description |
| -------------- | ------------------------------ | ----------- |
| inputEventType | [UIInputAction](UIInputAction) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIInputEventNodePort](UIInputEventNodePort) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIInputEventNodePort](UIInputEventNodePort) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
